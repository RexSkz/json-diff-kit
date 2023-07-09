import stringify from './stringify';

const formatValue = (value: any, depth = Infinity, pretty = false) => {
  if (Number.isNaN(value) || value === null) {
    return 'null';
  }
  if (Array.isArray(value) || typeof value === 'object') {
    return stringify(value, undefined, pretty ? 1 : undefined, depth);
  }
  if (typeof value === 'string') {
    return stringify(value);
  }
  return stringify(value);
};

export default formatValue;
