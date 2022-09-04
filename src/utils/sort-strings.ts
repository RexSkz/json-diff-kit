import type { DifferOptions } from '../differ';

const sortStrings = (arr: string[], options: DifferOptions) => {
  if (options.ignoreCase) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  }
  return arr.sort();
}

export default sortStrings;
