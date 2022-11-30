<template>
  <div v-if="images.length > 0 && teaserImages.length > 0">
    <Teaser
      :images="teaserImages"
      :teaser-tab-index="teaserTabindex"
      @open-image="openImage"
      @open-overview="openOverview"
    />
    <Overlay v-if="openOverlay" @close="close">
      <Overview
        v-if="openOverlay === 'overview'"
        :images="images"
        :focus-image-index="overviewFocusImageIndex"
        @open-image="openImage"
      />
      <Carousel
        v-if="openOverlay === 'carousel'"
        :images="images"
        :image="activeImage"
        @open-overview="openOverview"
      />
    </Overlay>
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/config/types';
import { ref, computed } from 'vue';
import Teaser from './Teaser.vue';
import Overlay from './Base/Overlay.vue';
import Overview from './Overview.vue';
import Carousel from './Carousel.vue';
import { getAlbum } from '@/services/rokka';

const props = defineProps({
  albumName: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
});

const album = await getAlbum(props.albumName, props.organization);

const { images = [], teaserImages = [] } = album || {};

const openOverlay = ref<'overview' | 'carousel' | null>(null);
const activeImage = ref<Image | undefined>();
const overviewFocusImageIndex = ref<number>(0);

const teaserTabindex = computed(() =>
  openOverlay.value === null ? '0' : '-1'
);

const rokkaGalleryCloseEvent = new Event('rokkagallery.close');
const close = () => {
  openOverlay.value = null;
  document.dispatchEvent(rokkaGalleryCloseEvent);
};

const rokkaGalleryOpenEvent = new Event('rokkagallery.open');
const openOverview = (imageIndex: number) => {
  overviewFocusImageIndex.value = imageIndex;
  openOverlay.value = 'overview';
  document.dispatchEvent(rokkaGalleryOpenEvent);
};

const openImage = (image: Image) => {
  activeImage.value = image;
  openOverlay.value = 'carousel';
  document.dispatchEvent(rokkaGalleryOpenEvent);
};
</script>
