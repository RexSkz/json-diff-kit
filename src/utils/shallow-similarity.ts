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
  let intersection = 0;
  for (const key in left) {
    if (
      Object.prototype.hasOwnProperty.call(left, key) &&
      Object.prototype.hasOwnProperty.call(right, key) &&
      left[key] === right[key]
    ) {
      intersection++;
    }
  }
  return Math.max(
    intersection / Object.keys(left).length,
    intersection / Object.keys(right).length,
  );
};

export default shallowSimilarity;
