<template>
  <a class="rokka-gallery-base--pointer" target="_blank" :href="to">
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
