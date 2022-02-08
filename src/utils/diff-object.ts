import diffArrayLCS from './diff-array-lcs';
import formatValue from './format-value';
import getType from './get-type';

import type { DiffResult } from '../differ';

const diffObject = (
  lhs: Record<string, any>,
  rhs: Record<string, any>,
  level = 1,
): [DiffResult[], DiffResult[]] => {
  const linesLeft: DiffResult[] = [];
  const linesRight: DiffResult[] = [];

  if (lhs === null && rhs === null || lhs === undefined && rhs === undefined) {
    return [linesLeft, linesRight];
  } else if (lhs === null || lhs === undefined) {
    linesLeft.push({ level, type: 'equal', text: '' });
    linesRight.push({ level, type: 'add', text: formatValue(rhs) });
    return [linesLeft, linesRight];
  } else if (rhs === null || rhs === undefined) {
    linesLeft.push({ level, type: 'remove', text: formatValue(lhs) });
    linesRight.push({ level, type: 'equal', text: '' });
    return [linesLeft, linesRight];
  }

  const keysLeft = Object.keys(lhs);
  const keysRight = Object.keys(rhs);
  keysLeft.sort();
  keysRight.sort();

  while (keysLeft.length || keysRight.length) {
    const keyLeft = keysLeft[0] ?? null;
    const keyRight = keysRight[0] ?? null;

    if (keyLeft === keyRight) {
      if (getType(lhs[keyLeft]) !== getType(rhs[keyRight])) {
        linesLeft.push({ level, type: 'modify', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
        linesRight.push({ level, type: 'modify', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
      } else if (Array.isArray(lhs[keyLeft])) {
        const arrLeft = [...lhs[keyLeft]];
        const arrRight = [...rhs[keyRight]];
        const [resLeft, resRight] = diffArrayLCS(arrLeft, arrRight, keyLeft, keyRight, level, [], []);
        linesLeft.push(...resLeft);
        linesRight.push(...resRight);
      } else if (typeof lhs[keyLeft] === 'object') {
        const result = diffObject(
          lhs[keyLeft],
          rhs[keyRight],
          level + 1,
        );
        linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": {` });
        linesLeft.push(...result[0]);
        linesLeft.push({ level, type: 'equal', text: '}' });
        linesRight.push({ level, type: 'equal', text: `"${keyRight}": {` });
        linesRight.push(...result[1]);
        linesRight.push({ level, type: 'equal', text: '}' });
      } else {
        if (lhs[keyLeft] !== rhs[keyRight]) {
          linesLeft.push({ level, type: 'modify', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
          linesRight.push({ level, type: 'modify', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
        } else {
          linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
          linesRight.push({ level, type: 'equal', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
        }
      }
    } else if (keyLeft && keyRight) {
      if (keyLeft < keyRight) {
        linesLeft.push({ level, type: 'remove', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
        linesRight.push({ level, type: 'equal', text: '' });
      } else {
        linesLeft.push({ level, type: 'equal', text: '' });
        linesRight.push({ level, type: 'add', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
      }
    } else if (keyLeft) {
      linesLeft.push({ level, type: 'remove', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
      linesRight.push({ level, type: 'equal', text: '' });
    } else if (keyRight) {
      linesLeft.push({ level, type: 'equal', text: '' });
      linesRight.push({ level, type: 'add', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
    }

    if (!keyLeft) {
      keysRight.shift();
    } else if (!keyRight) {
      keysLeft.shift();
    } else if (keyLeft === keyRight) {
      keysLeft.shift();
      keysRight.shift();
    } else if (keyLeft < keyRight) {
      keysLeft.shift();
    } else {
      keysRight.shift();
    }
  }

  if (linesLeft.length !== linesRight.length) {
    throw new Error('Diff error: length not match for left & right, please report a bug with your data.');
  }

  return [linesLeft, linesRight];
};

export default diffObject;
