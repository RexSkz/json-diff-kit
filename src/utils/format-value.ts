import stringify from './stringify';

const formatValue = (value: any, depth = Infinity) => {
  if (Array.isArray(value) || typeof value === 'object') {
    return stringify(value, null, null, depth);
  }
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return String(value);
};

export default formatValue;
