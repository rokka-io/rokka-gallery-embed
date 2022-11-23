<template>
  <div class="rokka-gallery-overview--image-grid">
    <ClickableImage
      v-for="(image, index) of images"
      :key="index"
      :ref="
        (el) => {
          imagesRef[index] = el;
        }
      "
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

const imagesRef = ref<InstanceType<typeof ClickableImage>[] | []>([]);

onMounted(() => {
  if (props.focusImageIndex) {
    imagesRef.value.at(props.focusImageIndex).clickableImage.$el.focus();
  }
});

const emit = defineEmits(['openImage']);
</script>
<style lang="scss">
@import '@/mediaqueries.scss';

.rokka-gallery {
  &-overview {
    &--image-grid {
      display: grid;
      gap: 16px;

      grid-template-columns: repeat(2, minmax(0, 1fr));
      @include screen-md {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      @include screen-lg {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  }
}
</style>
