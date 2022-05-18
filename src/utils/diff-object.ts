import diffArrayLCS from './diff-array-lcs';
import formatValue from './format-value';
import getType from './get-type';
import stringify from './stringify';

import type { DifferOptions, DiffResult, ArrayDiffFunc } from '../differ';

const diffObject = (
  lhs: Record<string, any>,
  rhs: Record<string, any>,
  level = 1,
  options: DifferOptions,
  arrayDiffFunc: ArrayDiffFunc,
): [DiffResult[], DiffResult[]] => {
  if (level > options.maxDepth) {
    return [
      [{ level, type: 'equal', text: '...' }],
      [{ level, type: 'equal', text: '...' }],
    ];
  }

  const linesLeft: DiffResult[] = [];
  const linesRight: DiffResult[] = [];

  if (lhs === null && rhs === null || lhs === undefined && rhs === undefined) {
    return [linesLeft, linesRight];
  } else if (lhs === null || lhs === undefined) {
    const addedLines = stringify(rhs, null, 1).split('\n');
    for (let i = 0; i < addedLines.length; i++) {
      linesLeft.push({ level, type: 'equal', text: '' });
      linesRight.push({
        level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
        type: 'add',
        text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, ''),
      });
    }
    return [linesLeft, linesRight];
  } else if (rhs === null || rhs === undefined) {
    const addedLines = stringify(lhs, null, 1).split('\n');
    for (let i = 0; i < addedLines.length; i++) {
      linesLeft.push({
        level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
        type: 'remove',
        text: addedLines[i].replace(/^\s+/, '').replace(/,$/g, ''),
      });
      linesRight.push({ level, type: 'equal', text: '' });
    }
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
        if (options.showModifications) {
          linesLeft.push({ level, type: 'modify', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
          linesRight.push({ level, type: 'modify', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
        } else {
          linesLeft.push({ level, type: 'remove', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
          linesLeft.push({ level, type: 'equal', text: '' });
          linesRight.push({ level, type: 'equal', text: '' });
          linesRight.push({ level, type: 'add', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
        }
      } else if (Array.isArray(lhs[keyLeft])) {
        const arrLeft = [...lhs[keyLeft]];
        const arrRight = [...rhs[keyRight]];
        const [resLeft, resRight] = arrayDiffFunc(arrLeft, arrRight, keyLeft, keyRight, level, options, [], []);
        linesLeft.push(...resLeft);
        linesRight.push(...resRight);
      } else if (typeof lhs[keyLeft] === 'object') {
        const result = diffObject(
          lhs[keyLeft],
          rhs[keyRight],
          level + 1,
          options,
          arrayDiffFunc,
        );
        linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": {` });
        linesLeft.push(...result[0]);
        linesLeft.push({ level, type: 'equal', text: '}' });
        linesRight.push({ level, type: 'equal', text: `"${keyRight}": {` });
        linesRight.push(...result[1]);
        linesRight.push({ level, type: 'equal', text: '}' });
      } else {
        if (lhs[keyLeft] !== rhs[keyRight]) {
          if (options.showModifications) {
            linesLeft.push({ level, type: 'modify', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
            linesRight.push({ level, type: 'modify', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
          } else {
            linesLeft.push({ level, type: 'remove', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
            linesLeft.push({ level, type: 'equal', text: '' });
            linesRight.push({ level, type: 'equal', text: '' });
            linesRight.push({ level, type: 'add', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
          }
        } else {
          linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": ${formatValue(lhs[keyLeft])}` });
          linesRight.push({ level, type: 'equal', text: `"${keyRight}": ${formatValue(rhs[keyRight])}` });
        }
      }
    } else if (keyLeft && keyRight) {
      if (keyLeft < keyRight) {
        const addedLines = stringify(lhs[keyLeft], null, 1).split('\n');
        for (let i = 0; i < addedLines.length; i++) {
          const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
          linesLeft.push({
            level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
            type: 'remove',
            text: i ? text : `"${keyLeft}": ${text}`,
          });
          linesRight.push({ level, type: 'equal', text: '' });
        }
      } else {
        const addedLines = stringify(rhs[keyRight], null, 1).split('\n');
        for (let i = 0; i < addedLines.length; i++) {
          const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
          linesLeft.push({ level, type: 'equal', text: '' });
          linesRight.push({
            level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
            type: 'add',
            text: i ? text : `"${keyRight}": ${text}`,
          });
        }
      }
    } else if (keyLeft) {
      const addedLines = stringify(lhs[keyLeft], null, 1).split('\n');
      for (let i = 0; i < addedLines.length; i++) {
        const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
        linesLeft.push({
          level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
          type: 'remove',
          text: i ? text : `"${keyLeft}": ${text}`,
        });
        linesRight.push({ level, type: 'equal', text: '' });
      }
    } else if (keyRight) {
      const addedLines = stringify(rhs[keyRight], null, 1).split('\n');
      for (let i = 0; i < addedLines.length; i++) {
        const text = addedLines[i].replace(/^\s+/, '').replace(/,$/g, '');
        linesLeft.push({ level, type: 'equal', text: '' });
        linesRight.push({
          level: level + (addedLines[i].match(/^\s+/)?.[0]?.length || 0),
          type: 'add',
          text: i ? text : `"${keyRight}": ${text}`,
        });
      }
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
