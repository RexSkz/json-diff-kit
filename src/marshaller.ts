// It would be more readable to use "wrong" indent in this file.
/* eslint-disable indent */

import getInlineDiff from './utils/get-inline-diff';
import type { InlineDiffOptions } from './utils/get-inline-diff';
import getInlineSyntaxHighlight from './utils/get-inline-syntax-highlight';
import getSegments from './utils/get-segments';
import type { HiddenUnchangedLinesInfo, SegmentItem } from './utils/get-segments';
import { isExpandLine, mergeSegments, type InlineRenderInfo } from './utils/segment-util';
import type { ExpandLineRendererOptions, HideUnchangedLinesOptions, ViewerProps } from './viewer';

export type MarshallerExpandLineRendererOptions = Pick<
  ExpandLineRendererOptions,
  'hasLinesBefore' | 'hasLinesAfter'
>;

export type MarshallerHideUnchangedLinesOptions = boolean | Pick<
  Exclude<HideUnchangedLinesOptions, boolean>,
  | 'threshold'
  | 'margin'
  | 'expandMoreLinesLimit'
> & {
  /**
   * The custom renderer of the "expand" line,
   * default renderer will produce the following buttons in this line:
   *
   * ```text
   * [⬆️ Show 20 lines] [↕️ Show all unchanged lines] [⬇️ Show 20 lines]
   * ```
   *
   * Note: unlike the `Marshaller` component, the `Marshaller` does not support JSX.Element.
   * The only return type is `string` (HTML string).
   */
  expandLineRenderer?: (options?: MarshallerExpandLineRendererOptions) => string;
};

export type MarshallerConfig = Pick<
  ViewerProps,
  | 'diff'
  | 'indent'
  | 'bgColour'
  | 'lineNumbers'
  | 'highlightInlineDiff'
  | 'inlineDiffOptions'
  | 'hideUnchangedLines'
  | 'syntaxHighlight'
  | 'texts'
  | 'className'
> & {
  /**
   * Hide continuous unchanged lines and display an "expand" instead,
   * default `false` means it won't hide unchanged lines.
   */
  hideUnchangedLines?: MarshallerHideUnchangedLinesOptions;
}

import {
  DEFAULT_INDENT,
  DEFAULT_EXPAND_MORE_LINES_LIMIT,
  DEFAULT_TEXTS,
} from './viewer';

