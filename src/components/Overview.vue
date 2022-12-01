<template>
  <div class="rokka-gallery-overview--image-grid">
    <ClickableImage
      v-for="(image, index) of images"
      :key="index"
      :ref="(el: any) => imagesRef[index] = el"
      :src="image.teaserSrc"
      :srcset="image.teaserSrcset"
      :alt="image.description"
      sizes="25vw"
      tabindex="0"
      @click="() => emit('openImage', image)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, type PropType } from 'vue';
import type { Image } from '@/config/types';
import ClickableImage from './Base/ClickableImage.vue';

const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  focusImageIndex: {
    type: Number,
    default() {
      return 0;
    },
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

<style lang="scss">
@import '@/scss/_mediaqueries.scss';

.rokka-gallery-overview {
  &--image-grid {
    display: grid;
    gap: 1rem;
    padding: 0 1.5rem;

    grid-template-columns: repeat(2, 1fr);
    @include screen-md {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
