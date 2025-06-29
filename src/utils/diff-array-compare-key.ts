import type { DiffResult, DifferOptions } from '../differ';
import concat from './concat';
import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';
import isEqual from './is-equal';
import prettyAppendLines from './pretty-append-lines';
import stringify from './stringify';
import diffArrayNormal from './diff-array-normal';

const diffArrayCompareKey = (
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
  options: DifferOptions,
  linesLeft: DiffResult[] = [],
  linesRight: DiffResult[] = [],
): [DiffResult[], DiffResult[]] => {
  if (!options.compareKey) {
    // Fallback to normal diff if no compare key is specified
    return diffArrayNormal(arrLeft, arrRight, keyLeft, keyRight, level, options, linesLeft, linesRight);
  }

  if (keyLeft && keyRight) {
    linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": [` });
    linesRight.push({ level, type: 'equal', text: `"${keyRight}": [` });
  } else {
    linesLeft.push({ level, type: 'equal', text: '[' });
    linesRight.push({ level, type: 'equal', text: '[' });
  }

  if (level >= (options.maxDepth || Infinity)) {
    linesLeft.push({ level: level + 1, type: 'equal', text: '...' });
    linesRight.push({ level: level + 1, type: 'equal', text: '...' });
  } else {
    const leftProcessed = new Set<number>();
    const rightProcessed = new Set<number>();
    
    // First pass: find matching objects by compareKey
    for (let i = 0; i < arrLeft.length; i++) {
      const leftItem = arrLeft[i];
      if (leftProcessed.has(i)) continue;
      
      // Skip if left item is not an object or doesn't have the compare key
      if (getType(leftItem) !== 'object' || !(options.compareKey in leftItem)) {
        continue;
      }
      
      const leftKeyValue = leftItem[options.compareKey];
      
      // Find matching item in right array
      let matchIndex = -1;
      for (let j = 0; j < arrRight.length; j++) {
        if (rightProcessed.has(j)) continue;
        
        const rightItem = arrRight[j];
        if (getType(rightItem) !== 'object' || !(options.compareKey in rightItem)) {
          continue;
        }
        
        const rightKeyValue = rightItem[options.compareKey];
        
        // Compare key values
        if (isEqual(leftKeyValue, rightKeyValue, options)) {
          matchIndex = j;
          break;
        }
      }
      
      if (matchIndex !== -1) {
        // Found a match, compare the objects
        const rightItem = arrRight[matchIndex];
        const leftType = getType(leftItem);
        const rightType = getType(rightItem);
        
        if (leftType !== rightType) {
          prettyAppendLines(
            linesLeft,
            linesRight,
            '',
            '',
            leftItem,
            rightItem,
            level + 1,
            options,
          );
        } else if (
          options.recursiveEqual &&
          ['object', 'array'].includes(leftType) &&
          isEqual(leftItem, rightItem, options)
        ) {
          prettyAppendLines(
            linesLeft,
            linesRight,
            '',
            '',
            leftItem,
            rightItem,
            level + 1,
            options,
          );
        } else if (leftType === 'object') {
          linesLeft.push({ level: level + 1, type: 'equal', text: '{' });
          linesRight.push({ level: level + 1, type: 'equal', text: '{' });
          const [leftLines, rightLines] = diffObject(leftItem, rightItem, level + 2, options, diffArrayCompareKey);
          linesLeft = concat(linesLeft, leftLines);
          linesRight = concat(linesRight, rightLines);
          linesLeft.push({ level: level + 1, type: 'equal', text: '}' });
          linesRight.push({ level: level + 1, type: 'equal', text: '}' });
        } else if (leftType === 'array') {
          const [resLeft, resRight] = diffArrayCompareKey(leftItem, rightItem, '', '', level + 1, options, [], []);
          linesLeft = concat(linesLeft, resLeft);
          linesRight = concat(linesRight, resRight);
        } else if (isEqual(leftItem, rightItem, options)) {
          linesLeft.push({
            level: level + 1,
            type: 'equal',
            text: formatValue(leftItem, undefined, undefined, options.undefinedBehavior),
          });
          linesRight.push({
            level: level + 1,
            type: 'equal',
            text: formatValue(rightItem, undefined, undefined, options.undefinedBehavior),
          });
        } else {
          if (options.showModifications) {
            linesLeft.push({
              level: level + 1,
              type: 'modify',
              text: formatValue(leftItem, undefined, undefined, options.undefinedBehavior),
            });
            linesRight.push({
              level: level + 1,
              type: 'modify',
              text: formatValue(rightItem, undefined, undefined, options.undefinedBehavior),
            });
          } else {
            linesLeft.push({
              level: level + 1,
              type: 'remove',
              text: formatValue(leftItem, undefined, undefined, options.undefinedBehavior),
            });
            linesLeft.push({ level: level + 1, type: 'equal', text: '' });
            linesRight.push({ level: level + 1, type: 'equal', text: '' });
            linesRight.push({
              level: level + 1,
              type: 'add',
              text: formatValue(rightItem, undefined, undefined, options.undefinedBehavior),
            });
          }
        }
        
        leftProcessed.add(i);
        rightProcessed.add(matchIndex);
      }
    }
    
    // Second pass: handle remaining items (unmatched)
    for (let i = 0; i < arrLeft.length; i++) {
      if (leftProcessed.has(i)) continue;
      
      const leftItem = arrLeft[i];
      const removedLines = stringify(leftItem, undefined, 1, undefined, options.undefinedBehavior).split('\n');
      for (let j = 0; j < removedLines.length; j++) {
        linesLeft.push({
          level: level + 1 + (removedLines[j].match(/^\s+/)?.[0]?.length || 0),
          type: 'remove',
          text: removedLines[j].replace(/^\s+/, '').replace(/,$/g, ''),
        });
        linesRight.push({ level: level + 1, type: 'equal', text: '' });
      }
    }
    
    for (let i = 0; i < arrRight.length; i++) {
      if (rightProcessed.has(i)) continue;
      
      const rightItem = arrRight[i];
      const addedLines = stringify(rightItem, undefined, 1, undefined, options.undefinedBehavior).split('\n');
      for (let j = 0; j < addedLines.length; j++) {
        linesLeft.push({ level: level + 1, type: 'equal', text: '' });
        linesRight.push({
          level: level + 1 + (addedLines[j].match(/^\s+/)?.[0]?.length || 0),
          type: 'add',
          text: addedLines[j].replace(/^\s+/, '').replace(/,$/g, ''),
        });
      }
    }
  }

  linesLeft.push({ level, type: 'equal', text: ']' });
  linesRight.push({ level, type: 'equal', text: ']' });
  return [linesLeft, linesRight];
};

export default diffArrayCompareKey; 