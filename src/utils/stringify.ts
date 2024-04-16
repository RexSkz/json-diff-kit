import { UndefinedBehavior } from '../differ';

// https://gist.github.com/RexSkz/c4f78a6e143e9008f9c717623b7a2bc1
const stringify = (
  obj: any,
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
  depth = Infinity,
  undefinedBehavior?: UndefinedBehavior,
): string => {
  if (!obj || typeof obj !== 'object') {
    let result: string | undefined = undefined;
    if (!Number.isNaN(obj) && obj !== Infinity && obj !== -Infinity && typeof obj !== 'bigint') {
      result = JSON.stringify(obj, replacer, space);
    }
    if (result === undefined) {
      switch (undefinedBehavior) {
        case UndefinedBehavior.throw:
          throw new Error(`Value is not valid in JSON, got ${String(obj)}`);
        case UndefinedBehavior.stringify:
          return stringifyInvalidValue(obj);
        default:
          throw new Error(`Should not reach here, please report this bug.`);
      }
    }
    return result;
  }
  const t = depth < 1
    ? '"..."'
    : Array.isArray(obj)
      ? `[${obj.map(v => stringify(v, replacer, space, depth - 1, undefinedBehavior)).join(',')}]`
      : `{${Object.keys(obj)
        .map((k) => `"${k}": ${stringify(obj[k], replacer, space, depth - 1, undefinedBehavior)}`)
        .join(', ')}}`;
  return JSON.stringify(JSON.parse(t), replacer, space);
};

const stringifyInvalidValue = (value: any) => {
  if (value === undefined) {
    return 'undefined';
  }
  if (value === Infinity) {
    return 'Infinity';
  }
  if (value === -Infinity) {
    return '-Infinity';
  }
  if (Number.isNaN(value)) {
    return 'NaN';
  }
  if (typeof value === 'bigint') {
    return `${value}n`;
  }
  return String(value);
};

export default stringify;
