<template>
  <div class="w-full">
    <div class="w-full mb-4 grid grid-cols-4 gap-4">
        <Image
            v-for="image of images.slice(0, 4)"
            :image="image"
            @click="(image) => log(image)"
        />
    </div>
    <div class="w-full flex justify-between">
        <a class="cursor-pointer" @click="galleryIsOpen = true">
            <p>Alle Fotos Anzeigen</p>
        </a>
      <a class="cursor-pointer" target="_blank" href="https://rokka.io">
        <p>powered by <Rokka class="inline ml-1"/></p>
      </a>
    </div>
  </div>
  <div :class="galleryVisibilityClass"
       class="bg-black fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 p-16 bg-opacity-90 overflow-y-auto overscroll-contain">
    <CloseButton @click="galleryIsOpen = false" class="mb-8"/>
    <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
        <Image
            v-for="image of images"
            :image="image"
            @click="(image) => log(image)"
        />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, type PropType, ref, watch } from 'vue';
import type RokkaImage from '@/classes/RokkaImage';
import CloseButton from './Icons/CloseButton.vue'
import Image from './Image.vue'
import Rokka from './Icons/Rokka.vue'


defineProps({
  images: {
    type: Array as PropType<RokkaImage[]>,
    required: true,
  }
});

const log = (d) => console.log(d);

const galleryIsOpen = ref(false)
const galleryVisibilityClass = computed(() => galleryIsOpen.value ? '' : 'hidden')

watch([galleryIsOpen], () => {
  if (galleryIsOpen.value){
    document.getElementsByTagName('body')[0].className = 'overflow-hidden'
  } else {
    document.getElementsByTagName('body')[0].className = ''
  }
})
</script>