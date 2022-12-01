<template>
  <Button ref="clickableImage">
    <div class="rokka-gallery-clickable-image--fixed-aspect-ratio">
      <img
        class="rokka-gallery-clickable-image--image"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
        :alt="alt"
        loading="lazy"
      />
    </div>
  </Button>
</template>

<script lang="ts" setup>
import Button from './Button.vue';
import { ref, defineExpose } from 'vue';
import { TEASER_IMAGE_RATIO } from '@/config/constants'; // do not delete! used in <style> block

defineProps({
  src: {
    type: String,
    required: true,
  },
  srcset: {
    type: String,
    required: true,
  },
  sizes: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const clickableImage = ref<InstanceType<typeof Button> | null>(null);
defineExpose({ clickableImage });
</script>

<style lang="scss">
.rokka-gallery-clickable-image {
  &--fixed-aspect-ratio {
    padding-bottom: calc(v-bind('TEASER_IMAGE_RATIO') * 100%);
    position: relative;
  }

  &--image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
