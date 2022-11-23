<template>
  <div v-if="!error">
    <Teaser
      :images="teaser"
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
  <Error v-else />
</template>
<script setup lang="ts">
import type { Image } from '@/classes/types';
import { ref, computed } from 'vue';
import Teaser from './Teaser.vue';
import Overlay from './Base/Overlay.vue';
import Overview from './Overview.vue';
import Carousel from './Carousel.vue';
import { useAlbum } from '@/composables/useRokka';
import Error from './Error.vue';

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

const album = await useAlbum(props.albumName, props.organization).catch(() => ({
  images: [],
  teaser: [],
}));
const { images, teaser } = album;

const error = !images.length;

const openOverlay = ref<'overview' | 'carousel' | null>(null);
const activeImage = ref<Image | null>();
const overviewFocusImageIndex = ref<number>(0);

const close = () => (openOverlay.value = null);

const openOverview = (imageIndex: number) => {
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
