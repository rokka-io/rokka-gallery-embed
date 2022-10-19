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
      <CarouselWithFixedHeight v-model="currentSlide" :items="images">
        <template #slide="{ item } : { item: Image }">
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

const currentSlide = ref(0);
watch(props.image, (image) => {
  if (image) currentSlide.value = imageIndex(image);
});
onMounted(() => (currentSlide.value = imageIndex(props.image)));

const prev = () => currentSlide.value--;
const next = () => currentSlide.value++;
</script>
