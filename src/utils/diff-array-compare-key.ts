import type { DiffResult, DifferOptions } from '../differ';
import concat from './concat';
import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';
import isEqual from './is-equal';
import prettyAppendLines from './pretty-append-lines';
import stringify from './stringify';
import diffArrayNormal from './diff-array-normal';
import { addArrayClosingBrackets, addArrayOpeningBrackets, addMaxDepthPlaceholder } from './array-bracket-utils';

// Helper function to check if an item is an object with the required compare key
function isObjectWithCompareKey(item: any, compareKey: string): boolean {
  return getType(item) === 'object' && compareKey in item;
}

// Helper function to create formatted result lines
function createFormattedLine(
  level: number,
  type: 'equal' | 'add' | 'remove' | 'modify',
  item: any,
  options: DifferOptions
): DiffResult {
  return {
    level,
    type,
    text: formatValue(item, undefined, undefined, options.undefinedBehavior),
  };
}

// Helper function to process matched objects
function processMatchedObjects(
  leftItem: any,
  rightItem: any,
  level: number,
  options: DifferOptions,
  linesLeft: DiffResult[],
  linesRight: DiffResult[]
): [DiffResult[], DiffResult[]] {
  const leftType = getType(leftItem);
  const rightType = getType(rightItem);

  if (leftType !== rightType) {
    prettyAppendLines(linesLeft, linesRight, '', '', leftItem, rightItem, level + 1, options);
  } else if (leftType === 'object') {
    // Always recurse into diffObject for aligned objects
    linesLeft.push({ level: level + 1, type: 'equal', text: '{' });
    linesRight.push({ level: level + 1, type: 'equal', text: '{' });

    const keys = Array.from(new Set([...Object.keys(leftItem), ...Object.keys(rightItem)]));
    const leftArraysToConcat: DiffResult[][] = [];
    const rightArraysToConcat: DiffResult[][] = [];

    for (const key of keys) {
      const lVal = leftItem[key];
      const rVal = rightItem[key];
      if (Array.isArray(lVal) && Array.isArray(rVal)) {
        // Recursively diff arrays
        const [arrL, arrR] = diffArrayRecursive(lVal, rVal, '', '', level + 2, options, [], []);
        leftArraysToConcat.push(arrL);
        rightArraysToConcat.push(arrR);
      } else if (Array.isArray(lVal) || Array.isArray(rVal)) {
        // If only one side is array, treat as modification
        prettyAppendLines(linesLeft, linesRight, key, key, lVal, rVal, level + 2, options);
      } else {
        // Use diffObject for non-array values
        const [leftLines, rightLines] = diffObject(
          { [key]: lVal },
          { [key]: rVal },
          level + 2,
          options,
          diffArrayRecursive
        );
        leftArraysToConcat.push(leftLines);
        rightArraysToConcat.push(rightLines);
      }
    }

    // Concatenate all collected arrays at once for better performance
    if (leftArraysToConcat.length > 0) {
      linesLeft.push(...leftArraysToConcat.flat());
    }
    if (rightArraysToConcat.length > 0) {
      linesRight.push(...rightArraysToConcat.flat());
    }
    linesLeft.push({ level: level + 1, type: 'equal', text: '}' });
    linesRight.push({ level: level + 1, type: 'equal', text: '}' });
  } else if (leftType === 'array') {
    // For nested arrays, recursively apply the same logic
    const [resLeft, resRight] = diffArrayRecursive(leftItem, rightItem, '', '', level + 1, options, [], []);
    linesLeft = concat(linesLeft, resLeft);
    linesRight = concat(linesRight, resRight);
  } else if (isEqual(leftItem, rightItem, options)) {
    linesLeft.push(createFormattedLine(level + 1, 'equal', leftItem, options));
    linesRight.push(createFormattedLine(level + 1, 'equal', rightItem, options));
  } else {
    if (options.showModifications) {
      linesLeft.push(createFormattedLine(level + 1, 'modify', leftItem, options));
      linesRight.push(createFormattedLine(level + 1, 'modify', rightItem, options));
    } else {
      linesLeft.push(createFormattedLine(level + 1, 'remove', leftItem, options));
      linesLeft.push({ level: level + 1, type: 'equal', text: '' });
      linesRight.push({ level: level + 1, type: 'equal', text: '' });
      linesRight.push(createFormattedLine(level + 1, 'add', rightItem, options));
    }
  }

  return [linesLeft, linesRight];
}

