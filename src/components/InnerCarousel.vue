<template>
  <div
    class="flex-auto relative"
    ref="sizer"
    :style="{ '--slider-height': `${imageHeight}px` }"
  >
    <div class="absolute w-full">
      <Carousel v-model="currentSlide" :wrap-around="true">
        <Slide v-for="(image, index) of images" :key="index">
          <div class="flex flex-col w-full h-[var(--slider-height)] px-2">
            <div
              class="flex-auto overflow-hidden rounded-sm bg-gray-400 bg-opacity-10"
            >
              <img
                class="object-contain w-full h-full"
                :src="image.url"
                :alt="image.description"
              />
            </div>
            <div class="flex-shrink-0 flex justify-between mt-3 px-2">
              <p class="text-white">{{ image.description }}</p>
              <ExternalLink :to="`${image.url}?download`">
                <p class="text-white">
                  <Download class="inline mr-2" />
                  {{ $t('gallery.download') }}
                </p>
              </ExternalLink>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import type { PropType } from 'vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type Image from '@/classes/Image';
import Download from './Icons/Download.vue';
import ExternalLink from './Base/ExternalLink.vue';

const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  modelValue: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(['update:modelValue']);

const currentSlide = computed({
  set: (slide) => emit('update:modelValue', slide),
  get: () => props.modelValue,
});

// Read height out from Parent container
// div is "empty" since child is absolute
// so it takes up the max space available
const imageHeight = ref(0);
const sizer = ref(null);
const setSize = () => (imageHeight.value = sizer.value?.clientHeight);

onMounted(() => setSize() && addEventListener('resize', setSize));
onUnmounted(() => removeEventListener('resize', setSize));
</script>
