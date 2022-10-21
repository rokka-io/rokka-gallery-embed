<template>
  <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
    <ClickableImage
      v-for="(image, index) of images"
      :key="index"
      :id="useImageHtmlId(index)"
      :image="image"
      tabindex="0"
      @click="(image) => emit('openImage', image)"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, type PropType } from 'vue';
import type Image from '@/classes/Image';
import ClickableImage from './Base/ClickableImage.vue';

const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  focusImageIndex: {
    type: Number,
  },
});

onMounted(() => {
  if (props.focusImageIndex) {
    document.getElementById(`image-${props.focusImageIndex}`)?.focus();
  }
});

const useImageHtmlId = (index: Number) => (`image-${index}`)
const emit = defineEmits(['openImage']);
</script>