// Optimized validation function that combines type checking and compare key validation in single pass
function validateArrayForCompareKey(arr: any[], compareKey: string): boolean {
  let hasValidObjects = false;

  for (const item of arr) {
    const type = getType(item);
    if (type === 'object') {
      hasValidObjects = true;
      if (!(compareKey in item)) return false;
      // Check nested arrays in object values
      for (const value of Object.values(item)) {
        if (Array.isArray(value) && !allObjectsHaveCompareKey(value, compareKey)) {
          return false;
        }
      }
    } else if (Array.isArray(item)) {
      if (!allObjectsHaveCompareKey(item, compareKey)) return false;
    } else {
      // Non-object, non-array items make the array invalid for compareKey strategy
      return false;
    }
  }

  return hasValidObjects;
}

// Recursively checks if all objects (including in nested arrays) have the compare key
function allObjectsHaveCompareKey(arr: any[], compareKey: string): boolean {
  for (const item of arr) {
    const type = getType(item);
    if (type === 'object') {
      if (!(compareKey in item)) return false;
      // Check nested arrays in object values
      for (const value of Object.values(item)) {
        if (Array.isArray(value) && !allObjectsHaveCompareKey(value, compareKey)) {
          return false;
        }
      }
    } else if (Array.isArray(item)) {
      if (!allObjectsHaveCompareKey(item, compareKey)) return false;
    }
  }
  return true;
}

// Recursively diff arrays, using compareKey if all elements have it, otherwise fallback to diffArrayNormal
function diffArrayRecursive(
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
  options: DifferOptions,
  linesLeft: DiffResult[] = [],
  linesRight: DiffResult[] = []
): [DiffResult[], DiffResult[]] {
  if (!options.compareKey) {
    // Fallback to normal diff if no compare key is specified
    return diffArrayNormal(arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft, linesRight);
  }

  // Early validation with single pass - combine type checking and compare key validation
  const leftValidation = validateArrayForCompareKey(arrLeft, options.compareKey);
  const rightValidation = validateArrayForCompareKey(arrRight, options.compareKey);

  if (!leftValidation || !rightValidation) {
    // Use unordered LCS for arrays of primitives, mixed types, or missing compare key
    return diffArrayNormal(arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft, linesRight);
  }

  addArrayOpeningBrackets(linesLeft, linesRight, keyLeft, keyRight, level);

  if (level >= (options.maxDepth || Infinity)) {
    addMaxDepthPlaceholder(linesLeft, linesRight, level);
  } else {
    const leftProcessed = new Set<number>();
    const rightProcessed = new Set<number>();

    // For small arrays, use simple O(n²) approach to avoid Map overhead
    const useMapOptimization = arrLeft.length > 10 || arrRight.length > 10;
    let rightKeyMap: Map<any, { item: any; index: number }[]> | null = null;

    if (useMapOptimization) {
      // Build a map of compareKey values to right array items for O(n) matching
      rightKeyMap = new Map<any, { item: any; index: number }[]>();

      for (let j = 0; j < arrRight.length; j++) {
        const rightItem = arrRight[j];
        if (isObjectWithCompareKey(rightItem, options.compareKey)) {
          const rightKeyValue = rightItem[options.compareKey];
          if (!rightKeyMap.has(rightKeyValue)) {
            rightKeyMap.set(rightKeyValue, []);
          }
          rightKeyMap.get(rightKeyValue)!.push({ item: rightItem, index: j });
        }
      }
    }

    // First pass: find matching objects by compareKey
    for (let i = 0; i < arrLeft.length; i++) {
      const leftItem = arrLeft[i];
      if (leftProcessed.has(i)) continue;

      // Skip if left item is not an object or doesn't have the compare key
      if (!isObjectWithCompareKey(leftItem, options.compareKey)) {
        continue;
      }

      const leftKeyValue = leftItem[options.compareKey];
      let matchIndex = -1;

      if (useMapOptimization && rightKeyMap) {
        // Use map for O(1) lookup
        const candidates = rightKeyMap.get(leftKeyValue);
        if (candidates) {
          // Find the first unprocessed candidate
          for (const candidate of candidates) {
            if (!rightProcessed.has(candidate.index)) {
              matchIndex = candidate.index;
              break;
            }
          }
        }
      } else {
        // Use simple O(n) search for small arrays
        for (let j = 0; j < arrRight.length; j++) {
          if (rightProcessed.has(j)) continue;
          const rightItem = arrRight[j];
          if (isObjectWithCompareKey(rightItem, options.compareKey)) {
            const rightKeyValue = rightItem[options.compareKey];
            if (isEqual(leftKeyValue, rightKeyValue, options)) {
              matchIndex = j;
              break;
            }
          }
        }
      }

      if (matchIndex !== -1) {
        // Found a match, process the matched objects
        const rightItem = arrRight[matchIndex];
        [linesLeft, linesRight] = processMatchedObjects(leftItem, rightItem, level, options, linesLeft, linesRight);
        leftProcessed.add(i);
        rightProcessed.add(matchIndex);
      }
    }

    // Second pass: handle remaining items (unmatched) with potential early exit
    if (leftProcessed.size < arrLeft.length) {
      [linesLeft, linesRight] = processRemovedItems(arrLeft, leftProcessed, level, options, linesLeft, linesRight);
    }
    if (rightProcessed.size < arrRight.length) {
      [linesLeft, linesRight] = processAddedItems(arrRight, rightProcessed, level, options, linesLeft, linesRight);
    }
  }

  addArrayClosingBrackets(linesLeft, linesRight, level);
  return [linesLeft, linesRight];
}

