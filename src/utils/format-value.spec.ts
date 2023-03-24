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

  it('should work for array & object', () => {
    expect(formatValue([1, 2, '3'])).toBe('[\n 1,\n 2,\n "3"\n]');
    expect(formatValue({ a: 1, b: ['2', true] })).toBe('{\n "a": 1,\n "b": [\n  "2",\n  true\n ]\n}');
  });

  it('should escape the characters when necessary for better display', () => {
    expect(formatValue('first line\n\tsecond line')).toBe('"first line\\n\\tsecond line"');
    expect(formatValue('"')).toBe('"\\""');
  });

});
