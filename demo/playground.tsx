import React from 'react';
import debounce from 'lodash/debounce';

import { Differ, Viewer } from '../src';
import type { DifferOptions, InlineDiffOptions } from '../src';

import './playground.less';
import useInitialValues from './use-initial-values';

interface PlaygroundProps {
  onClose: () => void;
}

const Playground: React.FC<PlaygroundProps> = props => {
  // differ props
  const [detectCircular] = React.useState(true);
  const [maxDepth, setMaxDepth] = React.useState(Infinity);
  const [showModifications, setShowModifications] = React.useState(true);
  const [arrayDiffMethod, setArrayDiffMethod] = React.useState<DifferOptions['arrayDiffMethod']>('lcs');
  const [ignoreCase, setIgnoreCase] = React.useState(false);
  const [recursiveEqual, setRecursiveEqual] = React.useState(false);

  // viewer props
  const [indent, setIndent] = React.useState(4);
  const [highlightInlineDiff, setHighlightInlineDiff] = React.useState(true);
  const [inlineDiffMode, setInlineDiffMode] = React.useState<InlineDiffOptions['mode']>('word');
  const [inlineDiffSeparator, setInlineDiffSeparator] = React.useState(' ');
  const [hideUnchangedLines, setHideUnchangedLines] = React.useState(true);

  const differOptions = React.useMemo(() => ({
    detectCircular,
    maxDepth,
    showModifications,
    arrayDiffMethod,
    ignoreCase,
    recursiveEqual,
  }), [
    detectCircular,
    maxDepth,
    showModifications,
    arrayDiffMethod,
    recursiveEqual,
  ]);
  const differ = React.useMemo(() => new Differ(differOptions), [differOptions]);
  const [diff, setDiff] = React.useState(differ.diff("", ""));
  const [fullscreen, setFullscreen] = React.useState(false);
  const [error, setError] = React.useState('');
  const triggerDiff = React.useCallback(debounce((before: string, after: string) => {
    try {
      const result = differ.diff(
        JSON.parse(String(before || 'null')),
        JSON.parse(String(after || 'null')),
      );
      setDiff(result);
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  }, 500), [differ]);

  const viewerOptions = {
    indent,
    lineNumbers: true,
    highlightInlineDiff,
    inlineDiffOptions: {
      mode: inlineDiffMode,
      wordSeparator: inlineDiffSeparator,
    },
    hideUnchangedLines,
  };

  const code = `
const d = new Differ(${JSON.stringify(differOptions, null, 2)});
const diff = d.diff(before, after);

const viewerProps = ${JSON.stringify(viewerOptions, null, 2)};
return (
  <Viewer
    diff={diff}
    {...viewerProps}
  />
);
`.trim();

  // inputs
  const { l, r } = useInitialValues();
  const before = React.useRef(l || '');
  const after = React.useRef(r || '');
  const [key, forceUpdate] = React.useState(0);
  const setBefore = (value: string) => {
    before.current = value;
    triggerDiff(before.current, after.current);
  };
  const setAfter = (value: string) => {
    after.current = value;
    triggerDiff(before.current, after.current);
  };
  const clearAll = () => {
    before.current = '';
    after.current = '';
    setDiff(differ.diff('null', 'null'));
    forceUpdate(pre => pre + 1);
  };
  React.useEffect(() => {
    triggerDiff(before.current, after.current);
  }, [differOptions]);

  return (
    <div className="playground">
      <div className="layout-left">
        <div className="logo">JSON Diff Kit</div>
        <div className="back" onClick={props.onClose}>Go to docs & demo</div>
        <div className="config">
          <form>
            <legend>DIFFER CONFIGURATION</legend>
            <label htmlFor="detect-circular">
              <span>Detect circular references</span>
              <input
                type="checkbox"
                id="detect-circular"
                checked={detectCircular}
                disabled={true}
              />
            </label>
            <label htmlFor="max-depth">
              <span>Max depth</span>
              <label htmlFor="max-depth-infinity" style={{ margin: '0 4px 0 0' }}>
                ∞&nbsp;
                <input
                  type="checkbox"
                  id="max-depth-infinity"
                  checked={maxDepth === Infinity}
                  onChange={e => setMaxDepth(e.target.checked ? Infinity : 0)}
                />
              </label>
              <input
                type="number"
                id="max-depth"
                value={maxDepth === Infinity ? undefined : maxDepth}
                onChange={e => setMaxDepth(Number(e.target.value))}
                min={0}
                max={10}
                step={1}
                disabled={maxDepth === Infinity}
                style={{ width: '3em' }}
              />
            </label>
            <label htmlFor="show-modifications">
              <span>Show modifications</span>
              <input
                type="checkbox"
                id="show-modifications"
                checked={showModifications}
                onChange={e => setShowModifications(e.target.checked)}
              />
            </label>
            <label htmlFor="array-diff-method">
              <span>Array diff method</span>
              <select
                id="array-diff-method"
                value={arrayDiffMethod}
                onChange={e => setArrayDiffMethod(e.target.value as DifferOptions['arrayDiffMethod'])}
              >
                <option value="normal">normal (default)</option>
                <option value="lcs">lcs</option>
                <option value="unorder-normal">unorder-normal</option>
                <option value="unorder-lcs">unorder-lcs</option>
              </select>
            </label>
            <label htmlFor="ignore-case">
              <span>Ignore case</span>
              <input
                type="checkbox"
                id="ignore-case"
                checked={ignoreCase}
                onChange={e => setIgnoreCase(e.target.checked)}
              />
            </label>
            <label htmlFor="recursive-equal">
              <span>Recursive equal</span>
              <input
                type="checkbox"
                id="recursive-equal"
                checked={recursiveEqual}
                onChange={e => setRecursiveEqual(e.target.checked)}
              />
            </label>
          </form>
        </div>
        <div className="config">
          <form>
            <legend>VIEWER CONFIGURATION</legend>
            <label htmlFor="indent">
              <span>Indent</span>
              <input
                type="number"
                id="indent"
                min={1}
                max={16}
                value={indent}
                onChange={e => setIndent(Number(e.target.value))}
              />
            </label>
            <label htmlFor="highlight-inline-diff">
              <span>Highlight inline diff</span>
              <input
                type="checkbox"
                id="highlight-inline-diff"
                checked={highlightInlineDiff}
                onChange={e => setHighlightInlineDiff(e.target.checked)}
              />
            </label>
            <label htmlFor="inline-diff-mode">
              <span>Inline diff method</span>
              <select
                id="inline-diff-mode"
                disabled={!highlightInlineDiff}
                value={inlineDiffMode}
                onChange={e => setInlineDiffMode(e.target.value as InlineDiffOptions['mode'])}
              >
                <option value="char">char (default)</option>
                <option value="word">word</option>
              </select>
            </label>
            <label htmlFor="inline-diff-separator">
              <span>Word separator</span>
              <input
                id="inline-diff-separator"
                disabled={!highlightInlineDiff}
                value={inlineDiffSeparator}
                onChange={e => setInlineDiffSeparator(e.target.value)}
                placeholder="Works when mode = char"
              />
            </label>
            <label htmlFor="hide-unchanged-lines">
              <span>Hide unchanged lines</span>
              <input
                type="checkbox"
                id="hide-unchanged-lines"
                checked={hideUnchangedLines}
                onChange={e => setHideUnchangedLines(e.target.checked)}
              />
            </label>
          </form>
        </div>
        <div className="config">
          <form>
            <legend>GENERATEDE CODE</legend>
            <pre>{code}</pre>
          </form>
        </div>
        <div className="statistics">
          <img src="https://img.shields.io/npm/v/json-diff-kit.svg?style=flat" style={{ marginRight: 8 }} />
          <iframe
            src="https://ghbtns.com/github-btn.html?user=rexskz&repo=json-diff-kit&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="90"
            height="20"
            title="GitHub"
          />
        </div>
      </div>
      <div className={`layout-right${fullscreen ? ' layout-right-fullscreen' : ''}`}>
        <div className="title">
          INPUTS
          <span className="control-button" onClick={() => clearAll()}>[CLEAR ALL]</span>
        </div>
        <div className="inputs">
          <textarea
            key={`before-${key}`}
            placeholder="before"
            defaultValue={before.current}
            onChange={e => setBefore(e.target.value)}
          />
          <textarea
            key={`after-${key}`}
            placeholder="after"
            defaultValue={after.current}
            onChange={e => setAfter(e.target.value)}
          />
        </div>
        <div className="title">
          DIFF RESULTS
          <span className="control-button" onClick={() => setFullscreen(pre => !pre)}>[{fullscreen ? 'EXIT ' : ''}PAGE FULLSCREEN]</span>
          {!!error && <span className="error">{error}</span>}
        </div>
        <div className="results">
          <Viewer diff={diff} {...viewerOptions} />
        </div>
      </div>
    </div>
  );
};

Playground.displayName = 'Playground';

export default Playground;
