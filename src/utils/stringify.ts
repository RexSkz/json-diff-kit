// https://gist.github.com/RexSkz/c4f78a6e143e9008f9c717623b7a2bc1
const stringify = (
  obj: any,
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
  depth = Infinity,
): string => {
  if (!obj || typeof obj !== 'object') {
    return JSON.stringify(obj, replacer, space);
  }
  const t = depth < 1
    ? '"..."'
    : Array.isArray(obj)
      ? `[${obj.map(v => stringify(v, replacer, space, depth - 1)).join(',')}]`
      : `{${Object.keys(obj)
      .map((k) => `"${k}": ${stringify(obj[k], replacer, space, depth - 1)}`)
      .join(', ')}}`;
  return JSON.stringify(JSON.parse(t), replacer, space);
};

export default stringify;
