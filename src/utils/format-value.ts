import { UndefinedBehavior } from '../differ';
import stringify from './stringify';

const formatValue = (
  value: any,
  depth = Infinity,
  pretty = false,
  undefinedBehavior = UndefinedBehavior.stringify,
) => {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value) || typeof value === 'object') {
    return stringify(value, undefined, pretty ? 1 : undefined, depth, undefinedBehavior);
  }
  return stringify(value, undefined, undefined, undefined, undefinedBehavior);
};

export default formatValue;
