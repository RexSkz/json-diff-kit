<script setup lang="ts">
import { provide, ref, computed } from 'vue';

import Segment from './segment.vue';
import getSegments from './utils/get-segments';
import { ViewerProps } from './types';

const props = withDefaults(defineProps<ViewerProps>(), {
  texts: () => ({
    noChangeDetected: 'No change detected',
  }),
});
provide('viewerProps', props);

const linesLeft = computed(() => props.diff[0]);
const linesRight = computed(() => props.diff[1]);
const jsonsAreEqual = computed(() => (
  linesLeft.value.length === linesRight.value.length &&
  linesLeft.value.every(item => item.type === 'equal') &&
  linesRight.value.every(item => item.type === 'equal')
));
const lineNumberWidth = computed(() => props.lineNumbers ? `calc(${String(linesLeft.value.length).length}ch + 16px)` : 0);
const hideUnchangedLines = computed(() => props.hideUnchangedLines ?? false);

const segments = ref(getSegments(linesLeft.value, linesRight.value, hideUnchangedLines.value, jsonsAreEqual.value));

const onExpandBefore = (segmentIndex: number, lines: number) => {
  const { start, end } = segments.value[segmentIndex];
  segments.value[segmentIndex].end = Math.max(end - lines, start);
  if (segmentIndex + 1 < segments.value.length - 1) {
    segments.value[segmentIndex + 1].start = Math.max(end - lines, start);
  }
};

const onExpandAfter = (segmentIndex: number, lines: number) => {
  const { start, end } = segments.value[segmentIndex];
  segments.value[segmentIndex].start = Math.min(start + lines, end);
  if (segmentIndex > 1) {
    segments.value[segmentIndex - 1].end = Math.min(start + lines, end);
  }
};

const onExpandAll = (segmentIndex: number) => {
  const { start, end } = segments.value[segmentIndex];
  segments.value[segmentIndex] = {
    start,
    end: start,
    isEqual: true,
  };
  if (segmentIndex + 1 < segments.value.length - 1) {
    segments.value[segmentIndex + 1].start = start;
  } else {
    segments.value[segmentIndex - 1].end = end;
  }
};
</script>

<template>
  <table :class="[
    'json-diff-viewer',
    props.virtual && 'json-diff-viewer-virtual',
    props.syntaxHighlight && `json-diff-viewer-theme-${props.syntaxHighlight.theme || 'monokai'}`,
  ]">
    <colgroup class="measure-line">
      <col v-if="props.lineNumbers" :style="{ width: lineNumberWidth }">
      <col>
      <col v-if="props.lineNumbers" :style="{ width: lineNumberWidth }">
      <col>
    </colgroup>
    <tbody>
      <tr v-if="jsonsAreEqual && hideUnchangedLines" key="message-line" class="message-line">
        <td :colspan="4">
          {mergedTexts.noChangeDetected}
        </td>
      </tr>
      <Segment
        v-else-if="!props.virtual"
        v-for="(segment, index) in segments"
        :segment="segment"
        :index="index"
        :lines-left="linesLeft"
        :lines-right="linesRight"
        :render-start="0"
        :render-end="linesLeft.length"
        @expand-before="onExpandBefore"
        @expand-after="onExpandAfter"
        @expand-all="onExpandAll"
      ></Segment>
      <!-- v-else: render in virtual -->
    </tbody>
  </table>
</template>

<style>
@import 'json-diff-kit/dist/viewer.css';
</style>
