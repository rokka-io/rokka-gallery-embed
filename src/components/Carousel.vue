<template>
  <div class="flex items-center h-full w-full">
    <div class="md:mx-4">
      <Clickable @click="prev">
        <Left />
      </Clickable>
    </div>
    <div class="flex-auto flex flex-col h-full">
      <div class="mb-4 px-4">
        <Clickable @click="emit('openOverview')">
          <p class="text-white">
            <Back class="inline mr-2" />
            {{ $t('gallery.openOverview') }}
          </p>
        </Clickable>
      </div>
      <CarouselWithFixedHeight
        ref="carousel"
        :items="images"
        :current-item="currentSlide"
      >
        <template #slide="{ item }: { item: Image }">
          <CarouselImageItem :image="item" />
        </template>
      </CarouselWithFixedHeight>
    </div>
    <div class="md:mx-4">
      <Clickable @click="next">
        <Right />
      </Clickable>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { PropType } from 'vue';
import Clickable from './Base/Clickable.vue';
import Right from './Icons/Right.vue';
import Left from './Icons/Left.vue';
import type Image from '@/classes/Image';
import Back from './Icons/Back.vue';
import CarouselImageItem from './Base/CarouselImageItem.vue';
import CarouselWithFixedHeight from './Base/CarouselWithFixedHeight.vue';

const emit = defineEmits(['openOverview']);
const props = defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  image: {
    type: Object as PropType<Image>,
    default: null,
  },
});

const imageIndex = (needleImage: Image) =>
  props.images.findIndex((image) => image.id === needleImage.id);
const currentSlide = imageIndex(props.image);

watch(props.image, (image) => {
  if (image) currentSlide.value = imageIndex(image);
});
onMounted(() => (currentSlide.value = imageIndex(props.image)));

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
      next()
    }
    if (event.key === 'ArrowLeft'){
      prev()
    }
  });
});

const carousel = ref(null);
const prev = () => carousel.value.prev();
const next = () => carousel.value.next();
</script>
