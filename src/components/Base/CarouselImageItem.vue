<template>
  <div class="rokka-gallery-carousel-item--parent rokka-gallery-flex--autosize-vertical-parent">
    <div class="rokka-gallery-carousel-item--image-container rokka-gallery-flex--autosize">
      <img
        class="rokka-gallery-carousel-item--image"
        @dragstart.prevent
        :src="image.url"
        :alt="image.description"
      />
    </div>
    <div class="rokka-gallery-carousel-item--caption rokka-gallery-base--space-between">
      <p>{{ image.description }}</p>
      <ExternalLink :to="image.download" :tabindex="downloadButtonTabIndex">
        <p>
          <Download class="rokka-gallery-base--inline-icon" />
          {{ $t('gallery.download') }}
        </p>
      </ExternalLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Image } from '@/classes/types';
import type { PropType } from 'vue';
import Download from '../Icons/Download.vue';
import ExternalLink from './ExternalLink.vue';

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
.rokka-gallery {
  &-carousel-item {
    &--parent {
      padding-left: 16px;
      padding-right: 16px; 
    }
    &--image-container {
      overflow:hidden;
      border-radius: 4px;
      background-color: rgb(255 255 255 / .05);
    }
    &--image {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    &--caption {
      margin-top: 8px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
}
</style>