import type { DiffResult, DifferOptions } from '../differ';

import concat from './concat';
import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';
import isEqual from './is-equal';
import prettyAppendLines from './pretty-append-lines';

const diffArrayNormal = (
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
  options: DifferOptions,
  linesLeft: DiffResult[] = [],
  linesRight: DiffResult[] = [],
): [DiffResult[], DiffResult[]] => {
  arrLeft = [...arrLeft];
  arrRight = [...arrRight];
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
    while (arrLeft.length || arrRight.length) {
      const itemLeft = arrLeft[0];
      const itemRight = arrRight[0];
      const leftType = getType(itemLeft);
      const rightType = getType(itemRight);
      if (arrLeft.length && arrRight.length) {
        if (leftType !== rightType) {
          prettyAppendLines(
            linesLeft,
            linesRight,
            '',
            '',
            itemLeft,
            itemRight,
            level + 1,
            options,
          );
        } else if (
          options.recursiveEqual &&
          ['object', 'array'].includes(leftType) &&
          isEqual(itemLeft, itemRight, options)
        ) {
          prettyAppendLines(
            linesLeft,
            linesRight,
            '',
            '',
            itemLeft,
            itemRight,
            level + 1,
            options,
          );
        } else if (leftType === 'object') {
          linesLeft.push({ level: level + 1, type: 'equal', text: '{' });
          linesRight.push({ level: level + 1, type: 'equal', text: '{' });
          const [leftLines, rightLines] = diffObject(itemLeft, itemRight, level + 2, options, diffArrayNormal);
          linesLeft = concat(linesLeft, leftLines);
          linesRight = concat(linesRight, rightLines);
          linesLeft.push({ level: level + 1, type: 'equal', text: '}' });
          linesRight.push({ level: level + 1, type: 'equal', text: '}' });
        } else if (leftType === 'array') {
          const [resLeft, resRight] = diffArrayNormal(itemLeft, itemRight, '', '', level + 1, options, [], []);
          linesLeft = concat(linesLeft, resLeft);
          linesRight = concat(linesRight, resRight);
        } else if (itemLeft === itemRight) {
          linesLeft.push({ level: level + 1, type: 'equal', text: formatValue(itemLeft) });
          linesRight.push({ level: level + 1, type: 'equal', text: formatValue(itemRight) });
        } else {
          if (options.showModifications) {
            linesLeft.push({ level: level + 1, type: 'modify', text: formatValue(itemLeft) });
            linesRight.push({ level: level + 1, type: 'modify', text: formatValue(itemRight) });
          } else {
            linesLeft.push({ level: level + 1, type: 'remove', text: formatValue(itemLeft) });
            linesLeft.push({ level: level + 1, type: 'equal', text: '' });
            linesRight.push({ level: level + 1, type: 'equal', text: '' });
            linesRight.push({ level: level + 1, type: 'add', text: formatValue(itemRight) });
          }
        }
        arrLeft.shift();
        arrRight.shift();
      } else if (arrLeft.length) {
        linesLeft.push({ level: level + 1, type: 'remove', text: formatValue(itemLeft) });
        linesRight.push({ level: level + 1, type: 'equal', text: '' });
        arrLeft.shift();
      } else if (arrRight.length) {
        linesLeft.push({ level: level + 1, type: 'equal', text: '' });
        linesRight.push({ level: level + 1, type: 'add', text: formatValue(itemRight) });
        arrRight.shift();
      }
    }
  }

  linesLeft.push({ level, type: 'equal', text: ']' });
  linesRight.push({ level, type: 'equal', text: ']' });
  return [linesLeft, linesRight];
};

export default diffArrayNormal;
