import React from 'react';
import { Differ, DiffResult, Viewer } from '../src';

const differ = new Differ({
  detectCircular: false,
  arrayDiffMethod: 'lcs',
});

const Toolbox: React.FC = () => {
  const [expand, setExpand] = React.useState(false);
  const [before, setBefore] = React.useState('');
  const [after, setAfter] = React.useState('');
  const [error, setError] = React.useState('');
  const [diffResult, setDiffResult] = React.useState<readonly [DiffResult[], DiffResult[]]>([[], []]);

  const diff = (before: string, after: string) => {
    setError('');
    let l: any = undefined;
    let r: any = undefined;
    try {
      l = JSON.parse(before);
      r = JSON.parse(after);
    } catch (e) {
      setError('The input should be valid JSON!');
    }
    setDiffResult(differ.diff(l, r));
  };

  const clearAll = () => {
    setBefore('');
    setAfter('');
  };

  return (
    <div className="toolbox">
      <div className="toggle" onClick={() => setExpand(pre => !pre)}>
        {expand ? '[-] Hide easy diff tool' : '[+] Expand easy diff tool'}
      </div>
      {
        expand && (
          <>
            <div className="inputs">
              <textarea value={before} onChange={e => setBefore(e.target.value)} placeholder="before" />
              <textarea value={after} onChange={e => setAfter(e.target.value)} placeholder="after" />
            </div>
            <button onClick={() => diff(before, after)}>Generate Diff</button>
            <button onClick={() => clearAll}>Clear All Input</button>
            <span className="error">{error}</span>
            {
              !!diffResult[0].length && !!diffResult[1].length && (
                <Viewer
                  className="viewer"
                  diff={diffResult}
                  lineNumbers={true}
                  highlightInlineDiff={true}
                  inlineDiffOptions={{ mode: 'word' }}
                  hideUnchangedLines={true}
                />
              )
            }
          </>
        )
      }
      <hr />
    </div>
  );
};

Toolbox.displayName = 'Toolbox';

export default Toolbox;
