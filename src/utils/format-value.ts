import stringify from './stringify';

const formatValue = (value: any, depth = Infinity) => {
  if (Number.isNaN(value) || value === null) {
    return 'null';
  }
  if (Array.isArray(value) || typeof value === 'object') {
    return stringify(value, null, 1, depth);
  }
  if (typeof value === 'string') {
    return stringify(value);
  }
  return stringify(value);
};

export default formatValue;
