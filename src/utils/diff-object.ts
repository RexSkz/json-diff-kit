import cmp from './cmp';
import concat from './concat';
import formatValue from './format-value';
import getType from './get-type';
import sortKeys from './sort-keys';
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

  let linesLeft: DiffResult[] = [];
  let linesRight: DiffResult[] = [];

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
  sortKeys(keysLeft, options);
  sortKeys(keysRight, options);

  const keysCmpOptions = { ignoreCase: options.ignoreCaseForKey };
  const valueCmpOptions = { ignoreCase: options.ignoreCase };
  while (keysLeft.length || keysRight.length) {
    const keyLeft = keysLeft[0];
    const keyRight = keysRight[0];
    const cmpResult = cmp(keyLeft, keyRight, keysCmpOptions);

    if (cmpResult === 0) {
      if (getType(lhs[keyLeft]) !== getType(rhs[keyRight])) {
        const _resultLeft = formatValue(lhs[keyLeft], options.maxDepth, true).split('\n');
        const _resultRight = formatValue(rhs[keyRight], options.maxDepth, true).split('\n');
        if (options.showModifications) {
          const maxLines = Math.max(_resultLeft.length, _resultRight.length);
          for (let i = _resultLeft.length; i < maxLines; i++) {
            _resultLeft.push('');
          }
          for (let i = _resultRight.length; i < maxLines; i++) {
            _resultRight.push('');
          }
          linesLeft.push({ level, type: 'modify', text: `"${keyLeft}": ${_resultLeft[0]}` });
          for (let i = 1; i < _resultLeft.length; i++) {
            linesLeft.push({
              level: level + (_resultLeft[i].match(/^\s+/)?.[0]?.length || 0),
              type: 'modify',
              text: _resultLeft[i].replace(/^\s+/, '').replace(/,$/g, ''),
            });
          }
          for (let i = _resultLeft.length; i < maxLines; i++) {
            linesLeft.push({ level, type: 'equal', text: '' });
          }
          linesRight.push({ level, type: 'modify', text: `"${keyRight}": ${_resultRight[0]}` });
          for (let i = 1; i < _resultRight.length; i++) {
            linesRight.push({
              level: level + (_resultRight[i].match(/^\s+/)?.[0]?.length || 0),
              type: 'modify',
              text: _resultRight[i].replace(/^\s+/, '').replace(/,$/g, ''),
            });
          }
          for (let i = _resultRight.length; i < maxLines; i++) {
            linesRight.push({ level, type: 'equal', text: '' });
          }
        } else {
          linesLeft.push({ level, type: 'remove', text: `"${keyLeft}": ${_resultLeft[0]}` });
          for (let i = 1; i < _resultLeft.length; i++) {
            linesLeft.push({
              level: level + (_resultLeft[i].match(/^\s+/)?.[0]?.length || 0),
              type: 'remove',
              text: _resultLeft[i].replace(/^\s+/, '').replace(/,$/g, ''),
            });
          }
          for (let i = 0; i < _resultRight.length; i++) {
            linesLeft.push({ level, type: 'equal', text: '' });
          }
          for (let i = 0; i < _resultLeft.length; i++) {
            linesRight.push({ level, type: 'equal', text: '' });
          }
          linesRight.push({ level, type: 'add', text: `"${keyRight}": ${_resultRight[0]}` });
          for (let i = 1; i < _resultRight.length; i++) {
            linesRight.push({
              level: level + (_resultRight[i].match(/^\s+/)?.[0]?.length || 0),
              type: 'add',
              text: _resultRight[i].replace(/^\s+/, '').replace(/,$/g, ''),
            });
          }
        }
      } else if (Array.isArray(lhs[keyLeft])) {
        const arrLeft = [...lhs[keyLeft]];
        const arrRight = [...rhs[keyRight]];
        const [resLeft, resRight] = arrayDiffFunc(arrLeft, arrRight, keyLeft, keyRight, level, options, [], []);
        linesLeft = concat(linesLeft, resLeft);
        linesRight = concat(linesRight, resRight);
      } else if (typeof lhs[keyLeft] === 'object') {
        const result = diffObject(
          lhs[keyLeft],
          rhs[keyRight],
          level + 1,
          options,
          arrayDiffFunc,
        );
        linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": {` });
        linesLeft = concat(linesLeft, result[0]);
        linesLeft.push({ level, type: 'equal', text: '}' });
        linesRight.push({ level, type: 'equal', text: `"${keyRight}": {` });
        linesRight = concat(linesRight, result[1]);
        linesRight.push({ level, type: 'equal', text: '}' });
      } else {
        if (cmp(lhs[keyLeft], rhs[keyRight], valueCmpOptions) !== 0) {
          if (options.showModifications) {
            linesLeft.push({ level, type: 'modify', text: `"${keyLeft}": ${formatValue(lhs[keyLeft], options.maxDepth)}` });
            linesRight.push({ level, type: 'modify', text: `"${keyRight}": ${formatValue(rhs[keyRight], options.maxDepth)}` });
          } else {
            linesLeft.push({ level, type: 'remove', text: `"${keyLeft}": ${formatValue(lhs[keyLeft], options.maxDepth)}` });
            linesLeft.push({ level, type: 'equal', text: '' });
            linesRight.push({ level, type: 'equal', text: '' });
            linesRight.push({ level, type: 'add', text: `"${keyRight}": ${formatValue(rhs[keyRight], options.maxDepth)}` });
          }
        } else {
          linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": ${formatValue(lhs[keyLeft], options.maxDepth)}` });
          linesRight.push({ level, type: 'equal', text: `"${keyRight}": ${formatValue(rhs[keyRight], options.maxDepth)}` });
        }
      }
    } else if (keysLeft.length && keysRight.length) {
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
    } else if (keysLeft.length) {
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
    } else if (keysRight.length) {
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
    } else if (cmpResult === 0) {
      keysLeft.shift();
      keysRight.shift();
    } else if (cmpResult < 0) {
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
