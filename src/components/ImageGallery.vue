<template>
  <div class="w-full">
    <div class="w-full mb-4 grid grid-cols-4 gap-4">
      <div
          class="aspect-image"
          v-for="image of images.slice(0, 4)"
      >
        <img
            class="object-cover w-full h-full"
            :src="image.url"
            :alt="image.description"
        />
      </div>
    </div>
    <div class="w-full flex justify-between">
      <div @click="galleryIsOpen = true">
        <p><a>Alle Fotos Anzeigen</a></p>
      </div>
      <div>
        <p>powered by <b>ROKKA</b></p>
      </div>
    </div>
  </div>
  <div :class="galleryVisibilityClass"
       class="bg-black fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 p-16 opacity-90">
    <CloseButton @click="galleryIsOpen = false" class="mb-8"/>
    <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
      <div
          class="aspect-image"
          v-for="image of images"
      >
        <img
            class="object-cover w-full h-full"
            :src="image.url"
            :alt="image.description"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, type PropType, ref } from 'vue';
import CloseButton from './Icons/CloseButton.vue'

export interface RokkaImage {
  url: string;
  description: string;
}

defineProps({
  images: {
    type: Object as PropType<RokkaImage[]>,
    required: true,
  }
});

const galleryIsOpen = ref(false)
const galleryVisibilityClass = computed(() => galleryIsOpen.value ? '' : 'hidden')

</script>