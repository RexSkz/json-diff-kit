<script setup lang="ts">
import { Differ } from '@json-diff-kit/differ/src';

import { ViewerProps } from '../lib/types';
import Viewer from '../lib/viewer.vue';

const differ = new Differ({
  detectCircular: false,
  maxDepth: Infinity,
  showModifications: true,
  arrayDiffMethod: 'lcs',
  ignoreCase: false,
  recursiveEqual: true,
});

const viewerCommonProps: Partial<ViewerProps> = {
  indent: 2,
  lineNumbers: true,
  highlightInlineDiff: true,
  inlineDiffOptions: {
    mode: 'word',
    wordSeparator: ' ',
  },
  hideUnchangedLines: true,
  syntaxHighlight: { theme: 'monokai' },
  // virtual: false,
};

const before1 = {
  a: 1,
  b: 2,
  d: [1, 5, 4],
  e: ['1', 2, { f: 3, g: null, h: [5], i: [] }, 9],
  m: [],
  q: 'JSON diff can\'t be possible',
  r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  s: 1024,
};
const after1 = {
  b: 2,
  c: 3,
  d: [1, 3, 4, 6],
  e: ['1', 2, 3, { f: 4, g: false, i: [7, 8] }, 10],
  j: { k: 11, l: 12 },
  m: [
    { n: 1, o: 2 },
    { p: 3 },
  ],
  q: 'JSON diff is possible!',
  r: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed quasi architecto beatae incididunt ut labore et dolore magna aliqua.',
  s: '1024',
};
const diff1 = differ.diff(before1, after1);

const before2 = [2, 4, 3];
const after2 = [2, 5, 4, 3, 1];
const diff2 = differ.diff(before2, after2);

const before3 = { a: 1, b: [2] };
const after3 = 666;
const diff3 = differ.diff(before3, after3);

const before4 = 233;
const after4 = 666;
const diff4 = differ.diff(before4, after4);

const before5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
const after5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 99, 10, 11, 12, 13, 14, 15, 16, 17, 1818, 1919, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
const diff5 = differ.diff(before5, after5);

const before6 = [
  { text: 'hello world' },
];
const after6 = [
  { text: 'above' },
  { text: 'hello world' },
  { text: 'below' },
];
const diff6 = differ.diff(before6, after6);

const before7 = {
  a: undefined,
  b: 123n,
  c: {
    c1: Symbol('foo'),
    c2: Symbol('bar'),
  },
  d: () => alert(1),
  e: Infinity,
  f: NaN,
  h: [undefined, 123n, Symbol('foo'), Symbol('bar'), () => alert(1), Infinity, NaN, -Infinity],
};
const after7 = {
  a: undefined,
  b: 123n,
  c: {
    c1: Symbol('foo'),
    c3: Symbol('baz'),
  },
  d: () => alert(2),
  e: Infinity,
  f: NaN,
  g: -Infinity,
  h: [undefined, 123n, Symbol('foo'), Symbol('baz'), () => alert(2), Infinity, NaN, -Infinity],
};
const diff7 = differ.diff(before7, after7);
</script>

<template>
  <div class="demo-root">
    <h1>JSON Diff Kit Viewer (Vue)</h1>
    <div class="statistics">
      <img src="https://img.shields.io/npm/v/json-diff-kit.svg" />
      <img src="https://img.shields.io/npm/dm/json-diff-kit.svg" />
      <img src="https://codecov.io/gh/RexSkz/json-diff-kit/branch/master/graph/badge.svg?token=8YRG3M4WTO" />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=rexskz&repo=json-diff-kit&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="150"
        height="20"
        title="GitHub"
      />
    </div>
    <p>The Vue version of <code>Viewer</code> used by <code>json-diff-kit</code>.</p>
    <div class="diff-result">
      <h2>Examples</h2>
      <p>An regular example with 2 objects.</p>
      <Viewer :diff="diff1" v-bind="viewerCommonProps" />
      <p>An example with 2 arrays.</p>
      <Viewer :diff="diff2" v-bind="viewerCommonProps" />
      <p>2 variables with different types. The algorithm always returns the result "left is removed, right is added".</p>
      <Viewer :diff="diff3" v-bind="viewerCommonProps" />
      <p>2 variables with the same primitive type. The algorithm always returns the result "left is modified to right" (if <code>showModification</code> is set to <code>false</code>, it will return the result "left is removed, right is added").</p>
      <Viewer :diff="diff4" v-bind="viewerCommonProps" />
      <p>Most of the lines are equal, only small amount of lines are different. You can use the <code>hideUnchangedLines</code> prop to hide the unchanged parts and make the result shorter. Notice: when the <code>diff</code> prop is changed, the expand status will be reset, it's your responsibility to keep the <code>diff</code> props unchanged (you may want to use <code>useState</code> or <code>useMemo</code>).</p>
      <Viewer :diff="diff5" v-bind="viewerCommonProps" />
      <p>An example for the recursive equal. If the differ option <code>recursiveEqual</code> is set to <code>true</code>, the object items should be treated as equal.</p>
      <Viewer :diff="diff6" v-bind="viewerCommonProps" />
      <p>Sometimes there may be values that can't be serialized to JSON, like <code>undefined</code>, <code>BigInt</code>, <code>Symbol</code>, <code>function</code>, <code>Infinity</code>, <code>-Infinity</code> and <code>NaN</code>. The differ and viewer can handle them correctly.</p>
      <Viewer :diff="diff7" v-bind="viewerCommonProps" />
    </div>
    <div class="demo-footer">Made with ♥ by Rex Zeng</div>
  </div>
</template>

<style>
@import 'json-diff-kit/dist/viewer-monokai.css';

html,
body {
  padding: 0;
  margin: 0;
  background: #f2f4f6;
  font-family: sans-serif;
  font-size: 14px;
}

code {
  padding: 0 4px;
  background: #f9f2f4;
  color: #c7254e;
}

a,
a:visited {
  color: #2196f3;
}

[disabled] {
  cursor: not-allowed;
}
</style>

<style scoped>
.demo-root {
  position: relative;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 1em 2em;
  margin: auto;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.01);

  .statistics {
    img {
      margin-right: 8px;
    }
  }

  p {
    margin: 1em 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

.demo-footer {
  padding: 2em 0;
  border-top: 1px dashed;
  margin: 4em 0 0;
  text-align: center;
}
</style>
