import type { DiffResult, DifferOptions } from '../differ';
import prettyAppendLines from './pretty-append-lines';
import diffObject from './diff-object';
import concat from './concat';

/**
 * Diffs two objects, using compare-key logic for nested arrays if possible.
 *
 * @param leftObj The left object
 * @param rightObj The right object
 * @param level The current diff level
 * @param options The diff options
 * @param fallbackArrayDiff The fallback array diff function (e.g., diffArrayNormal or diffArrayLCS)
 * @param compareKeyArrayDiff The compare-key array diff function
 * @param allObjectsHaveCompareKey The function to check if all objects in an array have the compare key
 * @returns [DiffResult[], DiffResult[]]
 */
export function diffObjectWithArraySupport(
  leftObj: any,
  rightObj: any,
  level: number,
  options: DifferOptions,
  fallbackArrayDiff: (
    arrLeft: any[],
    arrRight: any[],
    keyLeft: string,
    keyRight: string,
    level: number,
    options: DifferOptions,
    linesLeft?: DiffResult[],
    linesRight?: DiffResult[],
  ) => [DiffResult[], DiffResult[]],
  compareKeyArrayDiff: (
    arrLeft: any[],
    arrRight: any[],
    keyLeft: string,
    keyRight: string,
    level: number,
    options: DifferOptions,
    linesLeft?: DiffResult[],
    linesRight?: DiffResult[],
  ) => [DiffResult[], DiffResult[]],
  allObjectsHaveCompareKey: (arr: any[], compareKey: string) => boolean
): [DiffResult[], DiffResult[]] {
  let linesLeft: DiffResult[] = [];
  let linesRight: DiffResult[] = [];
  const keys = Array.from(new Set([
    ...Object.keys(leftObj || {}),
    ...Object.keys(rightObj || {}),
  ]));
  for (const key of keys) {
    const lVal = leftObj ? leftObj[key] : undefined;
    const rVal = rightObj ? rightObj[key] : undefined;
    if (Array.isArray(lVal) && Array.isArray(rVal) && options.compareKey) {
      if (
        allObjectsHaveCompareKey(lVal, options.compareKey) &&
        allObjectsHaveCompareKey(rVal, options.compareKey)
      ) {
        // Use compare-key diff for this property
        const [arrL, arrR] = compareKeyArrayDiff(lVal, rVal, '', '', level + 2, options, [], []);
        linesLeft = concat(linesLeft, arrL);
        linesRight = concat(linesRight, arrR);
        continue;
      }
    }
    if (Array.isArray(lVal) && Array.isArray(rVal)) {
      // Fallback to normal diff for arrays
      const [arrL, arrR] = fallbackArrayDiff(lVal, rVal, '', '', level + 2, options, [], []);
      linesLeft = concat(linesLeft, arrL);
      linesRight = concat(linesRight, arrR);
    } else if (Array.isArray(lVal) || Array.isArray(rVal)) {
      // If only one side is array, treat as modification
      prettyAppendLines(
        linesLeft,
        linesRight,
        key,
        key,
        lVal,
        rVal,
        level + 2,
        options,
      );
    } else {
      // Use diffObject for non-array values
      const [leftLines, rightLines] = diffObject(
        { [key]: lVal },
        { [key]: rVal },
        level + 2,
        options,
        fallbackArrayDiff
      );
      linesLeft = concat(linesLeft, leftLines);
      linesRight = concat(linesRight, rightLines);
    }
  }
  return [linesLeft, linesRight];
} 