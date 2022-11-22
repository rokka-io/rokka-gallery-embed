<template>
  <a class="pointer" target="_blank" :href="to">
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
import '@/base.css';

defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
