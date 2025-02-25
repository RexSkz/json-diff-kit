import getType from './get-type';

describe('Utility function: getType', () => {
  it('should work for primitives ', () => {
    expect(getType('a')).toBe('string');
    expect(getType(1)).toBe('number');
    expect(getType(true)).toBe('boolean');
  });

  it('should return "null" for null', () => {
    expect(getType(null)).toBe('null');
  });

  it('should work for array & object ', () => {
    expect(getType([1, 2, '3'])).toBe('array');
    expect(getType({ a: 1 })).toBe('object');
  });
});
