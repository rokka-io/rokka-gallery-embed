<template>
  <a
    @click.capture="$emit('click')"
    @keydown.enter.capture="$emit('click')"
    class="pointer"
  >
    <slot></slot>
  </a>
</template>
<script setup lang="ts">
import '@/base.css'
</script>
