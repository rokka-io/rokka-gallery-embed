<template>
  <div>
    <div class="rokka-gallery-teaser--images">
      <ClickableImage
        v-for="(image, index) of images"
        :key="index"
        :image="image"
        :tabindex="teaserTabIndex"
        :title="$t('teaser.showImage')"
        @click="() => emit('openImage', image)"
      />
    </div>
    <div class="rokka-gallery-teaser--footer">
      <Button @click="emit('openOverview')" :tabindex="teaserTabIndex">
        <p>{{ $t('teaser.openOverview') }}</p>
      </Button>
      <a
        href="https://rokka.io"
        target="_blank"
        class="rokka-gallery-base--no-line-break"
        :tabindex="teaserTabIndex"
      >
        {{ $t('teaser.poweredBy') }}
        <Rokka class="rokka-gallery-base--inline-icon" />
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import type { Image } from '@/classes/types';
import ClickableImage from './Base/ClickableImage.vue';
import Rokka from './Icons/Rokka.vue';
import Button from './Base/Button.vue';

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
.rokka-gallery-teaser {
  &--images {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &--footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
