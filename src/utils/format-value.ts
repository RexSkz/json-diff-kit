import stringify from './stringify';

const formatValue = (value: any, depth = Infinity) => {
  if (Number.isNaN(value) || value === null) {
    return 'null';
  }
  if (Array.isArray(value) || typeof value === 'object') {
    return stringify(value, null, null, depth);
  }
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return String(value);
};

export default formatValue;
