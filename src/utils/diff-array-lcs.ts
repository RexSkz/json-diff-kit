import formatValue from './format-value';
import diffObject from './diff-object';
import getType from './get-type';
import stringify from './stringify';

import type { DifferOptions, DiffResult } from '../differ';
import isEqual from './is-equal';
import shallowSimilarity from './shallow-similarity';
import concat from './concat';
import prettyAppendLines from './pretty-append-lines';

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
        if (options.recursiveEqual) {
          if (
            isEqual(arrLeft[i - 1], arrRight[j - 1], options) ||
            shallowSimilarity(arrLeft[i - 1], arrRight[j - 1]) > 0.5
          ) {
            f[i][j] = f[i - 1][j - 1] + 1;
            backtrack[i][j] = 'diag';
          } else if (f[i - 1][j] >= f[i][j - 1]) {
            f[i][j] = f[i - 1][j];
            backtrack[i][j] = 'up';
          } else {
            f[i][j] = f[i][j - 1];
            backtrack[i][j] = 'left';
          }
        } else {
          // this is a diff-specific logic, when 2 values are both arrays or both objects, the
          // algorithm should assume they are equal in order to diff recursively later
          f[i][j] = f[i - 1][j - 1] + 1;
          backtrack[i][j] = 'diag';
        }
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
  let tLeft: DiffResult[] = [];
  let tRight: DiffResult[] = [];
  // this is a backtracking process, all new lines should be unshifted to the result, not
  // pushed to the result
  while (i > 0 || j > 0) {
    if (backtrack[i][j] === 'diag') {
      const type = getType(arrLeft[i - 1]);
      if (
        options.recursiveEqual &&
        (type === 'array' || type === 'object') &&
        isEqual(arrLeft[i - 1], arrRight[j - 1], options)
      ) {
        const reversedLeft = [];
        const reversedRight = [];
        prettyAppendLines(
          reversedLeft,
          reversedRight,
          '',
          '',
          arrLeft[i - 1],
          arrRight[j - 1],
          level + 1,
          options,
        );
        tLeft = concat(tLeft, reversedLeft.reverse(), true);
        tRight = concat(tRight, reversedRight.reverse(), true);
      } else if (type === 'array') {
        const [l, r] = diffArrayLCS(arrLeft[i - 1], arrRight[j - 1], keyLeft, keyRight, level + 1, options);
        tLeft = concat(tLeft, l.reverse(), true);
        tRight = concat(tRight, r.reverse(), true);
      } else if (type === 'object') {
        const [l, r] = diffObject(arrLeft[i - 1], arrRight[j - 1], level + 2, options, diffArrayLCS);
        tLeft.unshift({ level: level + 1, type: 'equal', text: '}' });
        tRight.unshift({ level: level + 1, type: 'equal', text: '}' });
        tLeft = concat(tLeft, l.reverse(), true);
        tRight = concat(tRight, r.reverse(), true);
        tLeft.unshift({ level: level + 1, type: 'equal', text: '{' });
        tRight.unshift({ level: level + 1, type: 'equal', text: '{' });
      } else {
        const reversedLeft = [];
        const reversedRight = [];
        prettyAppendLines(
          reversedLeft,
          reversedRight,
          '',
          '',
          arrLeft[i - 1],
          arrRight[j - 1],
          level + 1,
          options,
        );
        tLeft = concat(tLeft, reversedLeft.reverse(), true);
        tRight = concat(tRight, reversedRight.reverse(), true);
      }
      i--;
      j--;
    } else if (backtrack[i][j] === 'up') {
      if (options.showModifications && i > 1 && backtrack[i - 1][j] === 'left') {
        const typeLeft = getType(arrLeft[i - 1]);
        const typeRight = getType(arrRight[j - 1]);
        if (typeLeft === typeRight) {
          if (typeLeft === 'array') {
            const [l, r] = diffArrayLCS(arrLeft[i - 1], arrRight[j - 1], keyLeft, keyRight, level + 1, options);
            tLeft = concat(tLeft, l.reverse(), true);
            tRight = concat(tRight, r.reverse(), true);
          } else if (typeLeft === 'object') {
            const [l, r] = diffObject(arrLeft[i - 1], arrRight[j - 1], level + 2, options, diffArrayLCS);
            tLeft.unshift({ level: level + 1, type: 'equal', text: '}' });
            tRight.unshift({ level: level + 1, type: 'equal', text: '}' });
            tLeft = concat(tLeft, l.reverse(), true);
            tRight = concat(tRight, r.reverse(), true);
            tLeft.unshift({ level: level + 1, type: 'equal', text: '{' });
            tRight.unshift({ level: level + 1, type: 'equal', text: '{' });
          } else {
            tLeft.unshift({ level: level + 1, type: 'modify', text: formatValue(arrLeft[i - 1]) });
            tRight.unshift({ level: level + 1, type: 'modify', text: formatValue(arrRight[j - 1]) });
          }
        } else {
          const reversedLeft = [];
          const reversedRight = [];
          prettyAppendLines(
            reversedLeft,
            reversedRight,
            '',
            '',
            arrLeft[i - 1],
            arrRight[j - 1],
            level + 1,
            options,
          );
          tLeft = concat(tLeft, reversedLeft.reverse(), true);
          tRight = concat(tRight, reversedRight.reverse(), true);
        }
        i--;
        j--;
      } else {
        const removedLines = stringify(arrLeft[i - 1], undefined, 1).split('\n');
        for (let i = removedLines.length - 1; i >= 0; i--) {
          tLeft.unshift({
            level: level + 1 + (removedLines[i].match(/^\s+/)?.[0]?.length || 0),
            type: 'remove',
            text: removedLines[i].replace(/^\s+/, '').replace(/,$/g, ''),
          });
          tRight.unshift({ level: level + 1, type: 'equal', text: '' });
        }
        i--;
      }
    } else {
      const addedLines = stringify(arrRight[j - 1], undefined, 1).split('\n');
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

  if (level >= (options.maxDepth || Infinity)) {
    linesLeft.push({ level: level + 1, type: 'equal', text: '...' });
    linesRight.push({ level: level + 1, type: 'equal', text: '...' });
  } else {
    const [tLeftReverse, tRightReverse] = lcs(arrLeft, arrRight, keyLeft, keyRight, level, options);
    linesLeft = concat(linesLeft, tLeftReverse);
    linesRight = concat(linesRight, tRightReverse);
  }

  linesLeft.push({ level, type: 'equal', text: ']' });
  linesRight.push({ level, type: 'equal', text: ']' });
  return [linesLeft, linesRight];
};

export default diffArrayLCS;
