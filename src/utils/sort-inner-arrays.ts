const sortInnerArrays = (source: any) => {
  if (!source || typeof source !== 'object') {
    return source;
  }

  if (Array.isArray(source)) {
    const result = [...source];
    result.sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      return String(a).localeCompare(String(b));
    });
    return result.map(item => sortInnerArrays(item));
  }

  const result = { ...source };
  for (const key in result) {
    result[key] = sortInnerArrays(result[key]);
  }
  return result;
};

export default sortInnerArrays;
