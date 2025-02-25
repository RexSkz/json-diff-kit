<script setup lang="ts">
import { inject, computed, toRefs } from 'vue';

import type { ViewerProps } from './types';

interface LineProps {
  text: string;
  result: any;
  comma: boolean | undefined;
}

const viewerProps = inject<ViewerProps>('viewerProps')!;
const syntaxHighlightEnabled = computed(() => !!viewerProps.syntaxHighlight);

const props = defineProps<LineProps>();
const { text, result, comma } = toRefs(props);
</script>

<template>
  <template v-for="item in result">
    <template v-if="!item.type && !item.token">
      {{text.slice(item.start, item.end)}}
    </template>
    <span v-else :class="[item.type && `inline-diff-${item.type}`, item.token && `token ${item.token}`]">
      {{text.slice(item.start, item.end)}}
    </span>
  </template>
  <template v-if="comma">
    <span v-if="syntaxHighlightEnabled" class="token punctuation">,</span>
    <template v-else>,</template>
  </template>
</template>
