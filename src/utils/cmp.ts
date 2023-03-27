import type { DifferOptions } from '../differ';

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
};

/**
 * The compare function to correct the order for "array" or "object":
 * - The order for 2 values with different types are: boolean, number, string, null, array, object.
 * - The order for 2 values with the same type is according to the type:
 *   - For boolean, number, string: use the `<` sign.
 *   - For array and object: preserve the original order (or do we have a better idea?)
 */
const cmp = (a: any, b: any, options?: DifferOptions) => {
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
      return a - b;
    case 'string':
      if (options?.ignoreCase) {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }
      return a < b ? -1 : a > b ? 1 : 0;
    case 'boolean':
      return (+a) - (+b);
  }
};

export default cmp;
