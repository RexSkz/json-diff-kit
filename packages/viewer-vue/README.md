# JSON Diff Kit Viewer (Vue)

[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

The Vue version of `Viewer` used by `json-diff-kit`. For more documents and usages, please refer to the [json-diff-kit's main repository](https://github.com/RexSkz/json-diff-kit/) as well as [the playground (React version)](https://json-diff-kit.js.org/).

## Installation

```bash
# using npm
npm i @json-diff-kit/viewer-vue --save

# using yarn
yarn add @json-diff-kit/viewer-vue

# using pnpm
pnpm add @json-diff-kit/viewer-vue
```

## Usage

```vue
<script setup lang="ts">
import { Differ, Viewer } from '@json-diff-kit/viewer-vue';
import type { DifferOptions, ViewerProps } from '@json-diff-kit/viewer-vue';

const differProps: DifferOptions = {
  detectCircular: false,
  maxDepth: Infinity,
  showModifications: true,
  arrayDiffMethod: 'lcs',
  ignoreCase: false,
  recursiveEqual: true,
  preserveKeyOrder: true,
};
const differ = new Differ(differProps);

const before = { a: 1, b: 2, c: 3 };
const after = { a: 1, b: 3, d: 4 };
const diff = differ.diff(before, after);

const viewerProps: Partial<ViewerProps> = {
  diff,
  indent: 2,
  lineNumbers: true,
  highlightInlineDiff: true,
  inlineDiffOptions: {
    mode: 'word',
    wordSeparator: ' ',
  },
  hideUnchangedLines: true,
  syntaxHighlight: { theme: 'monokai' },
};
</script>

<template>
  <Viewer v-bind="viewerProps" />
</template>

<style>
/* If syntax highlight is enabled, you should import a theme file, or write it by yourself. */
@import 'json-diff-kit/dist/viewer-monokai.css';
</style>
```

## License

MIT

[npm-url]: https://npmjs.org/package/json-diff-kit-vue
[npm-image]: https://img.shields.io/npm/v/json-diff-kit-vue.svg

[download-badge]: https://img.shields.io/npm/dm/json-diff-kit-vue.svg
