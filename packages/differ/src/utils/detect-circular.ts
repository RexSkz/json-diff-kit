const detectCircular = (value: any, map: Map<any, boolean> = new Map()) => {
  // primitive types should not be checked
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  // value has appeared
  if (map.has(value)) {
    return true;
  }
  map.set(value, true);

  // value is an array
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (detectCircular(value[i], map)) {
        return true;
      }
    }
    return false;
  }

  // value is an object
  for (const key in value) {
    if (detectCircular(value[key], map)) {
      return true;
    }
  }
  return false;
};

export default detectCircular;
