/**
 * If we use `a.push(...b)`, it will result in `Maximum call stack size exceeded` error.
 * The reason is unclear, it may be a bug of V8, so we should implement a push method by ourselves.
 */
const concat = <T, U>(a: T[], b: U[], prependEach = false): (T | U)[] => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Both arguments should be arrays.');
  }
  const lenA = a.length;
  const lenB = b.length;
  const len = lenA + lenB;
  const result = new Array(len);
  if (prependEach) {
    for (let i = 0; i < lenB; i++) {
      result[i] = b[lenB - i - 1];
    }
    for (let i = 0; i < lenA; i++) {
      result[i + lenB] = a[i];
    }
    return result;
  }
  for (let i = 0; i < lenA; i++) {
    result[i] = a[i];
  }
  for (let i = 0; i < lenB; i++) {
    result[i + lenA] = b[i];
  }
  return result;
};

export default concat;
