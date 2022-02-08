import React from 'react';
import ReactDOM from 'react-dom';

import { Differ, Viewer } from '../src';
import type { DifferOptions } from '../src/differ';

import '../src/viewer.less';
import './demo.less';

const Demo: React.FC = () => {
  const [detectCircular] = React.useState(true);
  const [maxDepth, setMaxDepth] = React.useState(Infinity);
  const [showModifications, setShowModifications] = React.useState(true);
  const [arrayDiffMethod, setArrayDiffMethod] = React.useState<DifferOptions['arrayDiffMethod']>('lcs');

  const differ = React.useMemo(() => new Differ({
    detectCircular,
    maxDepth,
    showModifications,
    arrayDiffMethod,
  }), [detectCircular, maxDepth, showModifications, arrayDiffMethod]);

  const [before1] = React.useState({
    a: 1,
    b: 2,
    d: [1, 5, 4],
    e: ['1', 2, { f: 3, g: null, h: [5], i: [] }, 9],
  });
  const [after1] = React.useState({
    b: 2,
    c: 3,
    d: [1, 3, 4, 6],
    e: ['1', 2, 3, { f: 4, g: false, i: [7, 8] }, 10],
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

  return (
    <div className="demo-root">
      <h1>JSON Diff Kit</h1>
      <p>A better JSON differ & viewer.</p>
      <h2>Diff Configuration</h2>
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
          <blockquote>Whether to detect circular reference in source objects before diff starts. Default is <code>true</code>. If you are confident for your data (e.g. from <code>JSON.parse</code> or an API response), you can set it to <code>false</code> to improve performance, but the algorithm may not stop if circular reference does show up.</blockquote>
          <label htmlFor="max-depth">
            Max depth:
            <input
              type="number"
              id="max-depth"
              value={maxDepth}
              onChange={e => setMaxDepth(Number(e.target.value))}
              min={0}
              max={10}
              step={1}
              disabled={maxDepth === Infinity}
              style={{ width: '3em' }}
            />
            <label htmlFor="max-depth-infinity" style={{ margin: '0 0 0 4px' }}>
              (infinity
              <input
                type="checkbox"
                id="max-depth-infinity"
                checked={maxDepth === Infinity}
                onChange={e => setMaxDepth(e.target.checked ? Infinity : 0)}
              />
              )
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
          <blockquote>Support recognizing modifications, default <code>true</code> means the differ will output the <code>* modified</code> sign apart from the basic <code>+ add</code> and <code>- remove</code> sign. If you prefer Git output, please set it to <code>false</code>.</blockquote>
          <label htmlFor="array-diff-method">
            Array diff method:
            <select
              id="array-diff-method"
              value={arrayDiffMethod}
              onChange={e => setArrayDiffMethod(e.target.value as DifferOptions['arrayDiffMethod'])}
            >
              <option value="normal">normal</option>
              <option value="lcs">lcs</option>
              <option value="unorder-normal">unorder-normal</option>
              <option value="unorder-lcs">unorder-lcs</option>
            </select>
          </label>
          <blockquote>The way to diff arrays, default is <code>"normal"</code>. You can change this value and see the examples below to see their differences.</blockquote>
        </form>
      </div>
      <div className="diff-result">
        <h2>Examples</h2>
        <p>An regular example with 2 objects.</p>
        <Viewer diff={diff1} indent={4} lineNumbers={true} />
        <p>An example with 2 arrays.</p>
        <Viewer diff={diff2} indent={4} lineNumbers={true} />
        <p>2 variables with different types. The algorithm always returns the result "left is removed, right is added".</p>
        <Viewer diff={diff3} indent={4} lineNumbers={true} />
        <p>2 variables with the same primitive type. The algorithm always returns the result "left is modified to right".</p>
        <Viewer diff={diff4} indent={4} lineNumbers={true} />
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));
