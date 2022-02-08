import React from 'react';
import ReactDOM from 'react-dom';

import { Differ, Viewer } from '../src';

import './demo.less';

const Demo: React.FC = () => {
  const differ = React.useRef(new Differ());

  const [before1, setBefore1] = React.useState({
    a: 1,
    b: 2,
    d: [1, 5, 4],
    e: ['1', 2, { f: 3, g: null, h: [5], i: [] }, 9],
  });
  const [after1, setAfter1] = React.useState({
    b: 2,
    c: 3,
    d: [1, 3, 4, 6],
    e: ['1', 2, 3, { f: 4, g: false, i: [7, 8] }, 10],
  });
  const diff1 = React.useMemo(() => differ.current.diff(before1, after1), [before1, after1]);

  const [before2, setBefore2] = React.useState([2, 4, 3]);
  const [after2, setAfter2] = React.useState([2, 5, 4, 3, 1]);
  const diff2 = React.useMemo(() => differ.current.diff(before2, after2), [before2, after2]);

  const [before3, setBefore3] = React.useState({ a: 1, b: [2] });
  const [after3, setAfter3] = React.useState(666);
  const diff3 = React.useMemo(() => differ.current.diff(before3, after3), [before3, after3]);

  const [before4, setBefore4] = React.useState(233);
  const [after4, setAfter4] = React.useState(666);
  const diff4 = React.useMemo(() => differ.current.diff(before4, after4), [before4, after4]);

  return (
    <div className="demo-root">
      <Viewer diff={diff1} indent={4} lineNumbers={true} style={{ width: '40em' }} />
      <Viewer diff={diff2} indent={4} lineNumbers={true} style={{ width: '20em' }} />
      <Viewer diff={diff3} indent={4} lineNumbers={true} style={{ width: '20em' }} />
      <Viewer diff={diff4} indent={4} lineNumbers={true} style={{ width: '20em' }} />
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));
