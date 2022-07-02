import type { DiffResult } from '../differ';
import type { HideUnchangedLinesOptions } from '../viewer';

const defaultOptions: HideUnchangedLinesOptions = {
  threshold: 8,
  margin: 3,
};

export interface SegmentItem {
  start: number;
  end: number;
  isEqual: boolean;
}

export interface HiddenUnchangedLinesInfo extends SegmentItem {
  hasLinesBefore: boolean;
  hasLinesAfter: boolean;
}

const getSegments = (l: DiffResult[], r: DiffResult[], options: HideUnchangedLinesOptions) => {
  if (!options) {
    return [{ start: 0, end: l.length, isEqual: false }];
  }

  const segments: SegmentItem[] = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i].type === 'equal' && r[i].type === 'equal') {
      if (segments.length && segments[segments.length - 1].isEqual) {
        segments[segments.length - 1].end++;
      } else {
        segments.push({ start: i, end: i + 1, isEqual: true });
      }
    } else {
      if (segments.length && !segments[segments.length - 1].isEqual) {
        segments[segments.length - 1].end++;
      } else {
        segments.push({ start: i, end: i + 1, isEqual: false });
      }
    }
  }

  const _options = options === true ? defaultOptions : options;
  const { threshold, margin } = _options;
  if (threshold < margin * 2 + 1) {
    console.warn(`Threshold (${threshold}) is no more than 2 margins + 1 "expand" line (${margin} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${margin * 2 + 1} lines.`);
  }

  const result: Array<SegmentItem | HiddenUnchangedLinesInfo> = [];
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (
      !segment.isEqual ||
      segment.end - segment.start < threshold ||
      segment.end - segment.start <= margin * 2 + 1
    ) {
      result.push(segment);
      continue;
    }
    if (!i) {
      result.push({ hasLinesBefore: true, hasLinesAfter: false, start: 0, end: segment.end - margin, isEqual: true });
      result.push({ start: segment.end - margin, end: segment.end, isEqual: true });
    } else if (i === segments.length - 1) {
      result.push({ start: segment.start, end: segment.start + margin, isEqual: true });
      result.push({ hasLinesBefore: false, hasLinesAfter: true, start: segment.start + margin, end: l.length, isEqual: true });
    } else {
      result.push({ start: segment.start, end: segment.start + margin, isEqual: true });
      result.push({ hasLinesBefore: true, hasLinesAfter: true, start: segment.start + margin, end: segment.end - margin, isEqual: true });
      result.push({ start: segment.end - margin, end: segment.end, isEqual: true });
    }
  }

  return result;
};

export default getSegments;
