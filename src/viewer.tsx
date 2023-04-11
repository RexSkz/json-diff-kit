import { CSSProperties, useEffect, useRef, useState } from 'react';

import type { DiffResult } from './differ';
import calculatePlaceholderHeight from './utils/calculate-placeholder-height';
import findVisibleLines from './utils/find-visible-lines';
import getInlineDiff from './utils/get-inline-diff';
import type { InlineDiffResult, InlineDiffOptions } from './utils/get-inline-diff';
import getSegments from './utils/get-segments';
import type { HiddenUnchangedLinesInfo, SegmentItem } from './utils/get-segments';
import { isExpandLine } from './utils/segment-util';

interface ExpandLineRendererOptions {
  /**
   * If this is `true`, you can show a "⬆️ Show xx lines" button
   */
  hasLinesBefore: boolean;
  /**
   * If this is `true`, you can show a "⬇️ Show xx lines" button
   */
  hasLinesAfter: boolean;
  /**
   * Call this function to expand `lines` lines before,
   * if there are not enough lines before, it will expand all lines before.
   */
  onExpandBefore: (lines: number) => void;
  /**
   * Call this function to expand `lines` lines after,
   * if there are not enough lines after, it will expand all lines after.
   */
  onExpandAfter: (lines: number) => void;
  /**
   * Call this function to expand all lines in this continuous part.
   */
  onExpandAll: () => void;
}

export type HideUnchangedLinesOptions = boolean | {
  /**
   * If there are continuous unchanged lines exceeding the limit, they should be hidden,
   * default is `8`.
   */
  threshold?: number;
  /**
   * We can keep displaying some lines around the "expand" line for a better context,
   * default is `3`.
   */
  margin?: number;
  /**
   * Controls how many lines will be displayed when clicking the "Show xx lines before"
   * or "Show xx lines after" button in the "expand" line, default is `20`.
   */
  expandMoreLinesLimit?: number;
  /**
   * The custom renderer of the "expand" line,
   * default renderer will produce the following buttons in this line:
   *
   * ```text
   * [⬆️ Show 20 lines] [↕️ Show all unchanged lines] [⬇️ Show 20 lines]
   * ```
   */
  expandLineRenderer?: (options?: ExpandLineRendererOptions) => JSX.Element;
}

export interface ViewerProps {
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
  /** Controls the inline diff behaviour, the `highlightInlineDiff` must be enabled. */
  inlineDiffOptions?: InlineDiffOptions;
  /**
   * Hide continuous unchanged lines and display an "expand" instead,
   * default `false` means it won't hide unchanged lines.
   */
  hideUnchangedLines?: HideUnchangedLinesOptions;
  /**
   * Use virtual list to speed up rendering, default is `false`.
   */
  virtual?: boolean | {
    /** @default 'body' */
    scrollContainer?: string;
    /** @default 18 */
    itemHeight?: number;
    /** @default 26 */
    expandLineHeight?: number;
  };
  /** Extra class names */
  className?: string;
  /** Extra styles */
  style?: CSSProperties;
}

const DEFAULT_INDENT = 2;
const DEFAULT_EXPAND_MORE_LINES_LIMIT = 20;

