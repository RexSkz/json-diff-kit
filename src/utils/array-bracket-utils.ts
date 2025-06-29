import type { DiffResult } from '../differ';

// Shared utility for array diff
export const addArrayOpeningBrackets = (
  linesLeft: DiffResult[],
  linesRight: DiffResult[],
  keyLeft: string,
  keyRight: string,
  level: number
) => {
  if (keyLeft && keyRight) {
    linesLeft.push({ level, type: 'equal', text: `"${keyLeft}": [` });
    linesRight.push({ level, type: 'equal', text: `"${keyRight}": [` });
  } else {
    linesLeft.push({ level, type: 'equal', text: '[' });
    linesRight.push({ level, type: 'equal', text: '[' });
  }
};

export const addArrayClosingBrackets = (
  linesLeft: DiffResult[],
  linesRight: DiffResult[],
  level: number
) => {
  linesLeft.push({ level, type: 'equal', text: ']' });
  linesRight.push({ level, type: 'equal', text: ']' });
};

export const addMaxDepthPlaceholder = (
  linesLeft: DiffResult[],
  linesRight: DiffResult[],
  level: number
) => {
  linesLeft.push({ level: level + 1, type: 'equal', text: '...' });
  linesRight.push({ level: level + 1, type: 'equal', text: '...' });
}; 