import type { InlineDiffResult } from './get-inline-diff';
import type { InlineHighlightResult } from './get-inline-syntax-highlight';
import type { SegmentItem, HiddenUnchangedLinesInfo } from './get-segments';

export const isExpandLine = (
  segment: SegmentItem | HiddenUnchangedLinesInfo,
): segment is HiddenUnchangedLinesInfo => {
  return 'hasLinesBefore' in segment || 'hasLinesAfter' in segment;
};

export const getSegmentHeight = (
  segment: SegmentItem | HiddenUnchangedLinesInfo,
  itemHeight: number,
  expandLineHeight: number,
) => {
  return isExpandLine(segment)
    ? expandLineHeight
    : itemHeight * (segment.end - segment.start + 1);
};

export type InlineRenderInfo = InlineDiffResult & InlineHighlightResult;

/**
 * Merge two segments array into one, divide the segment if necessary.
 */
export const mergeSegments = (tokens: InlineHighlightResult[], diffs: InlineDiffResult[]): InlineRenderInfo[] => {
  const result: InlineRenderInfo[] = [];
  let token: InlineHighlightResult;
  let diff: InlineDiffResult;

  if (tokens.length && diffs.length) {
    tokens = [...tokens];
    diffs = [...diffs];
    token = { ...tokens.shift()! };
    diff = { ...diffs.shift()! };

    while (1) {
      if (token.start === diff.start) {
        const end = Math.min(token.end, diff.end);
        result.push({ ...token, ...diff, end });
        token.start = diff.start = end;
      } else if (token.start < diff.start) {
        const end = Math.min(token.end, diff.start);
        result.push({ ...diff, ...token, end });
        token.start = end;
      } else {
        const end = Math.min(token.start, diff.end);
        result.push({ ...token, ...diff, end });
        diff.start = end;
      }
      if (!tokens.length || !diffs.length) break;
      if (token.start === token.end) token = { ...tokens.shift()! };
      if (diff.start === diff.end) diff = { ...diffs.shift()! };
    }
  }

  if (!tokens.length) result.push(...diffs.map(d => ({ ...d, token: token.token || 'plain' } as InlineRenderInfo)));
  if (!diffs.length) result.push(...tokens);

  return result;
};
