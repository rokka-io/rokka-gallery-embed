<template>
  <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
    <ClickableImage
      v-for="(image, index) of images"
      :key="index"
      :ref="el => imagesRef[index] = el"
      :image="image"
      tabindex="0"
      @click="(image) => emit('openImage', image)"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, type PropType, ref } from 'vue';
import type { Image } from '@/classes/types';
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

const imagesRef: InstanceType<typeof ClickableImage>[] = [];

onMounted(() => {
  if (props.focusImageIndex) {
    imagesRef[props.focusImageIndex].clickableImage.$el.focus();
  }
});

const emit = defineEmits(['openImage']);
</script>
