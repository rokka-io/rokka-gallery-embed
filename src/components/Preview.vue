<template>
  <div class="w-full">
    <div class="w-full mb-4 grid grid-cols-4 gap-4">
      <Image
        v-for="(image, index) of images.slice(0, 4)"
        :key="index"
        :image="image"
        @click="(image) => emit('openImage', image)"
      />
    </div>
    <div class="w-full flex justify-between">
      <InvisibleButton @click="emit('openOverlay')">
        <p>Alle Fotos Anzeigen</p>
      </InvisibleButton>
      <a class="cursor-pointer" target="_blank" href="https://rokka.io">
        <p>powered by <Rokka class="inline ml-1" /></p>
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import type RokkaImage from '@/classes/RokkaImage';
import Image from './Image.vue';
import Rokka from './Icons/Rokka.vue';
import InvisibleButton from './InvisibleButton.vue';

defineProps({
  images: {
    type: Array as PropType<RokkaImage[]>,
    required: true,
  },
});

const emit = defineEmits(['openImage', 'openOverlay'])
</script>
