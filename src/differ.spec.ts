import Differ from './differ';

describe('object diff', () => {
  it('preserve key order', () => {
    const l = { a: 1, b: 2, c: 3 };
    const r = { c: 3, b: 2, d: 4, a: 1 };
    const d = new Differ();
    const result = d.diff(l, r);
    expect(result[0]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '{' },
      { lineNumber: 2, level: 1, type: 'equal', text: '"a": 1', comma: true },
      { lineNumber: 3, level: 1, type: 'equal', text: '"b": 2', comma: true },
      { lineNumber: 4, level: 1, type: 'equal', text: '"c": 3' },
      { level: 1, type: 'equal', text: '' },
      { lineNumber: 5, level: 0, type: 'equal', text: '}' },
    ]);
    expect(result[1]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '{' },
      { lineNumber: 2, level: 1, type: 'equal', text: '"a": 1', comma: true },
      { lineNumber: 3, level: 1, type: 'equal', text: '"b": 2', comma: true },
      { lineNumber: 4, level: 1, type: 'equal', text: '"c": 3', comma: true },
      { lineNumber: 5, level: 1, type: 'add', text: '"d": 4' },
      { lineNumber: 6, level: 0, type: 'equal', text: '}' },
    ]);
  });
});

describe('object array diff', () => {
  it('recursive equal', () => {
    const l = [
      { id: '1', x: 'a' },
      { id: '2', x: 'b' },
    ];
    const r = [
      { id: '2', x: 'b' },
      { id: '1', x: 'a' },
    ];
    const d = new Differ({ recursiveEqual: true, arrayDiffMethod: 'lcs' });
    const result = d.diff(l, r);
    expect(result[0]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '[' },
      { level: 1, type: 'equal', text: '' },
      { level: 1, type: 'equal', text: '' },
      { level: 1, type: 'equal', text: '' },
      { level: 1, type: 'equal', text: '' },
      { lineNumber: 2, level: 1, type: 'equal', text: '{' },
      { lineNumber: 3, level: 2, type: 'equal', text: '"id": "1"', comma: true },
      { lineNumber: 4, level: 2, type: 'equal', text: '"x": "a"' },
      { lineNumber: 5, level: 1, type: 'equal', text: '}', comma: true },
      { lineNumber: 6, level: 1, type: 'remove', text: '{' },
      { lineNumber: 7, level: 2, type: 'remove', text: '"id": "2"', comma: true },
      { lineNumber: 8, level: 2, type: 'remove', text: '"x": "b"' },
      { lineNumber: 9, level: 1, type: 'remove', text: '}' },
      { lineNumber: 10, level: 0, type: 'equal', text: ']' },
    ]);
    expect(result[1]).toEqual([
      { lineNumber: 1, level: 0, type: 'equal', text: '[' },
      { lineNumber: 2, level: 1, type: 'add', text: '{' },
      { lineNumber: 3, level: 2, type: 'add', text: '"id": "2"', comma: true },
      { lineNumber: 4, level: 2, type: 'add', text: '"x": "b"' },
      { lineNumber: 5, level: 1, type: 'add', text: '}', comma: true },
      { lineNumber: 6, level: 1, type: 'equal', text: '{' },
      { lineNumber: 7, level: 2, type: 'equal', text: '"id": "1"', comma: true },
      { lineNumber: 8, level: 2, type: 'equal', text: '"x": "a"' },
      { lineNumber: 9, level: 1, type: 'equal', text: '}' },
      { level: 1, type: 'equal', text: '' },
      { level: 1, type: 'equal', text: '' },
      { level: 1, type: 'equal', text: '' },
      { level: 1, type: 'equal', text: '' },
      { lineNumber: 10, level: 0, type: 'equal', text: ']' },
    ]);
  });
});

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