// Helper function to process unmatched items (removed from left)
function processRemovedItems(
  arr: any[],
  processed: Set<number>,
  level: number,
  options: DifferOptions,
  linesLeft: DiffResult[],
  linesRight: DiffResult[]
): [DiffResult[], DiffResult[]] {
  for (let i = 0; i < arr.length; i++) {
    if (processed.has(i)) continue;

    const item = arr[i];
    const removedLines = stringify(item, undefined, 1, undefined, options.undefinedBehavior).split('\n');
    for (let j = 0; j < removedLines.length; j++) {
      linesLeft.push({
        level: level + 1 + (removedLines[j].match(/^\s+/)?.[0]?.length || 0),
        type: 'remove',
        text: removedLines[j].replace(/^\s+/, '').replace(/,$/g, ''),
      });
      linesRight.push({ level: level + 1, type: 'equal', text: '' });
    }
  }
  return [linesLeft, linesRight];
}

// Helper function to process unmatched items (added to right)
function processAddedItems(
  arr: any[],
  processed: Set<number>,
  level: number,
  options: DifferOptions,
  linesLeft: DiffResult[],
  linesRight: DiffResult[]
): [DiffResult[], DiffResult[]] {
  for (let i = 0; i < arr.length; i++) {
    if (processed.has(i)) continue;

    const item = arr[i];
    const addedLines = stringify(item, undefined, 1, undefined, options.undefinedBehavior).split('\n');
    for (let j = 0; j < addedLines.length; j++) {
      linesLeft.push({ level: level + 1, type: 'equal', text: '' });
      linesRight.push({
        level: level + 1 + (addedLines[j].match(/^\s+/)?.[0]?.length || 0),
        type: 'add',
        text: addedLines[j].replace(/^\s+/, '').replace(/,$/g, ''),
      });
    }
  }
  return [linesLeft, linesRight];
}

const diffArrayCompareKey = diffArrayRecursive;

export default diffArrayCompareKey;
export { allObjectsHaveCompareKey };
