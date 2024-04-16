import type { SegmentItem, HiddenUnchangedLinesInfo } from './get-segments';
import { getSegmentHeight, isExpandLine } from './segment-util';

const findVisibleLines = (
  segments: Array<SegmentItem | HiddenUnchangedLinesInfo>,
  accTop: number[],
  viewportTop: number,
  viewportBottom: number,
  itemHeight: number,
  expandLineHeight: number,
) => {
  if (!accTop.length) {
    return [0, 0, 0, 0];
  }
  let startSegment = 0;
  let endSegment = 0;
  let startLine = 0;
  let endLine = 0;
  let l = 0;
  let r = segments.length - 1;
  // start segment
  while (1) {
    const m = Math.floor((l + r) / 2);
    const top = accTop[m];
    const bottom = top + getSegmentHeight(segments[m], itemHeight, expandLineHeight);
    if (bottom <= viewportTop) {
      l = m + 1;
    } else {
      r = m;
    }
    if (l === r) {
      startSegment = l;
      break;
    }
  }
  // start line
  const startSegmentItem = segments[startSegment];
  if (isExpandLine(startSegmentItem)) {
    startLine = startSegmentItem.start;
  } else {
    startLine = startSegmentItem.start + Math.floor((viewportTop - accTop[startSegment]) / itemHeight);
  }
  // end segment
  l = 0;
  r = segments.length - 1;
  while (1) {
    const m = Math.floor((l + r + 1) / 2);
    const top = accTop[m];
    if (top >= viewportBottom) {
      r = m - 1;
    } else {
      l = m;
    }
    if (l === r) {
      endSegment = l;
      break;
    }
  }
  // end line
  const endSegmentItem = segments[endSegment];
  if (isExpandLine(endSegmentItem)) {
    endLine = endSegmentItem.end;
  } else {
    endLine = endSegmentItem.start + Math.ceil((viewportBottom - accTop[endSegment]) / itemHeight);
  }
  return [
    startSegment,
    startLine,
    endSegment,
    endLine,
  ];
};

export default findVisibleLines;
