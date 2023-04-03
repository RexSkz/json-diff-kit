import type { SegmentItem, HiddenUnchangedLinesInfo } from './get-segments';
import { isExpandLine } from './segment-util';

const calculatePlaceholderHeight = (
  segments: Array<SegmentItem | HiddenUnchangedLinesInfo>,
  accTop: number[],
  startSegment: number,
  startLine: number,
  endSegment: number,
  endLine: number,
  itemHeight: number,
  expandLineHeight: number,
  totalHeight: number,
) => {
  if (!accTop.length) {
    return [0, 0];
  }
  let topHeight = 0;
  let bottomHeight = 0;
  const startSegmentItem = segments[startSegment];
  if (isExpandLine(startSegmentItem)) {
    topHeight = accTop[startSegment];
  } else {
    topHeight = accTop[startSegment] + (startLine - startSegmentItem.start) * itemHeight;
  }
  const endSegmentItem = segments[endSegment];
  if (isExpandLine(endSegmentItem)) {
    bottomHeight = totalHeight - accTop[endSegment] - expandLineHeight;
  } else {
    bottomHeight = totalHeight - accTop[endSegment] - (endLine - endSegmentItem.start) * itemHeight;
  }
  return [topHeight, bottomHeight];
};

export default calculatePlaceholderHeight;
