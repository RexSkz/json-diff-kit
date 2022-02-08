import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';

import type { DiffResult, DifferOptions } from '../differ';

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

  if (level >= options.maxDepth) {
    linesLeft.push({ level: level + 1, type: 'equal', text: '...' });
    linesRight.push({ level: level + 1, type: 'equal', text: '...' });
  } else {
    while (arrLeft.length || arrRight.length) {
      const itemLeft = arrLeft[0] ?? null;
      const itemRight = arrRight[0] ?? null;
      if (itemLeft && itemRight) {
        if (getType(itemLeft) !== getType(itemRight)) {
          linesLeft.push({ level: level + 1, type: 'remove', text: formatValue(itemLeft) });
          linesLeft.push({ level, type: 'equal', text: '' });
          linesRight.push({ level, type: 'equal', text: '' });
          linesRight.push({ level: level + 1, type: 'add', text: formatValue(itemRight) });
        } else if (getType(itemLeft) === 'object') {
          linesLeft.push({ level: level + 1, type: 'equal', text: '{' });
          linesRight.push({ level: level + 1, type: 'equal', text: '{' });
          const [leftLines, rightLines] = diffObject(itemLeft, itemRight, level + 2, options, diffArrayNormal);
          linesLeft.push(...leftLines);
          linesRight.push(...rightLines);
          linesLeft.push({ level: level + 1, type: 'equal', text: '}' });
          linesRight.push({ level: level + 1, type: 'equal', text: '}' });
        } else if (getType(itemLeft) === 'array') {
          const [resLeft, resRight] = diffArrayNormal(itemLeft, itemRight, '', '', level + 2, options, [], []);
          linesLeft.push(...resLeft);
          linesRight.push(...resRight);
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
      } else if (itemLeft) {
        linesLeft.push({ level: level + 1, type: 'remove', text: formatValue(itemLeft) });
        linesRight.push({ level: level + 1, type: 'equal', text: '' });
        arrLeft.shift();
      } else if (itemRight) {
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
