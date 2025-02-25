import fs from 'node:fs';
import type { DiffResult } from '@json-diff-kit/differ/src';

const decorate = (line: DiffResult) => {
  const sign = line.type === 'equal' ? ' ' : line.type === 'remove' ? '-' : '+';
  const indent = '  '.repeat(line.level);
  const comma = line.comma ? ',' : '';
  return `${sign} ${indent}${line.text}${comma}`;
};

/**
 * It's not able to write side-by-side diff to a file,
 * so we just use the Git-style output.
 */
const writeToFile = (path: string, content: readonly [DiffResult[], DiffResult[]]) => {
  const [linesLeft, linesRight] = content;
  const length = linesLeft.length;
  const output: string[] = [];

  for (let i = 0; i < length; i++) {
    const left = linesLeft[i];
    const right = linesRight[i];
    if (left.type === 'equal' && right.type === 'equal') {
      output.push(decorate(left));
    } else {
      if (left.text) output.push(decorate(left));
      if (right.text) output.push(decorate(right));
    }
  }

  const fileContent = output.join('\n');
  fs.writeFileSync(path, fileContent, 'utf-8');
};

export default writeToFile;
