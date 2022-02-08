import * as React from 'react';

import type { DiffResult } from './differ';

import './viewer.less';

interface ViewerProps {
  /** The diff result `[before, after]`. */
  diff: readonly [DiffResult[], DiffResult[]];
  /** Configure indent, default `2` means 2 spaces. */
  indent?: number | 'tab';
  /** Background colour for 3 types of lines. */
  bgColour?: {
    add?: string;
    remove?: string;
    modify?: string;
  };
  /** Display line numbers, default is `true`. */
  lineNumbers?: boolean;
  /** Extra class names */
  className?: string;
  /** Extra styles */
  style?: React.CSSProperties;
}

const Viewer: React.FC<ViewerProps> = props => {
  const [linesLeft, linesRight] = props.diff;

  const indent = props.indent ?? 2;
  const indentChar = indent === 'tab' ? '\t' : ' ';
  const indentSize = indent === 'tab' ? 1 : indent;

  return (
    <table
      className={`json-diff-viewer ${props.className}`}
      style={props.style}
    >
      <tbody>
        {
          linesLeft.map((_, index) => {
            const l = linesLeft[index];
            const r = linesRight[index];
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                {props.lineNumbers && <td className={`line-${l.type} line-number`}>{l.lineNumber}</td>}
                <td className={`line-${l.type}`}>
                  <pre>{indentChar.repeat(l.level * indentSize)}{l.text}{l.comma && ','}</pre>
                </td>
                {props.lineNumbers && <td className={`line-${r.type} line-number`}>{r.lineNumber}</td>}
                <td className={`line-${r.type}`}>
                  <pre>{indentChar.repeat(r.level * indentSize)}{r.text}{r.comma && ','}</pre>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

Viewer.displayName = 'Viewer';

export default Viewer;
