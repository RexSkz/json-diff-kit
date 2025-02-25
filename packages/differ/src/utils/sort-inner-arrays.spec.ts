import sortInnerArrays from './sort-inner-arrays';

describe('Utility function: sortInnerArrays', () => {
  it('should return the original value if value is not array or object', () => {
    expect(sortInnerArrays(1)).toBe(1);
    expect(sortInnerArrays('2')).toBe('2');
    expect(sortInnerArrays(true)).toBe(true);
  });

  it('should work like `Array.prototype.sort` for one-level typed arrays', () => {
    const numArray = Array(100).fill(0).map(() => Math.random() * 1e6 | 0);
    const sortedNumArray = [...numArray].sort((a, b) => a - b);
    expect(sortInnerArrays(numArray)).toStrictEqual(sortedNumArray);

    const strArray = Array(100).fill(0).map(() => String(Math.random() * 1e6 | 0));
    const sortedStrArray = [...strArray].sort((a, b) => a.localeCompare(b));
    expect(sortInnerArrays(strArray)).toStrictEqual(sortedStrArray);
  });

  it('should sort all the levels for a nested array', () => {
    // array as an array item
    const arr1 = Array(100).fill(0).map(() => Math.random() * 1e6 | 0);
    const sortedArr1 = [...arr1].sort((a, b) => a - b);
    expect(sortInnerArrays(arr1)).toStrictEqual(sortedArr1);

    // array as an object value
    const arr2 = Array(100).fill(0).map(() => Math.random() * 1e6 | 0);
    const sortedArr2 = [...arr2].sort((a, b) => a - b);
    expect(sortInnerArrays(arr2)).toStrictEqual(sortedArr2);
  });

  it('should work properly for one-level mix-typed arrays', () => {
    const arr = [1, '2', true, '3', null, [], -1, false, null, '0', {}];
    const sortedArr = [false, true, -1, 1, '0', '2', '3', null, null, [], {}];
    expect(sortInnerArrays(arr)).toStrictEqual(sortedArr);
  });

  it('should work properly for nested mix-typed arrays', () => {
    const arr = [1, { t: 6 }, [{ a: 1, b: ['2', 7] }, 4], null, [], -1, null, '0', {}];
    const sortedArr = [-1, 1, '0', null, null, [4, { a: 1, b: [7, '2'] }], [], { t: 6 }, {}];
    expect(sortInnerArrays(arr)).toStrictEqual(sortedArr);
  });
});
