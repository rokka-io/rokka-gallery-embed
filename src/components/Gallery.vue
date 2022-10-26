<template>
  <Teaser
    :images="fixedLengthFavouriteImages"
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
</template>
<script setup lang="ts">
import type { Image, RokkaResponse } from '@/classes/types';
import { ref, computed } from 'vue';
import Teaser from './Teaser.vue';
import Overlay from './Base/Overlay.vue';
import Overview from './Overview.vue';
import Carousel from './Carousel.vue';
import { useRokkaAlbum, useRokkaImages } from '@/composables/useRokkaImages';
import { ROKKA_ALBUM_BASE_URL } from '@/constants/constants';

const props = defineProps({
  albumName: {
    type: String,
    required: true,
  },
});

const rokkaResponse: RokkaResponse = await useRokkaAlbum(
  ROKKA_ALBUM_BASE_URL,
  props.albumName
);
const rokkaImages = rokkaResponse.items;
const images: Image[] = useRokkaImages(rokkaImages);
const favouriteImages: Image[] = useRokkaImages(rokkaImages.slice(-3));

// Make sure always four teaser images are available
// Either fills up teaser images with images that aren't favourited
// Or return the first 4 favourite images
const favouriteImageIds = favouriteImages.map((img) => img.id);
const fixedLengthFavouriteImages =
  favouriteImages.length < 4
    ? favouriteImages.concat(
        images
          .filter((img) => !favouriteImageIds.includes(img.id))
          .slice(0, favouriteImages.length - 4)
      )
    : favouriteImages.slice(0, 4);

const openOverlay = ref<'overview' | 'carousel' | null>(null);
const activeImage = ref<Image>();
const overviewFocusImageIndex = ref<Number>(0);

const close = () => (openOverlay.value = null);

const openOverview = (imageIndex: Number) => {
  overviewFocusImageIndex.value = imageIndex;
  openOverlay.value = 'overview';
};

const openImage = (image: Image) => {
  activeImage.value = image;
  openOverlay.value = 'carousel';
};

const teaserTabindex = computed(() =>
  openOverlay.value === null ? '0' : '-1'
);
</script>
