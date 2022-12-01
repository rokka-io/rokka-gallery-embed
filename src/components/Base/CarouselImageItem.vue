<template>
  <div class="rokka-gallery-carousel-image-item--container">
    <div class="rokka-gallery-carousel-image-item--image-container">
      <img
        class="rokka-gallery-carousel-image-item--image"
        @dragstart.prevent
        :src="image.src"
        :srcset="image.srcset"
        sizes="100vw"
        :alt="image.description"
      />
    </div>
    <div class="rokka-gallery-carousel-image-item--footer">
      <a
        :href="image.download"
        :tabindex="downloadButtonTabIndex"
        :title="$t('gallery.downloadImage')"
        class="rokka-gallery-carousel-image-item--download-link"
      >
        <Download aria-hidden="true" />
        <span>{{ $t('gallery.download') }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/config/types';
import type { PropType } from 'vue';
import Download from '../Icons/Download.vue';

defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
  downloadButtonTabIndex: {
    type: String,
  },
});
</script>

<style lang="scss">
.rokka-gallery-carousel-image-item {
  &--container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &--image-container {
    overflow: hidden;
    background-color: rgb(255 255 255 / 0.05);
    height: 100%;
  }

  &--image {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &--footer {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &--download-link {
    > svg {
      flex-shrink: 0;
      margin-right: 0.5rem;
    }
  }
}
</style>
