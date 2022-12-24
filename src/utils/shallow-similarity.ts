const shallowSimilarity = (left: any, right: any): number => {
  if (left === right) {
    return 1;
  }
  if (left === null || right === null) {
    return 0;
  }
  if (typeof left !== 'object' || typeof right !== 'object') {
    return 0;
  }
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  const leftKeysLength = leftKeys.length;
  const rightKeysLength = rightKeys.length;
  if (leftKeysLength === 0 || rightKeysLength === 0) {
    return 0;
  }
  const leftKeysSet = new Set(leftKeys);
  const rightKeysSet = new Set(rightKeys);
  const intersection = new Set([...leftKeysSet].filter(x => rightKeysSet.has(x)));
  if (intersection.size === 0) {
    return 0;
  }
  if (
    intersection.size === 1 &&
    (leftKeysLength === 1 || rightKeysLength === 1) &&
    left[leftKeys[0]] !== right[rightKeys[0]]
  ) {
    return 0;
  }
  return Math.max(
    intersection.size / leftKeysLength,
    intersection.size / rightKeysLength,
  );
};

export default shallowSimilarity;