const Marshaller = (config: MarshallerConfig): string => {
  const [linesLeft, linesRight] = config.diff;
  const jsonsAreEqual = (() => {
    return (
      linesLeft.length === linesRight.length &&
      linesLeft.every(item => item.type === 'equal') &&
      linesRight.every(item => item.type === 'equal')
    );
  })();

  const mergedTexts = { ...DEFAULT_TEXTS, ...config.texts };

  const lineNumberWidth = config.lineNumbers ? `calc(${String(linesLeft.length).length}ch + 16px)` : 0;
  const indent = config.indent ?? DEFAULT_INDENT;
  const indentChar = indent === 'tab' ? '\t' : ' ';
  const indentSize = indent === 'tab' ? 1 : indent;
  const inlineDiffOptions: InlineDiffOptions = {
    mode: config.inlineDiffOptions?.mode || 'char',
    wordSeparator: config.inlineDiffOptions?.wordSeparator || '',
  };
  const hideUnchangedLines = config.hideUnchangedLines ?? false;

  const segments = getSegments(linesLeft, linesRight, hideUnchangedLines, jsonsAreEqual);

  const renderInlineResult = (
    text: string,
    info: InlineRenderInfo[] = [],
    comma = false,
    syntaxHighlightEnabled = false,
  ) => {
    const linesStr = info.map(item => {
      // prevent XSS attack
      const frag = text.slice(item.start, item.end)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      if (!item.type && !item.token) {
        return frag;
      }

      const className = [
        item.type ? `inline-diff-${item.type}` : '',
        item.token ? `token ${item.token}` : '',
      ].filter(Boolean).join(' ');
      return `<span class="${className}">${frag}</span>`;
    }).join('');

    const commaStr = comma
      ? syntaxHighlightEnabled
        ? `<span class="token punctuation">,</span>`
        : ','
      : '';

    return `${linesStr}${commaStr}`;
  };

  const renderLine = (index: number, syntaxHighlightEnabled: boolean) => {
    const l = linesLeft[index];
    const r = linesRight[index];

    const [lDiff, rDiff] = config.highlightInlineDiff && l.type === 'modify' && r.type === 'modify'
      ? getInlineDiff(l.text, r.text, inlineDiffOptions)
      : [[], []];
    const lTokens = getInlineSyntaxHighlight(syntaxHighlightEnabled, l.text, 0);
    const rTokens = getInlineSyntaxHighlight(syntaxHighlightEnabled, r.text, 0);
    const lResult = mergeSegments(lTokens, lDiff);
    const rResult = mergeSegments(rTokens, rDiff);

    const bgLeft = l.type !== 'equal' ? config.bgColour?.[l.type] ?? '' : '';
    const bgRight = r.type !== 'equal' ? config.bgColour?.[r.type] ?? '' : '';
    const bgLeftStr = bgLeft ? ' style="background-color: ${bgLeft}"' : '';
    const bgRightStr = bgRight ? ' style="background-color: ${bgRight}"' : '';

    const lineNumberLeftStr = config.lineNumbers
      ? `<td class="line-${l.type} line-number"${bgLeftStr}>${l.lineNumber ?? ''}</td>`
      : '';
    const dataLeftStr = [
      `<td class="line-${l.type}"${bgLeftStr}>`,
        '<pre>',
          l.text ? indentChar.repeat(l.level * indentSize) : '',
          renderInlineResult(l.text, lResult, l.comma, syntaxHighlightEnabled),
        '</pre>',
      '</td>',
    ].join('');
    const lineNumberRightStr = config.lineNumbers
      ? `<td class="line-${r.type} line-number"${bgRightStr}>${r.lineNumber ?? ''}</td>`
      : '';
    const dataRightStr = [
      `<td class="line-${r.type}"${bgRightStr}>`,
        '<pre>',
          r.text ? indentChar.repeat(r.level * indentSize) : '',
          renderInlineResult(r.text, rResult, r.comma, syntaxHighlightEnabled),
        '</pre>',
      '</td>',
    ].join('');

    return [
      '<tr>',
        lineNumberLeftStr,
        dataLeftStr,
        lineNumberRightStr,
        dataRightStr,
      '</tr>',
    ].join('\n');
  };

  const renderExpandLine = (
    hasLinesBefore: boolean,
    hasLinesAfter: boolean,
    expandMoreLinesLimit: number,
  ) => [
    hasLinesBefore ? `<button>⭡ Show ${expandMoreLinesLimit} lines before</button>` : '',
    '<button>⭥ Show all unchanged lines</button>',
    hasLinesAfter ? `<button>⭣ Show ${expandMoreLinesLimit} lines after</button>` : '',
  ].join('');

  const renderSegment = (
    segment: SegmentItem | HiddenUnchangedLinesInfo,
    renderStart: number,
    renderEnd: number,
    syntaxHighlightEnabled: boolean,
  ) => {
    let { start, end } = segment;
    start = Math.max(start, renderStart);
    end = Math.min(end, renderEnd);
    if (start === end) {
      return null;
    }
    if (!isExpandLine(segment)) {
      return Array(end - start).fill(0).map((_, index) => renderLine(start + index, syntaxHighlightEnabled)).join('\n');
    }
    const { hasLinesBefore, hasLinesAfter } = segment;
    const expandMoreLinesLimit = typeof hideUnchangedLines === 'boolean'
      ? DEFAULT_EXPAND_MORE_LINES_LIMIT
      : hideUnchangedLines.expandMoreLinesLimit || DEFAULT_EXPAND_MORE_LINES_LIMIT;
    const expandLineClasses = `${hasLinesBefore ? 'has-lines-before' : ''} ${hasLinesAfter ? 'has-lines-after' : ''}`;
    return [
      '<tr class="expand-line">',
        `<td col-span="4" class="${expandLineClasses}">`,
          typeof hideUnchangedLines !== 'boolean' && hideUnchangedLines.expandLineRenderer
            ? hideUnchangedLines.expandLineRenderer({ hasLinesBefore, hasLinesAfter })
            : renderExpandLine(hasLinesBefore, hasLinesAfter, expandMoreLinesLimit),
        '</td>',
      '</tr>',
    ].join('');
  };

  const renderTbody = (syntaxHighlightEnabled: boolean) => {
    if (jsonsAreEqual && hideUnchangedLines) {
      return [
        '<tr key="message-line" class="message-line">',
          '<td col-span="4">',
            mergedTexts.noChangeDetected,
          '</td>',
        '</tr>',
      ].join('\n');
    }
    return segments.map(item => renderSegment(item, 0, linesLeft.length, syntaxHighlightEnabled)).join('\n');
  };

  const renderMeasureLine = () => [
    '<colgroup class="measure-line">',
      config.lineNumbers ? `<col style="width:${lineNumberWidth}">` : '',
      '<col>',
      config.lineNumbers ? `<col style="width:${lineNumberWidth}">` : '',
      '<col>',
    '</colgroup>',
  ].join('\n');

  const classes = [
    'json-diff-viewer',
    config.syntaxHighlight && `json-diff-viewer-theme-${config.syntaxHighlight.theme || 'monokai'}`,
    config.className,
  ].filter(Boolean).join(' ');

  const syntaxHighlightEnabled = !!config.syntaxHighlight;
  return [
    `<table class="${classes}">`,
      renderMeasureLine(),
      '<tbody>',
        renderTbody(syntaxHighlightEnabled),
      '</tbody>',
    '</table>',
  ].join('\n');
};

export default Marshaller;
