import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';
import isEqual from './is-equal';

import type { DiffResult } from '../differ';

const lcs = (
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
): [DiffResult[], DiffResult[]] => {
  const f = Array(arrLeft.length + 1).fill(0).map(() => Array(arrRight.length + 1).fill(0));
  const backtrack = Array(arrLeft.length + 1).fill(0).map(() => Array(arrRight.length + 1).fill(0));

  for (let i = 1; i <= arrLeft.length; i++) {
    backtrack[i][0] = 'up';
  }
  for (let j = 1; j <= arrRight.length; j++) {
    backtrack[0][j] = 'left';
  }
  for (let i = 1; i <= arrLeft.length; i++) {
    for (let j = 1; j <= arrRight.length; j++) {
      const typeI = getType(arrLeft[i - 1]);
      const typeJ = getType(arrRight[j - 1]);
      if (typeI === typeJ && (typeI === 'array' || typeI === 'object')) {
        // this is a diff-specific logic, when 2 values are both objects or both arrays, the
        // algorithm should assume they are equal to diff recursively at backtracking
        f[i][j] = f[i - 1][j - 1] + 1;
        backtrack[i][j] = 'diag';
      } else if (isEqual(arrLeft[i - 1], arrRight[j - 1])) {
        f[i][j] = f[i - 1][j - 1] + 1;
        backtrack[i][j] = 'diag';
      } else if (f[i - 1][j] >= f[i][j - 1]) {
        f[i][j] = f[i - 1][j];
        backtrack[i][j] = 'up';
      } else {
        f[i][j] = f[i][j - 1];
        backtrack[i][j] = 'left';
      }
    }
  }

  let i = arrLeft.length;
  let j = arrRight.length;
  const tLeft: DiffResult[] = [];
  const tRight: DiffResult[] = [];
  while (i > 0 || j > 0) {
    if (backtrack[i][j] === 'diag') {
      const type = getType(arrLeft[i - 1]);
      if (type === 'array') {
        const [l, r] = diffArrayLCS(arrLeft[i - 1], arrRight[j - 1], keyLeft, keyRight, level + 2);
        tLeft.push(...l.reverse());
        tRight.push(...r.reverse());
      } else if (type === 'object') {
        const [l, r] = diffObject(arrLeft[i - 1], arrRight[j - 1], level + 2);
        tLeft.push({ level: level + 1, type: 'equal', text: '}' });
        tRight.push({ level: level + 1, type: 'equal', text: '}' });
        tLeft.push(...l.reverse());
        tRight.push(...r.reverse());
        tLeft.push({ level: level + 1, type: 'equal', text: '{' });
        tRight.push({ level: level + 1, type: 'equal', text: '{' });
      } else {
        tLeft.push({ level: level + 1, type: 'equal', text: formatValue(arrLeft[i - 1]) });
        tRight.push({ level: level + 1, type: 'equal', text: formatValue(arrRight[j - 1]) });
      }
      i -= 1;
      j -= 1;
    } else if (backtrack[i][j] === 'up') {
      tLeft.push({ level: level + 1, type: 'remove', text: formatValue(arrLeft[i - 1]) });
      tRight.push({ level: level + 1, type: 'equal', text: '' });
      i -= 1;
    } else {
      tLeft.push({ level: level + 1, type: 'equal', text: '' });
      tRight.push({ level: level + 1, type: 'add', text: formatValue(arrRight[j - 1]) });
      j -= 1;
    }
  }

  return [tLeft, tRight];
};

const diffArrayLCS = (
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
  linesLeft: DiffResult[] = [],
  linesRight: DiffResult[] = [],
): [DiffResult[], DiffResult[]] => {
  if (keyLeft && keyRight) {
    linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": [` });
    linesRight.push({ level, type: 'equal', text: `"${keyRight}": [` });
  } else {
    linesLeft.push({ level, type: 'equal', text: '[' });
    linesRight.push({ level, type: 'equal', text: '[' });
  }

  const [tLeftReverse, tRightReverse] = lcs(arrLeft, arrRight, keyLeft, keyRight, level);
  linesLeft.push(...tLeftReverse.reverse());
  linesRight.push(...tRightReverse.reverse());

  linesLeft.push({ level, type: 'equal', text: ']' });
  linesRight.push({ level, type: 'equal', text: ']' });
  return [linesLeft, linesRight];
};

export default diffArrayLCS;
