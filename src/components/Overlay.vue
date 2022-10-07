<template>
  <div
    class="bg-black fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 p-8 md:p-16 lg:p-24 bg-opacity-90 overflow-y-auto overscroll-contain"
  >
    <CloseButton @click="$emit('closeOverlay')" class="mb-8 ml-auto" />
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import CloseButton from '@/components/Icons/CloseButton.vue';
</script>
