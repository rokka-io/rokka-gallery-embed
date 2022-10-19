<template>
  <div
    class="flex-auto relative"
    ref="sizer"
    :style="{ '--slider-height': `${imageHeight}px` }"
  >
    <div class="absolute w-full">
      <Carousel v-model="currentSlide" :wrap-around="true">
        <Slide v-for="(item, index) of items" :key="index">
          <div class="w-full h-[var(--slider-height)]">
            <slot name="slide" :item="item"></slot>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref, computed, onMounted, onUnmounted, type PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<any>,
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
