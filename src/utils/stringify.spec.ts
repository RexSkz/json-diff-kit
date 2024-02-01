import stringify from './stringify';

describe('Utility function: stringify', () => {

  it('should work like `JSON.stringify` if does not provide a `depth`', () => {
    const testCases = [
      1,
      '2',
      true,
      [],
      [1, '2', true],
      {},
      { a: 1, b: '2', c: [3, { d: 4 }] },
    ];
    for (const testCase of testCases) {
      expect(stringify(testCase, undefined, 2)).toBe(JSON.stringify(testCase, undefined, 2));
    }
  });

  it('should deal with the `depth` param correctly', () => {
    // depth 0
    const depth0 = (value: any) => stringify(value, undefined, 2, 0);
    expect(depth0(1)).toBe('1');
    expect(depth0([1, '2', true])).toBe('"..."');
    expect(depth0({})).toBe('"..."');
    expect(depth0({ a: 1, b: '2', c: [3, { d: 4 }] })).toBe('"..."');

    const depth1 = (value: any) => stringify(value, undefined, 2, 1);
    expect(depth1(1)).toBe('1');
    expect(depth1([1, '2', true])).toBe('[\n  1,\n  "2",\n  true\n]');
    expect(depth1({})).toBe('{}');
    expect(depth1({ a: 1, b: '2', c: [3, { d: 4 }] })).toBe('{\n  "a": 1,\n  "b": "2",\n  "c": "..."\n}');

    const depth2 = (value: any) => stringify(value, undefined, 2, 2);
    expect(depth2({ a: 1, b: '2', c: [3, { d: 4 }] })).toBe('{\n  "a": 1,\n  "b": "2",\n  "c": [\n    3,\n    "..."\n  ]\n}');

    const depth3 = (value: any) => stringify(value, undefined, 2, 3);
    expect(depth3({ a: 1, b: '2', c: [3, { d: 4 }] })).toBe('{\n  "a": 1,\n  "b": "2",\n  "c": [\n    3,\n    {\n      "d": 4\n    }\n  ]\n}');
  });

});
