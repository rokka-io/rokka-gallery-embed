<template>
  <div class="rokka-gallery-teaser--container">
    <div class="rokka-gallery-teaser--images">
      <ClickableImage
        v-for="(image, index) of images"
        :key="index"
        :src="image.teaserSrc"
        :srcset="image.teaserSrcset"
        :alt="image.description"
        sizes="25vw"
        :tabindex="teaserTabIndex"
        :title="$t('teaser.showImage')"
        @click="() => emit('openImage', image)"
      />
    </div>
    <div class="rokka-gallery-teaser--footer">
      <Button @click="emit('openOverview')" :tabindex="teaserTabIndex">
        {{ $t('teaser.openOverview') }}
      </Button>
      <a
        href="https://rokka.io"
        target="_blank"
        class="rokka-gallery-teaser--attribution"
        :tabindex="teaserTabIndex"
        :title="$t('teaser.attribution')"
      >
        <span>{{ $t('teaser.poweredBy') }}</span>
        <Rokka aria-hidden="true" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import type { Image } from '@/config/types';
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

  &--attribution {
    display: flex;
    align-items: center;
    font-size: 0.75rem;

    > svg {
      flex-shrink: 0;
      margin-left: 0.5rem;
    }
  }
}
</style>
