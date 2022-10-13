<template>
  <div class="flex items-center h-full w-full">
    <div class="mx-4">
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
      <InnerCarousel v-model="currentSlide" :images="images" />
    </div>
    <div class="mx-4">
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
import InnerCarousel from './InnerCarousel.vue';

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

const currentSlide = ref(0);

const imageIndex = (needleImage: Image) =>
  props.images.findIndex((image) => image.id === needleImage.id);
watch(props.image, (image) => {
  if (image) currentSlide.value = imageIndex(image);
});
onMounted(() => (currentSlide.value = imageIndex(props.image)));

const prev = () => currentSlide.value--;
const next = () => currentSlide.value++;
</script>
