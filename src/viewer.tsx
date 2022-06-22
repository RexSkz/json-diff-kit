import * as React from 'react';

import type { DiffResult } from './differ';
import getInlineDiff, { InlineDiffResult } from './utils/get-inline-diff';

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
  /** Display line numbers, default is `false`. */
  lineNumbers?: boolean;
  /** Whether to show the inline diff highlight, default is `false`. */
  highlightInlineDiff?: boolean;
  /** Extra class names */
  className?: string;
  /** Extra styles */
  style?: React.CSSProperties;
}

const Viewer: React.FC<ViewerProps> = props => {
  const [linesLeft, linesRight] = props.diff;

  const lineNumberWidth = props.lineNumbers ? `${String(linesLeft.length).length / 2}em` : 0;

  const indent = props.indent ?? 2;
  const indentChar = indent === 'tab' ? '\t' : ' ';
  const indentSize = indent === 'tab' ? 1 : indent;

  const renderInlineDiffResult = (arr: InlineDiffResult[][]) => {
    return arr.map(result => (
      <>
        {
          result.map((item, index) => {
            if (item.type === 'equal') {
              return (
                <span key={`${index}-${item.type}-${item.text}`}>
                  {item.text}
                </span>
              );
            }
            return (
              <span
                key={`${index}-${item.type}-${item.text}`}
                className={`inline-diff-${item.type}`}
              >
                {item.text}
              </span>
            )
          })
        }
      </>
    ));
  };

  const renderLine = (index: number) => {
    const l = linesLeft[index];
    const r = linesRight[index];
    const [lText, rText] = props.highlightInlineDiff && l.type === 'modify' && r.type === 'modify'
      ? renderInlineDiffResult(getInlineDiff(l.text, r.text))
      : [l.text, r.text];

    const bgColourL = l.type !== 'equal' ? props.bgColour?.[l.type] ?? '' : '';
    const bgColourR = r.type !== 'equal' ? props.bgColour?.[r.type] ?? '' : '';

    return (
      // eslint-disable-next-line react/no-array-index-key
      <tr key={index}>
        {
          props.lineNumbers && (
            <td
              className={`line-${l.type} line-number`}
              style={{ width: lineNumberWidth, backgroundColor: bgColourL }}
            >
              {l.lineNumber}
            </td>
          )
        }
        <td className={`line-${l.type}`} style={{ backgroundColor: bgColourL }}>
          <pre>{l.text && indentChar.repeat(l.level * indentSize)}{lText}{l.comma && ','}</pre>
        </td>
        {
          props.lineNumbers && (
            <td
              className={`line-${r.type} line-number`}
              style={{ width: lineNumberWidth, backgroundColor: bgColourR }}
            >
              {r.lineNumber}
            </td>
          )
        }
        <td className={`line-${r.type}`} style={{ backgroundColor: bgColourR }}>
          <pre>{r.text && indentChar.repeat(r.level * indentSize)}{rText}{r.comma && ','}</pre>
        </td>
      </tr>
    );
  };

  return (
    <table
      className={`json-diff-viewer ${props.className || ''}`}
      style={props.style}
    >
      <tbody>
        {linesLeft.map((_, index) => renderLine(index))}
      </tbody>
    </table>
  );
};

Viewer.displayName = 'Viewer';

export default Viewer;
