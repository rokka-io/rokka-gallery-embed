<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-10 bg-black bg-opacity-90
    py-12 lg:py-28 xl:py-40 px-8 lg:p-16 xl:px-28"
  >
    <div class="flex flex-col w-full h-full">
      <div class="flex justify-end pb-8">
            <Clickable @click="emit('update:modelValue', false)">
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

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue']);
</script>
