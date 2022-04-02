/**
 * The compare function to correct the order for "array" or "object":
 * - The order for 2 values with different types are: boolean, number, string, null, array, object.
 * - The order for 2 values with the same type is according to the type:
 *   - For boolean, number, string: use the `<` sign.
 *   - For array and object: preserve the original order (or do we have a better idea?)
 */

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

const cmp = (a: any, b: any) => {
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
      return a.localeCompare(b);
    case 'boolean':
      return (+a) - (+b);
  }
};

const sortInnerArrays = (source: any) => {
  if (!source || typeof source !== 'object') {
    return source;
  }

  if (Array.isArray(source)) {
    const result = [...source];
    result.sort((a, b) => cmp(a, b));
    return result.map(item => sortInnerArrays(item));
  }

  const result = { ...source };
  for (const key in result) {
    result[key] = sortInnerArrays(result[key]);
  }
  return result;
};

export default sortInnerArrays;
