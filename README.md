# JSON Diff Kit

[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

> A better JSON differ & viewer.

## Install

You can install `json-diff-kit` via various package managers.

```sh
# using npm
npm i json-diff-kit --save

# using yarn
yarn add json-diff-kit

# using pnpm
pnpm add json-diff-kit
```

## Quick Start

To generate the diff data:

```ts
import { Differ } from 'json-diff-kit';

const before = {
  a: 1,
  b: 2,
  d: [1, 5, 4],
  e: ['1', 2, { f: 3, g: null, h: [5], i: [] }, 9],
};
const after = {
  b: 2,
  c: 3,
  d: [1, 3, 4, 6],
  e: ['1', 2, 3, { f: 4, g: false, i: [7, 8] }, 10],
};

// all configs are optional
const differ = new Differ({
  detectCircular: true,
  maxDepth: Infinity,
  showModifications: true,
  arrayDiffMethod: 'lcs',
});

const diff = differ.diff(before, after);
console.log(diff);
```

You can use your own component to visualize the `diff` data, or use the built-in viewer:

```tsx
import { Viewer } from 'json-diff-kit';
import type { DiffResult } from 'json-diff-kit';

interface PageProps {
  diff: [DiffResult[], DiffResult[]];
}

const Page: React.FC<PageProps> = props => {
  return (
    <Viewer
      diff={props.diff}
      indent={4}
      lineNumbers={true}
    />
  );
};
```

The result is here:

![The result (using LCS array diff method).](./preview.png)

## More Complex Usages

Please check the [GitHub pages](https://rexskz.github.io/json-diff-kit/). The code is at [here](./demo/index.tsx).

## License

MIT

[npm-url]: https://npmjs.org/package/json-diff-kit
[npm-image]: https://img.shields.io/npm/v/json-diff-kit.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/json-diff-kit.svg?style=flat-square
