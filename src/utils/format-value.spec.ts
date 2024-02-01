import formatValue from './format-value';

describe('Utility function: formatValue', () => {

  it('should work for primitives ', () => {
    expect(formatValue('a')).toBe('"a"');
    expect(formatValue(1)).toBe('1');
    expect(formatValue(true)).toBe('true');
  });

  it('should handle invalid values correctly', () => {
    expect(formatValue(null)).toBe('null');
    expect(formatValue(NaN)).toBe('NaN');
    expect(formatValue(Infinity)).toBe('Infinity');
    expect(formatValue(-Infinity)).toBe('-Infinity');
    expect(formatValue(undefined)).toBe('undefined');
    expect(formatValue(Symbol.iterator)).toBe('Symbol(Symbol.iterator)');
  });

  it('should work for array & object', () => {
    expect(formatValue([1, 2, '3'])).toBe('[1,2,"3"]');
    expect(formatValue({ a: 1, b: ['2', true] })).toBe('{"a":1,"b":["2",true]}');
  });

  it('should work for array & object with pretty', () => {
    expect(formatValue([1, 2, '3'], undefined, true)).toBe('[\n 1,\n 2,\n "3"\n]');
    expect(formatValue({ a: 1, b: ['2', true] }, undefined, true)).toBe('{\n "a": 1,\n "b": [\n  "2",\n  true\n ]\n}');
  });

  it('should escape the characters when necessary for better display', () => {
    expect(formatValue('first line\n\tsecond line')).toBe('"first line\\n\\tsecond line"');
    expect(formatValue('"')).toBe('"\\""');
  });

});
