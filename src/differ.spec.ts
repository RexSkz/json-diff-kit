import Differ from './differ';

describe('2-dimensional array diff', () => {
  it('normal diff', () => {
    const l = [[1, 2, 3, 4], [5, 6], [9]];
    const r = [[1, 2, 4], [5, 9], [9]];
    const d = new Differ({
      arrayDiffMethod: 'normal',
      showModifications: true,
    });
    const result = d.diff(l, r);
    expect(result[0]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '[' },
      { lineNumber: 2, level: 1, type: 'equal', text: '[' },
      { lineNumber: 3, level: 2, type: 'equal', text: '1', comma: true },
      { lineNumber: 4, level: 2, type: 'equal', text: '2', comma: true },
      { lineNumber: 5, level: 2, type: 'modify', text: '3', comma: true },
      { lineNumber: 6, level: 2, type: 'remove', text: '4' },
      { lineNumber: 7, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 8, level: 1, type: 'equal', text: '[' },
      { lineNumber: 9, level: 2, type: 'equal', text: '5', comma: true },
      { lineNumber: 10, level: 2, type: 'modify', text: '6' },
      { lineNumber: 11, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 12, level: 1, type: 'equal', text: '[' },
      { lineNumber: 13, level: 2, type: 'equal', text: '9' },
      { lineNumber: 14, level: 1, type: 'equal', text: ']' },
      { lineNumber: 15, level: 0, type: 'equal', text: ']' },
    ]);
    expect(result[1]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '[' },
      { lineNumber: 2, level: 1, type: 'equal', text: '[' },
      { lineNumber: 3, level: 2, type: 'equal', text: '1', comma: true },
      { lineNumber: 4, level: 2, type: 'equal', text: '2', comma: true },
      { lineNumber: 5, level: 2, type: 'modify', text: '4' },
      { level: 2, type: 'equal', text: '' },
      { lineNumber: 6, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 7, level: 1, type: 'equal', text: '[' },
      { lineNumber: 8, level: 2, type: 'equal', text: '5', comma: true },
      { lineNumber: 9, level: 2, type: 'modify', text: '9' },
      { lineNumber: 10, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 11, level: 1, type: 'equal', text: '[' },
      { lineNumber: 12, level: 2, type: 'equal', text: '9' },
      { lineNumber: 13, level: 1, type: 'equal', text: ']' },
      { lineNumber: 14, level: 0, type: 'equal', text: ']' },
    ]);
  });

  it('lcs diff', () => {
    const l = [[1, 2, 3, 4], [5, 6], [9]];
    const r = [[1, 2, 4], [5, 9], [9]];
    const d = new Differ({
      arrayDiffMethod: 'lcs',
      showModifications: true,
    });
    const result = d.diff(l, r);
    expect(result[0]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '[' },
      { lineNumber: 2, level: 1, type: 'equal', text: '[' },
      { lineNumber: 3, level: 2, type: 'equal', text: '1', comma: true },
      { lineNumber: 4, level: 2, type: 'equal', text: '2', comma: true },
      { lineNumber: 5, level: 2, type: 'remove', text: '3', comma: true },
      { lineNumber: 6, level: 2, type: 'equal', text: '4' },
      { lineNumber: 7, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 8, level: 1, type: 'equal', text: '[' },
      { lineNumber: 9, level: 2, type: 'equal', text: '5', comma: true },
      { lineNumber: 10, level: 2, type: 'modify', text: '6' },
      { lineNumber: 11, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 12, level: 1, type: 'equal', text: '[' },
      { lineNumber: 13, level: 2, type: 'equal', text: '9' },
      { lineNumber: 14, level: 1, type: 'equal', text: ']' },
      { lineNumber: 15, level: 0, type: 'equal', text: ']' },
    ]);
    expect(result[1]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '[' },
      { lineNumber: 2, level: 1, type: 'equal', text: '[' },
      { lineNumber: 3, level: 2, type: 'equal', text: '1', comma: true },
      { lineNumber: 4, level: 2, type: 'equal', text: '2', comma: true },
      { level: 2, type: 'equal', text: '' },
      { lineNumber: 5, level: 2, type: 'equal', text: '4' },
      { lineNumber: 6, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 7, level: 1, type: 'equal', text: '[' },
      { lineNumber: 8, level: 2, type: 'equal', text: '5', comma: true },
      { lineNumber: 9, level: 2, type: 'modify', text: '9' },
      { lineNumber: 10, level: 1, type: 'equal', text: ']', comma: true },
      { lineNumber: 11, level: 1, type: 'equal', text: '[' },
      { lineNumber: 12, level: 2, type: 'equal', text: '9' },
      { lineNumber: 13, level: 1, type: 'equal', text: ']' },
      { lineNumber: 14, level: 0, type: 'equal', text: ']' },
    ]);
  });
});
