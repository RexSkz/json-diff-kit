const formatValue = (value: any) => {
  if (Array.isArray(value) || typeof value === 'object') {
    return JSON.stringify(value);
  }
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return String(value);
};

export default formatValue;
