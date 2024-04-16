import concat from './concat';

describe('Utility function: concat', () => {
  it('should work for `append` mode', () => {
    expect(concat([1, 2, 3], ['a', 'b', 'c'])).toEqual([1, 2, 3, 'a', 'b', 'c']);
  });

  it('should work for `prepend` mode (`unshift` mode)', () => {
    expect(concat([1, 2, 3], ['a', 'b', 'c'], true)).toEqual(['c', 'b', 'a', 1, 2, 3]);
  });

  it('should throw error when parameter is not an array', () => {
    expect(() => concat(1 as any, ['a', 'b', 'c'])).toThrowError();
    expect(() => concat([1, 2, 3], 'abc' as any)).toThrowError();
  });
});
