import React from 'react';

import { Differ, Viewer } from '../src';
import type { DifferOptions } from '../src/differ';
import { InlineDiffOptions } from '../src/utils/get-inline-diff';
import type { ViewerProps } from '../src/viewer';

import './docs.less';

interface PropTypes {
  onSwitch: () => void;
}

const Docs: React.FC<PropTypes> = props => {
  // differ props
  const [detectCircular] = React.useState(true);
  const [maxDepth, setMaxDepth] = React.useState(Infinity);
  const [showModifications, setShowModifications] = React.useState(true);
  const [arrayDiffMethod, setArrayDiffMethod] = React.useState<DifferOptions['arrayDiffMethod']>('lcs');
  const [ignoreCase, setIgnoreCase] = React.useState(false);
  const [recursiveEqual, setRecursiveEqual] = React.useState(true);

  // viewer props
  const [indent, setIndent] = React.useState(4);
  const [highlightInlineDiff, setHighlightInlineDiff] = React.useState(true);
  const [inlineDiffMode, setInlineDiffMode] = React.useState<InlineDiffOptions['mode']>('word');
  const [inlineDiffSeparator, setInlineDiffSeparator] = React.useState(' ');
  const [hideUnchangedLines, setHideUnchangedLines] = React.useState(true);
  const [useVirtual, setUseVirtual] = React.useState(false);

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
    ignoreCase,
    recursiveEqual,
  ]);
  const differ = React.useMemo(() => new Differ(differOptions), [differOptions]);

  const [before1] = React.useState({
    a: 1,
    b: 2,
    d: [1, 5, 4],
    e: ['1', 2, { f: 3, g: null, h: [5], i: [] }, 9],
    m: [],
    q: 'JSON diff can\'t be possible',
    r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    s: 1024,
  });
  const [after1] = React.useState({
    b: 2,
    c: 3,
    d: [1, 3, 4, 6],
    e: ['1', 2, 3, { f: 4, g: false, i: [7, 8] }, 10],
    j: { k: 11, l: 12 },
    m: [
      { n: 1, o: 2 },
      { p: 3 },
    ],
    q: 'JSON diff is possible!',
    r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed quasi architecto beatae incididunt ut labore et dolore magna aliqua.',
    s: '1024',
  });
  const diff1 = React.useMemo(() => differ.diff(before1, after1), [differ, before1, after1]);

  const [before2] = React.useState([2, 4, 3]);
  const [after2] = React.useState([2, 5, 4, 3, 1]);
  const diff2 = React.useMemo(() => differ.diff(before2, after2), [differ, before2, after2]);

  const [before3] = React.useState({ a: 1, b: [2] });
  const [after3] = React.useState(666);
  const diff3 = React.useMemo(() => differ.diff(before3, after3), [differ, before3, after3]);

  const [before4] = React.useState(233);
  const [after4] = React.useState(666);
  const diff4 = React.useMemo(() => differ.diff(before4, after4), [differ, before4, after4]);

  const [before5] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
  const [after5] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 99, 10, 11, 12, 13, 14, 15, 16, 17, 1818, 1919, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
  const diff5 = React.useMemo(() => differ.diff(before5, after5), [differ, before5, after5]);

  const [before6] = React.useState([
    { text: 'hello world' },
  ]);
  const [after6] = React.useState([
    { text: 'above' },
    { text: 'hello world' },
    { text: 'below' },
  ]);
  const diff6 = React.useMemo(() => differ.diff(before6, after6), [differ, before6, after6]);

  const viewerCommonProps: Partial<ViewerProps> = {
    indent: indent,
    lineNumbers: true,
    highlightInlineDiff,
    inlineDiffOptions: {
      mode: inlineDiffMode,
      wordSeparator: inlineDiffSeparator || '',
    },
    hideUnchangedLines,
    virtual: useVirtual ? {} : false,
  };

  return (
    <div className="demo-root">
      <h1>JSON Diff Kit</h1>
      <div className="statistics">
        <img src="https://img.shields.io/npm/v/json-diff-kit.svg" />
        <img src="https://img.shields.io/npm/dm/json-diff-kit.svg" />
        <img src="https://codecov.io/gh/RexSkz/json-diff-kit/branch/master/graph/badge.svg?token=8YRG3M4WTO" />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=rexskz&repo=json-diff-kit&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="150"
          height="20"
          title="GitHub"
        />
      </div>
      <p>A better JSON differ & viewer library written in TypeScript.</p>
      <div className="banner" onClick={props.onSwitch}>
        Click to try out the playground!
      </div>
      <h2>Differ Configuration</h2>
      <div className="diff-config">
        <form>
          <label htmlFor="detect-circular">
            Detect circular references:
            <input
              type="checkbox"
              id="detect-circular"
              checked={detectCircular}
              disabled={true}
            />
          </label>
          <blockquote>Whether to detect circular reference in source objects before diff starts. Default is <code>true</code>. If you are confident about your data (maybe it's from <code>JSON.parse</code> or an API response), you can set it to <code>false</code> to improve performance, but the algorithm may not stop if circular reference does show up.</blockquote>
          <label htmlFor="max-depth">
            Max depth:
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
            <label htmlFor="max-depth-infinity" style={{ margin: '0 0 0 4px' }}>
              (
              <input
                type="checkbox"
                id="max-depth-infinity"
                checked={maxDepth === Infinity}
                onChange={e => setMaxDepth(e.target.checked ? Infinity : 0)}
              />
              infinity)
            </label>
          </label>
          <blockquote>Max depth, default <code>Infinity</code> means no depth limit.</blockquote>
          <label htmlFor="show-modifications">
            Show modifications:
            <input
              type="checkbox"
              id="show-modifications"
              checked={showModifications}
              onChange={e => setShowModifications(e.target.checked)}
            />
          </label>
          <blockquote>Support recognizing modifications, default <code>true</code> means the differ will output the <code>* modified</code> sign apart from the basic <code>+ add</code> and <code>- remove</code> sign. If you prefer Git-style output, please set it to <code>false</code>.</blockquote>
          <label htmlFor="array-diff-method">
            Array diff method:
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
          <blockquote>The way to diff arrays, default is <code>"normal"</code>, using <code>"lcs"</code> may get a better result but much slower. <code>"unorder-normal"</code> and <code>"unorder-lcs"</code> are for unordered arrays (the order of elements in the array doesn't matter).</blockquote>
          <label htmlFor="ignore-case">
            Ignore case:
            <input
              type="checkbox"
              id="ignore-case"
              checked={ignoreCase}
              onChange={e => setIgnoreCase(e.target.checked)}
            />
          </label>
          <blockquote>Whether to ignore case when comparing string values.</blockquote>
          <label htmlFor="recursive-equal">
            Recursive equal:
            <input
              type="checkbox"
              id="recursive-equal"
              checked={recursiveEqual}
              onChange={e => setRecursiveEqual(e.target.checked)}
            />
          </label>
          <blockquote>Whether to use recursive equal to compare objects. This can provide a better output when there are unchanged object items in an array, but it may cause performance issues when the data is very large.</blockquote>
        </form>
      </div>
      <h2>Viewer Configuration</h2>
      <div className="view-config">
        <form>
          <label htmlFor="indent">
            Indent:
            <input
              type="number"
              id="indent"
              min={1}
              max={16}
              value={indent}
              onChange={e => setIndent(Number(e.target.value))}
            />
          </label>
          <blockquote>Controls the indent in the <code>&lt;Viewer&gt;</code> component.</blockquote>
          <label htmlFor="highlight-inline-diff">
            Highlight Inline Diff:
            <input
              type="checkbox"
              id="highlight-inline-diff"
              checked={highlightInlineDiff}
              onChange={e => setHighlightInlineDiff(e.target.checked)}
            />
          </label>
          <blockquote>Whether to show the inline diff highlight. For example, if the left value <code>"JSON diff can't be possible"</code> is changed to the right value <code>"JSON diff is possible"</code>, it will be recognized as we first remove <code>can't be</code> and then add <code>is</code>. This feature is powered by <a href="https://github.com/gliese1337/fast-myers-diff" target="_blank">gliese1337/fast-myers-diff</a>. Note: the <code>showModification</code> must be enabled, or you will not see modified lines.</blockquote>
          <label htmlFor="inline-diff-options">
            Inline Diff Options:
            <span>Diff method</span>
            <select
              id="inline-diff-mode"
              value={inlineDiffMode}
              onChange={e => setInlineDiffMode(e.target.value as InlineDiffOptions['mode'])}
            >
              <option value="char">char (default)</option>
              <option value="word">word</option>
            </select>
            <span>Word separator</span>
            <input
              id="inline-diff-separator"
              value={inlineDiffSeparator}
              onChange={e => setInlineDiffSeparator(e.target.value)}
              placeholder="Works when mode = char"
            />
          </label>
          <blockquote>You can control the inline diff behaviour. If the inline diff sources are sentences, we can diff them "by word" instead of "by character". For normal sentences, just set the method to <code>word</code> and the separator to <code>" "</code> (a half-width space) like this demo. But if you prefer the Git-style output, you can leave this props default, which is diffing "by character".</blockquote>
          <label htmlFor="hide-unchanged-lines">
            Hide unchanged lines:
            <input
              type="checkbox"
              id="hide-unchanged-lines"
              checked={hideUnchangedLines}
              onChange={e => setHideUnchangedLines(e.target.checked)}
            />
          </label>
          <blockquote>Whether to hide the unchanged lines (like what GitHub and GitLab does).</blockquote>
          <label htmlFor="use-virtual">
            Use virtual:
            <input
              type="checkbox"
              id="use-virtual"
              checked={useVirtual}
              onChange={e => setUseVirtual(e.target.checked)}
            />
          </label>
          <blockquote>Whether to use virtual list to render the diff. This can improve the performance when the diff result is very large.</blockquote>
        </form>
      </div>
      <div className="diff-result">
        <h2>Examples</h2>
        <p>An regular example with 2 objects.</p>
        <Viewer diff={diff1} {...viewerCommonProps} />
        <p>An example with 2 arrays.</p>
        <Viewer diff={diff2} {...viewerCommonProps} />
        <p>2 variables with different types. The algorithm always returns the result "left is removed, right is added".</p>
        <Viewer diff={diff3} {...viewerCommonProps} />
        <p>2 variables with the same primitive type. The algorithm always returns the result "left is modified to right" (if <code>showModification</code> is set to <code>false</code>, it will return the result "left is removed, right is added").</p>
        <Viewer diff={diff4} {...viewerCommonProps} />
        <p>Most of the lines are equal, only small amount of lines are different. You can use the <code>hideUnchangedLines</code> prop to hide the unchanged parts and make the result shorter. Notice: when the <code>diff</code> prop is changed, the expand status will be reset, it's your responsibility to keep the <code>diff</code> props unchanged (you may want to use <code>useState</code> or <code>useMemo</code>).</p>
        <Viewer diff={diff5} {...viewerCommonProps} />
        <p>An example for the recursive equal. If the differ option <code>recursiveEqual</code> is set to <code>true</code>, the object items should be treated as equal.</p>
        <Viewer diff={diff6} {...viewerCommonProps} />
      </div>
      <div className="demo-footer">
        <p>Made with ♥ by Rex Zeng</p>
      </div>
      <a href="https://github.com/rexskz/json-diff-kit">
        <img
          style={{ position: 'absolute', top: 0, right: 0, border: 'none' }}
          src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
          alt="Fork me on GitHub"
        />
      </a>
    </div>
  );
};

export default Docs;
