interface CmpOptions {
  ignoreCase?: boolean;
  keyOrdersMap?: Map<string, number>;
}

const getOrderByType = (value: any) => {
  if (typeof value === 'boolean') {
    return 0;
  }
  if (typeof value === 'number') {
    return 1;
  }
  if (typeof value === 'string') {
    return 2;
  }
  if (value === null) {
    return 3;
  }
  if (Array.isArray(value)) {
    return 4;
  }
  if (typeof value === 'object') {
    return 5;
  }
  if (typeof value === 'symbol') {
    return 6;
  }
  if (typeof value === 'function') {
    return 7;
  }
  if (typeof value === 'bigint') {
    return 8;
  }
  return -1;
};

/**
 * The compare function to correct the order for "array" or "object":
 * - The order for 2 values with different types are: boolean, number, string, null, array, object.
 * - The order for 2 values with the same type is according to the type:
 *   - For boolean, number, string: use the `<` sign.
 *   - For array and object: preserve the original order (or do we have a better idea?)
 */
const cmp = (a: any, b: any, options: CmpOptions) => {
  const orderByMapA = options.keyOrdersMap?.get(a);
  const orderByMapB = options.keyOrdersMap?.get(b);
  if (orderByMapA !== undefined && orderByMapB !== undefined) {
    return orderByMapA - orderByMapB;
  }

  const orderByTypeA = getOrderByType(a);
  const orderByTypeB = getOrderByType(b);

  if (orderByTypeA !== orderByTypeB) {
    return orderByTypeA - orderByTypeB;
  }

  if (a === null && b === null || Array.isArray(a) && Array.isArray(b) || orderByTypeA === 5 && orderByTypeB === 5) {
    return 0;
  }

  switch (typeof a) {
    case 'number':
      if (
        Number.isNaN(a) && Number.isNaN(b) ||
        a === Infinity && b === Infinity ||
        a === -Infinity && b === -Infinity
      ) {
        return 0;
      }
      return a - b;
    case 'string':
      if (options.ignoreCase) {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }
      return a < b ? -1 : a > b ? 1 : 0;
    case 'boolean':
      return (+a) - (+b);
    case 'symbol':
    case 'function':
      return String(a).localeCompare(String(b));
  }

  if (typeof a === 'bigint' && typeof b === 'bigint') {
    const result = BigInt(a) - BigInt(b);
    return result < 0 ? -1 : result > 0 ? 1 : 0;
  }

  return String(a).localeCompare(String(b));
};

export default cmp;
