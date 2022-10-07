<template>
  <div class="w-full">
    <div class="w-full mb-4 grid grid-cols-4 gap-4">
      <Image
        v-for="(image, index) of images.slice(0, 4)"
        :key="index"
        :image="image"
        @click="(image) => log(image)"
      />
    </div>
    <div class="w-full flex justify-between">
      <a class="cursor-pointer" @click="overlayIsActive = true">
        <p>Alle Fotos Anzeigen</p>
      </a>
      <a class="cursor-pointer" target="_blank" href="https://rokka.io">
        <p>powered by <Rokka class="inline ml-1" /></p>
      </a>
    </div>
    <Overlay
        :class="overlayVisibilityClass"
        @close-overlay="overlayIsActive = false"
    >
      <ImageOverview :images="images" @click-on-image="(image) => log(image)" />

      <!-- TODO: Implement Carousel here -->
    </Overlay>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, type PropType, ref, watch } from 'vue';
import type RokkaImage from '@/classes/RokkaImage';
import Image from './Image.vue';
import Rokka from './Icons/Rokka.vue';
import Overlay from '@/components/Overlay.vue';
import ImageOverview from "@/components/ImageOverview.vue";

defineProps({
  images: {
    type: Array as PropType<RokkaImage[]>,
    required: true,
  },
});

const log = (d) => console.log(d);

const overlayIsActive = ref(false);
const overlayVisibilityClass = computed(() =>
    overlayIsActive.value ? '' : 'hidden'
);

watch([overlayIsActive], () => {
  if (overlayIsActive.value) {
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
  } else {
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
  }
});
</script>
