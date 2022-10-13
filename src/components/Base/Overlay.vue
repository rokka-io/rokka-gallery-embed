<template>
  <div
    class="fixed inset-0 z-10 bg-black bg-opacity-95
    p-4 pb-12 md:p-12 md:pb-20"
  >
    <div class="flex flex-col w-full h-full">
      <div class="flex justify-end pb-8">
        <Clickable @click="emit('close')">
          <Close/>
        </Clickable>
      </div>
      <div class="flex-auto overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'; 
import Close from '@/components/Icons/Close.vue';
import Clickable from './Clickable.vue';

const emit = defineEmits(['close']);
</script>