const Viewer: React.FC<ViewerProps> = props => {
  const [linesLeft, linesRight] = props.diff;

  const lineNumberWidth = props.lineNumbers ? `calc(${String(linesLeft.length).length}ch + 16px)` : 0;
  const indent = props.indent ?? DEFAULT_INDENT;
  const indentChar = indent === 'tab' ? '\t' : ' ';
  const indentSize = indent === 'tab' ? 1 : indent;
  const inlineDiffOptions: InlineDiffOptions = {
    mode: props.inlineDiffOptions?.mode || 'char',
    wordSeparator: props.inlineDiffOptions?.wordSeparator || '',
  };
  const hideUnchangedLines = props.hideUnchangedLines ?? false;
  const {
    scrollContainer: _scrollContainer = 'body',
    itemHeight = 18,
    expandLineHeight = 26,
  } = !props.virtual || props.virtual === true ? {} : props.virtual;
  const scrollContainer = _scrollContainer === 'body'
    ? document.body
    : document.querySelector(_scrollContainer);

  // Use these refs to keep the diff data and segments sync,
  // or it may cause runtime error because of their mismatch.
  // Do not use the states to render, use the refs to render and use `updateViewer` to update.
  const linesLeftRef = useRef(linesLeft);
  const linesRightRef = useRef(linesRight);
  const segmentsRef = useRef(getSegments(linesLeft, linesRight, hideUnchangedLines));
  const accTopRef = useRef<number[]>([]);
  const totalHeightRef = useRef(0);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const [, forceUpdate] = useState({});

  const updateViewer = () => {
    accTopRef.current = [];
    if (props.virtual) {
      let acc = 0;
      for (const segment of segmentsRef.current) {
        if (isExpandLine(segment)) {
          accTopRef.current.push(acc);
          acc += expandLineHeight;
        } else {
          accTopRef.current.push(acc);
          acc += itemHeight * (segment.end - segment.start);
        }
      }
      totalHeightRef.current = segmentsRef.current.reduce((acc, segment) => {
        if (!isExpandLine(segment)) {
          return acc + (segment.end - segment.start) * itemHeight;
        }
        return acc + expandLineHeight;
      }, 0);
    }
    forceUpdate({});
  }

  useEffect(() => {
    linesLeftRef.current = linesLeft;
    linesRightRef.current = linesRight;
    segmentsRef.current = getSegments(linesLeft, linesRight, hideUnchangedLines);
    updateViewer();
  }, [hideUnchangedLines, linesLeft, linesRight]);

  useEffect(() => {
    if (!props.virtual || !scrollContainer) {
      return;
    }
    const onScroll = () => forceUpdate({});
    scrollContainer.addEventListener('scroll', onScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
    }
  }, [props.virtual, scrollContainer]);

  const onExpandBefore = (segmentIndex: number) => (lines: number) => {
    const newSegments = [...segmentsRef.current];
    const newSegment = newSegments[segmentIndex] as HiddenUnchangedLinesInfo;
    newSegments[segmentIndex] = {
      ...newSegment,
      end: Math.max(newSegment.end - lines, newSegment.start),
    };
    if (segmentIndex + 1 < segmentsRef.current.length - 1) {
      newSegments[segmentIndex + 1] = {
        ...newSegments[segmentIndex + 1],
        start: Math.max(newSegment.end - lines, newSegment.start),
      }
    }
    segmentsRef.current = newSegments;
    updateViewer();
  };

  const onExpandAfter = (segmentIndex: number) => (lines: number) => {
    const newSegments = [...segmentsRef.current];
    const newSegment = newSegments[segmentIndex] as HiddenUnchangedLinesInfo;
    newSegments[segmentIndex] = {
      ...newSegment,
      start: Math.min(newSegment.start + lines, newSegment.end),
    };
    if (segmentIndex > 1) {
      newSegments[segmentIndex - 1] = {
        ...newSegments[segmentIndex - 1],
        end: Math.min(newSegment.start + lines, newSegment.end),
      }
    }
    segmentsRef.current = newSegments;
    updateViewer();
  };

  const onExpandAll = (segmentIndex: number) => () => {
    const newSegments = [...segmentsRef.current];
    const newSegment = newSegments[segmentIndex] as HiddenUnchangedLinesInfo;
    newSegments[segmentIndex] = {
      ...newSegment,
      start: newSegment.start,
      end: newSegment.start,
    };
    if (segmentIndex + 1 < segmentsRef.current.length - 1) {
      newSegments[segmentIndex + 1] = {
        ...newSegments[segmentIndex + 1],
        start: newSegment.start,
      }
    } else {
      newSegments[segmentIndex - 1] = {
        ...newSegments[segmentIndex - 1],
        end: newSegment.end,
      }
    }
    segmentsRef.current = newSegments;
    updateViewer();
  };

  const renderInlineDiffResult = (arr: InlineDiffResult[][]) => {
    return arr.map(result => (
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
    ));
  };

  const renderLine = (index: number) => {
    const l = linesLeftRef.current[index];
    const r = linesRightRef.current[index];

    const [lText, rText] = props.highlightInlineDiff && l.type === 'modify' && r.type === 'modify'
      ? renderInlineDiffResult(getInlineDiff(l.text, r.text, inlineDiffOptions))
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
              style={{ backgroundColor: bgColourL }}
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
              style={{ backgroundColor: bgColourR }}
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

  const renderExpandLine = (
    hasLinesBefore: boolean,
    hasLinesAfter: boolean,
    expandMoreLinesLimit: number,
    index: number,
  ) => {
    return (
      <>
        {
          hasLinesBefore && (
            <button onClick={() => onExpandBefore(index)(expandMoreLinesLimit)}>
              ⬆️ Show {expandMoreLinesLimit} lines before
            </button>
          )
        }
        <button onClick={() => onExpandAll(index)()}>
          ↕️ Show all unchanged lines
        </button>
        {
          hasLinesAfter && (
            <button onClick={() => onExpandAfter(index)(expandMoreLinesLimit)}>
              ⬇️ Show {expandMoreLinesLimit} lines after
            </button>
          )
        }
      </>
    );
  };

  const renderSegment = (
    segment: SegmentItem | HiddenUnchangedLinesInfo,
    index: number,
    renderStart: number,
    renderEnd: number,
  ) => {
    let { start, end } = segment;
    start = Math.max(start, renderStart);
    end = Math.min(end, renderEnd);
    if (start === end) {
      return null;
    }
    if (!isExpandLine(segment)) {
      return Array(end - start).fill(0).map((_, index) => renderLine(start + index));
    }
    const { hasLinesBefore, hasLinesAfter } = segment;
    const expandMoreLinesLimit = typeof hideUnchangedLines === 'boolean'
      ? DEFAULT_EXPAND_MORE_LINES_LIMIT
      : hideUnchangedLines.expandMoreLinesLimit;
    return [
      <tr key={`expand-line-${index}`} className="expand-line">
        <td
          colSpan={4}
          className={`${hasLinesBefore ? 'has-lines-before' : ''} ${hasLinesAfter ? 'has-lines-after' : ''}`}
        >
          {
            typeof hideUnchangedLines !== 'boolean' && hideUnchangedLines.expandLineRenderer ? (
              hideUnchangedLines.expandLineRenderer({
                hasLinesBefore,
                hasLinesAfter,
                onExpandBefore: onExpandBefore(index),
                onExpandAfter: onExpandAfter(index),
                onExpandAll: onExpandAll(index),
              })
            ) : renderExpandLine(hasLinesBefore, hasLinesAfter, expandMoreLinesLimit, index)
          }
        </td>
      </tr>,
    ];
  };

  const renderTbody = () => {
    if (!props.virtual) {
      return segmentsRef.current.map((item, index) => renderSegment(item, index, 0, linesLeftRef.current.length));
    }
    const containerHeight = (scrollContainer as HTMLElement)?.clientHeight ?? 0;
    const scrollTop = (scrollContainer as HTMLElement)?.scrollTop ?? 0;
    const scrollBottom = scrollTop + containerHeight;

    let t: HTMLElement = tbodyRef.current;
    let firstElementTop = t?.offsetTop ?? 0;
    while (t?.offsetParent && t?.offsetParent !== scrollContainer) {
      t = t.offsetParent as HTMLElement;
      firstElementTop += t.offsetTop;
    }

    if (firstElementTop > scrollBottom || firstElementTop + totalHeightRef.current < scrollTop) {
      return (
        <tr>
          <td colSpan={4} style={{ height: `${totalHeightRef.current}px` }} />
        </tr>
      );
    }
    const viewportTop = scrollTop - firstElementTop;
    const viewportBottom = scrollBottom - firstElementTop;
    const [
      startSegment,
      startLine,
      endSegment,
      endLine,
    ] = findVisibleLines(segmentsRef.current, accTopRef.current, viewportTop, viewportBottom, itemHeight, expandLineHeight);
    const [topHeight, bottomHeight] = calculatePlaceholderHeight(
      segmentsRef.current,
      accTopRef.current,
      startSegment,
      startLine,
      endSegment,
      endLine,
      itemHeight,
      expandLineHeight,
      totalHeightRef.current,
    );
    const visibleSegments = segmentsRef.current.slice(startSegment, endSegment + 1);
    return visibleSegments.length ? (
      <>
        <tr><td colSpan={4} style={{ height: topHeight, padding: 0 }} /></tr>
        {visibleSegments.map((segment, index) => renderSegment(segment, index, startLine, endLine))}
        <tr><td colSpan={4} style={{ height: bottomHeight, padding: 0 }} /></tr>
      </>
    ) : (
      <tr>
        <td colSpan={4} style={{ height: `${totalHeightRef.current}px` }} />
      </tr>
    );
  };

  const renderMeasureLine = () => (
    <colgroup className="measure-line">
      {props.lineNumbers && <col style={{ width: lineNumberWidth }} />}
      <col />
      {props.lineNumbers && <col style={{ width: lineNumberWidth }} />}
      <col />
    </colgroup>
  );

  return (
    <table
      className={`json-diff-viewer ${props.virtual ? 'json-diff-viewer-virtual' : ''} ${props.className || ''}`}
      style={props.style}
    >
      {renderMeasureLine()}
      <tbody ref={tbodyRef}>
        {renderTbody()}
      </tbody>
    </table>
  );
};

Viewer.displayName = 'Viewer';

export default Viewer;
