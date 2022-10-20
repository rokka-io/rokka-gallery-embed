<template>
  <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
    <ClickableImage
      v-for="(image, index) of images"
      :key="index"
      :image="image"
      :tabindex="overviewTabIndex"
      @click="(image) => emit('openImage', image)"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import type Image from '@/classes/Image';
import ClickableImage from './Base/ClickableImage.vue';

defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  overviewTabIndex: {
    type: String,
    default: '0',
  },
});

const emit = defineEmits(['openImage']);
</script>
