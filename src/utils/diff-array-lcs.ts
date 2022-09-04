import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';
import stringify from './stringify';

import type { DifferOptions, DiffResult } from '../differ';
import isEqual from './is-equal';

const lcs = (
  arrLeft: any[],
  arrRight: any[],
  keyLeft: string,
  keyRight: string,
  level: number,
  options: DifferOptions,
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
        // this is a diff-specific logic, when 2 values are both arrays or both objects, the
        // algorithm should assume they are equal in order to diff recursively later
        f[i][j] = f[i - 1][j - 1] + 1;
        backtrack[i][j] = 'diag';
      } else if (isEqual(arrLeft[i - 1], arrRight[j - 1], options)) {
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
  // this is a backtracking process, all new lines should be unshifted to the result, not
  // pushed to the result
  while (i > 0 || j > 0) {
    if (backtrack[i][j] === 'diag') {
      const type = getType(arrLeft[i - 1]);
      if (type === 'array') {
        const [l, r] = diffArrayLCS(arrLeft[i - 1], arrRight[j - 1], keyLeft, keyRight, level + 2, options);
        tLeft.unshift(...l);
        tRight.unshift(...r);
      } else if (type === 'object') {
        const [l, r] = diffObject(arrLeft[i - 1], arrRight[j - 1], level + 2, options, diffArrayLCS);
        tLeft.unshift({ level: level + 1, type: 'equal', text: '}' });
        tRight.unshift({ level: level + 1, type: 'equal', text: '}' });
        tLeft.unshift(...l);
        tRight.unshift(...r);
        tLeft.unshift({ level: level + 1, type: 'equal', text: '{' });
        tRight.unshift({ level: level + 1, type: 'equal', text: '{' });
      } else {
        tLeft.unshift({ level: level + 1, type: 'equal', text: formatValue(arrLeft[i - 1]) });
        tRight.unshift({ level: level + 1, type: 'equal', text: formatValue(arrRight[j - 1]) });
      }
      i--;
      j--;
    } else if (backtrack[i][j] === 'up') {
      if (options.showModifications && i > 1 && backtrack[i - 1][j] === 'left') {
        tLeft.unshift({ level: level + 1, type: 'modify', text: formatValue(arrLeft[i - 1]) });
        tRight.unshift({ level: level + 1, type: 'modify', text: formatValue(arrRight[j - 1]) });
        i--;
        j--;
      } else {
        const addedLines = stringify(arrLeft[i - 1], null, 1).split('\n');
        for (let i = addedLines.length - 1; i >= 0; i--) {
          tLeft.unshift({
            level: level + 1 + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
            type: 'remove',
            text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, ''),
          });
          tRight.unshift({ level: level + 1, type: 'equal', text: '' });
        }
        i--;
      }
    } else {
      const addedLines = stringify(arrRight[j - 1], null, 1).split('\n');
      for (let i = addedLines.length - 1; i >= 0; i--) {
        tLeft.unshift({ level: level + 1, type: 'equal', text: '' });
        tRight.unshift({
          level: level + 1 + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
          type: 'add',
          text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, ''),
        });
      }
      j--;
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
  options: DifferOptions,
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

  if (level >= options.maxDepth) {
    linesLeft.push({ level: level + 1, type: 'equal', text: '...' });
    linesRight.push({ level: level + 1, type: 'equal', text: '...' });
  } else {
    const [tLeftReverse, tRightReverse] = lcs(arrLeft, arrRight, keyLeft, keyRight, level, options);
    linesLeft.push(...tLeftReverse);
    linesRight.push(...tRightReverse);
  }

  linesLeft.push({ level, type: 'equal', text: ']' });
  linesRight.push({ level, type: 'equal', text: ']' });
  return [linesLeft, linesRight];
};

export default diffArrayLCS;
