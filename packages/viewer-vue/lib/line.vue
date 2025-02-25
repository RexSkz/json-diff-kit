<script setup lang="ts">
import { inject, computed, toRefs, type ComputedRef } from 'vue';
import type { DiffResult, InlineDiffOptions } from '@json-diff-kit/differ/src';

import InlineResult from './inline-result.vue';
import getInlineDiff from './utils/get-inline-diff';
import getInlineSyntaxHighlight from './utils/get-inline-syntax-highlight';
import { mergeSegments } from './utils/segment-util';
import type { ViewerProps } from './types';

const DEFAULT_INDENT = 2;

interface LineProps {
  l: DiffResult;
  r: DiffResult;
}

const viewerProps = inject<ViewerProps>('viewerProps')!;
const highlightInlineDiff = computed(() => viewerProps.highlightInlineDiff);
const indent = computed(() => viewerProps.indent ?? DEFAULT_INDENT);
const syntaxHighlightEnabled = computed(() => !!viewerProps.syntaxHighlight);

const props = defineProps<LineProps>();
const { l, r } = toRefs(props);

const indentChar = computed(() => indent.value === 'tab' ? '\t' : ' ');
const indentSize = computed(() => indent.value === 'tab' ? 1 : indent.value);
const inlineDiffOptions: ComputedRef<InlineDiffOptions> = computed(() => ({
  mode: viewerProps.inlineDiffOptions?.mode || 'char',
  wordSeparator: viewerProps.inlineDiffOptions?.wordSeparator || '',
}));

const inlineDiff = computed(() => {
  return highlightInlineDiff && l.value.type === 'modify' && r.value.type === 'modify'
    ? getInlineDiff(l.value.text, r.value.text, inlineDiffOptions.value)
    : [[], []];
});
const lResult = computed(() => {
  const lTokens = getInlineSyntaxHighlight(syntaxHighlightEnabled.value, l.value.text, 0);
  return mergeSegments(lTokens, inlineDiff.value[0]);
});
const rResult = computed(() => {
  const rTokens = getInlineSyntaxHighlight(syntaxHighlightEnabled.value, r.value.text, 0);
  return mergeSegments(rTokens, inlineDiff.value[1]);
});

const bgLeft = computed(() => l.value.type !== 'equal' ? viewerProps.bgColour?.[l.value.type] ?? '' : '');
const bgRight = computed(() => r.value.type !== 'equal' ? viewerProps.bgColour?.[r.value.type] ?? '' : '');
</script>

<template>
  <tr>
    <td
      v-if="viewerProps.lineNumbers"
      :class="`line-${l.type} line-number`"
      :style="{ backgroundColor: bgLeft }"
    >
      {{l.lineNumber}}
    </td>
    <td :class="`line-${l.type}`" :style="{ backgroundColor: bgLeft }">
      <pre>{{l.text && indentChar.repeat(l.level * indentSize)}}<InlineResult :text="l.text" :result="lResult" :comma="l.comma" /></pre>
    </td>
    <td
      v-if="viewerProps.lineNumbers"
      :class="`line-${r.type} line-number`"
      :style="{ backgroundColor: bgRight }"
    >
      {{r.lineNumber}}
    </td>
    <td :class="`line-${r.type}`" :style="{ backgroundColor: bgRight }">
      <pre>{{r.text && indentChar.repeat(r.level * indentSize)}}<InlineResult :text="r.text" :result="rResult" :comma="r.comma" /></pre>
    </td>
  </tr>
</template>
