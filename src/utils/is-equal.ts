import isEqualWith from 'lodash/isEqualWith';
import type { DifferOptions } from '../differ';

const isEqual = (a: any, b: any, options: DifferOptions) => {
  if (options.ignoreCase) {
    return typeof a === 'string' && typeof b === 'string' && a.toLowerCase() === b.toLowerCase();
  }
  if (options.recursiveEqual) {
    return isEqualWith(a, b, (a, b) => (
      options.ignoreCase
        ? typeof a === 'string' && typeof b === 'string'
          ? a.toLowerCase() === b.toLowerCase()
          : undefined
        : undefined
    ));
  }
  return a === b;
};

export default isEqual;
