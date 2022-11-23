<template>
  <div>
    <div class="rokka-gallery-teaser--preview-images">
      <ClickableImage
        v-for="(image, index) of images"
        :key="index"
        :image="image"
        :tabindex="teaserTabIndex"
        @click="(image) => emit('openImage', image)"
      />
    </div>
    <div class="rokka-gallery-base--space-between">
      <Clickable @click="emit('openOverview')" :tabindex="teaserTabIndex">
        <p>{{ $t('teaser.openOverview') }}</p>
      </Clickable>
      <ExternalLink to="https://rokka.io" :tabindex="teaserTabIndex">
        <p>{{ $t('teaser.poweredBy') }}<Rokka class="rokka-gallery-base--inline-icon" /></p>
      </ExternalLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import type { Image } from '@/classes/types';
import ClickableImage from './Base/ClickableImage.vue';
import Rokka from './Icons/Rokka.vue';
import Clickable from './Base/Clickable.vue';
import ExternalLink from './Base/ExternalLink.vue';

defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  teaserTabIndex: {
    type: String,
    default: '0',
  },
});

const emit = defineEmits(['openImage', 'openOverview']);
</script>
<style lang="scss">
.rokka-gallery {
  &-teaser {
    &--preview-images {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;

      margin-bottom: 16px;
    }
  }
} 
</style>
