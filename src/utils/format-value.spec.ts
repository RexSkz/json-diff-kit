import formatValue from './format-value';

describe('Utility function: formatValue', () => {

  it('should work for primitives ', () => {
    expect(formatValue('a')).toBe('"a"');
    expect(formatValue(1)).toBe('1');
    expect(formatValue(true)).toBe('true');
  });

  it('should return "null" for null & NaN', () => {
    expect(formatValue(null)).toBe('null');
    expect(formatValue(NaN)).toBe('null');
  });

  it('should work for array & object ', () => {
    expect(formatValue([1, 2, '3'])).toBe('[1,2,"3"]');
    expect(formatValue({ a: 1, b: ['2', true] })).toBe('{"a":1,"b":["2",true]}');
  });

});
