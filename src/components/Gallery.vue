<template>
  <Teaser
    :images="images"
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
    /> </Overlay
  >
</template>
<script setup lang="ts">
import type Image from '@/classes/Image';
import { ref, type PropType } from 'vue';
import Teaser from './Teaser.vue';
import Overlay from './Base/Overlay.vue';
import Overview from './Overview.vue';
import Carousel from './Carousel.vue';

defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
});

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
