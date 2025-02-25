import shallowSimilarity from './shallow-similarity';

describe('Utility function: shallowSimilarity', () => {
  it('should return 1 if both values are the same', () => {
    expect(shallowSimilarity('2', '2')).toBe(1);
  });

  it('should return 0 if either value is null', () => {
    expect(shallowSimilarity(null, '2')).toBe(0);
    expect(shallowSimilarity('2', null)).toBe(0);
  });

  it('should return 0 if either value is not an object', () => {
    expect(shallowSimilarity('2', 2)).toBe(0);
  });

  it('should return 0 if both values are objects but have no common keys', () => {
    expect(shallowSimilarity({ a: 1 }, { b: 2 })).toBe(0);
  });

  it('should return the correct value if both values are objects and have common keys', () => {
    expect(shallowSimilarity({ a: 1 }, { a: 1 })).toBe(1);
    expect(shallowSimilarity({ a: 1, b: 2 }, { a: 1, c: 3 })).toBe(0.5);
    expect(shallowSimilarity({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(1);
  });
});
