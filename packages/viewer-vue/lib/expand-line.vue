<script setup lang="ts">
import { computed, inject, toRefs } from 'vue';

import type { ViewerProps } from './types';
import { HiddenUnchangedLinesInfo } from './utils/get-segments';

const DEFAULT_EXPAND_MORE_LINES_LIMIT = 20;

interface SegmentProps {
  segment: HiddenUnchangedLinesInfo;
  index: number;
}

const viewerProps = inject<ViewerProps>('viewerProps')!;
const hideUnchangedLines = computed(() => viewerProps.hideUnchangedLines ?? false);

const props = defineProps<SegmentProps>();
const { segment, index } = toRefs(props);

const emit = defineEmits<{
  (e: 'expandBefore', index: number, lines: number): void
  (e: 'expandAfter', index: number, lines: number): void
  (e: 'expandAll', index: number): void
}>();

const expandMoreLinesLimit = computed(() => {
  return typeof hideUnchangedLines.value === 'boolean'
    ? DEFAULT_EXPAND_MORE_LINES_LIMIT
    : hideUnchangedLines.value.expandMoreLinesLimit || DEFAULT_EXPAND_MORE_LINES_LIMIT;
});

const onExpandBefore = (segmentIndex: number) => (lines: number) => {
  emit('expandBefore', segmentIndex, lines);
};

const onExpandAfter = (segmentIndex: number) => (lines: number) => {
  emit('expandAfter', segmentIndex, lines);
};

const onExpandAll = (segmentIndex: number) => () => {
  emit('expandAll', segmentIndex);
};
</script>

<template>
  <tr class="expand-line">
    <td
      :colspan="4"
      :class="{ 'has-lines-before': segment.hasLinesBefore, 'has-lines-after': segment.hasLinesAfter }"
    >
      <slot name="expand-line" v-if="$slots.expandLine" :has-line-before="segment.hasLinesBefore"
        :has-line-after="segment.hasLinesAfter" />
      <template v-else>
        <button v-if="segment.hasLinesBefore" @click="()=> onExpandBefore(index)(expandMoreLinesLimit)">
          ⭡ Show {{expandMoreLinesLimit}} lines before
        </button>
        <button @click="()=> onExpandAll(index)()">
          ⭥ Show all unchanged lines
        </button>
        <button v-if="segment.hasLinesAfter" @click="()=> onExpandAfter(index)(expandMoreLinesLimit)">
          ⭣ Show {{expandMoreLinesLimit}} lines after
        </button>
      </template>
    </td>
  </tr>
</template>
