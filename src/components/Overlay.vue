<template>
  <div class="bg-black fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 p-16 bg-opacity-90 overflow-y-auto overscroll-contain">
    <CloseButton @click="$emit('closeOverlay')" class="mb-8" />
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type RokkaImage from "@/classes/RokkaImage";
import CloseButton from "@/components/Icons/CloseButton.vue";

defineProps({
  images: {
    type: Array as PropType<RokkaImage[]>,
    required: true,
  },
});
</script>
