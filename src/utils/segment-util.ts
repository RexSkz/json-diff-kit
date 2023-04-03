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
    : itemHeight * (segment.end - segment.start + 1)
};
