<script setup lang="ts">
import { computed, toRefs } from 'vue';
import type { DiffResult } from '@json-diff-kit/differ/src';

import { isExpandLine } from './utils/segment-util';
import { HiddenUnchangedLinesInfo, SegmentItem } from './utils/get-segments';
import ExpandLine from './expand-line.vue';
import Line from './line.vue';

interface SegmentProps {
  segment: SegmentItem | HiddenUnchangedLinesInfo;
  index: number;
  linesLeft: DiffResult[];
  linesRight: DiffResult[];
  renderStart: number;
  renderEnd: number;
}

const props = defineProps<SegmentProps>();
const {
  segment,
  index,
  linesLeft,
  linesRight,
  renderStart,
  renderEnd,
} = toRefs(props);

const emit = defineEmits<{
  (e: 'expandBefore', index: number, lines: number): void
  (e: 'expandAfter', index: number, lines: number): void
  (e: 'expandAll', index: number): void
}>();

const start = computed(() => Math.max(segment.value.start, renderStart.value));
const end = computed(() => Math.min(segment.value.end, renderEnd.value));
</script>

<template>
  <template v-if="start === end"><tr><td>Empty Line</td></tr></template>
  <Line
    v-else-if="!isExpandLine(segment)"
    v-for="(_, index) in end - start"
    :key="`line-${start + index}`"
    :l="linesLeft[start + index]"
    :r="linesRight[start + index]"
  />
  <ExpandLine
    v-else
    :key="`expand-line-${index}`"
    :segment="segment"
    :index="index"
    @expand-before="(...args) => emit('expandBefore', ...args)"
    @expand-after="(...args) => emit('expandAfter', ...args)"
    @expand-all="(...args) => emit('expandAll', ...args)"
  />
</template>
