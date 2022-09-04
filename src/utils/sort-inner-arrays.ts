import type { DifferOptions } from '../differ';
import cmp from './cmp';

const sortInnerArrays = (source: any, options: DifferOptions) => {
  if (!source || typeof source !== 'object') {
    return source;
  }

  if (Array.isArray(source)) {
    const result = [...source];
    result.sort((a, b) => cmp(a, b, options));
    return result.map(item => sortInnerArrays(item, options));
  }

  const result = { ...source };
  for (const key in result) {
    result[key] = sortInnerArrays(result[key], options);
  }
  return result;
};

export default sortInnerArrays;
