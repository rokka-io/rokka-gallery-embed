<template>
  <Button @click="emit('click', image)" ref="clickableImage">
    <div class="rokka-gallery-clickable-image--fixed-aspect-ratio">
      <img
        class="rokka-gallery-clickable-image--cover-parent"
        :src="image.url"
        :alt="image.description"
      />
    </div>
  </Button>
</template>
<script lang="ts" setup>
import type { Image } from '@/classes/types';
import type { PropType } from 'vue';
import Button from './Button.vue';
import { ref, defineExpose } from 'vue';

defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
});

const clickableImage = ref<InstanceType<typeof Button> | null>(null);
defineExpose({ clickableImage });

const emit = defineEmits(['click']);
</script>
<style lang="scss">
.rokka-gallery {
  &-clickable-image {
    &--fixed-aspect-ratio {
      aspect-ratio: 14 / 9;
    }

    &--cover-parent {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
