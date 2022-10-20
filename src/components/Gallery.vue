<template>
  <Teaser
    :images="teaserImages"
    @open-image="openImage"
    @open-overview="openOverview"
  />
  <Overlay v-if="openOverlay" @close="close">
    <Overview
      v-if="openOverlay === 'overview'"
      :images="images"
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
import type Image from '@/classes/Image';
import { ref, type PropType } from 'vue';
import Teaser from './Teaser.vue';
import Overlay from './Base/Overlay.vue';
import Overview from './Overview.vue';
import Carousel from './Carousel.vue';

const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  favouriteImages: {
    type: Array as PropType<Image[]>,
    required: true,
  }
});

// Make sure always four teaser images are available
// Either Fills up teaser images with images that arent favourited
// Or return the first 4 favourited images
const favouriteImageIds = props.favouriteImages.map(img => img.id);
const teaserImages = props.favouriteImages.length < 4 ?
  props.favouriteImages.concat(
    props.images
      .filter(img => !favouriteImageIds.includes(img.id))
      .slice(0, props.favouriteImages.length-4)
  ) 
  : props.favouriteImages.slice(0, 4);

const openOverlay = ref<'overview' | 'carousel' | null>();
const activeImage = ref<Image>();

const close = () => (openOverlay.value = null);

const openOverview = () => {
  openOverlay.value = 'overview';
};

const openImage = (image: Image) => {
  activeImage.value = image;
  openOverlay.value = 'carousel';
};
</script>
