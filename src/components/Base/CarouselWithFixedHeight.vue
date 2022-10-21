<template>
  <div
    class="flex-auto relative"
    ref="sizer"
    :style="{ '--slider-height': `${imageHeight}px` }"
  >
    <div class="absolute w-full">
      <Flicking ref="slider" :options="options">
        <div
          class="w-full h-[var(--slider-height)]" 
          v-for="(item, index) of items" :key="index"
        >
          <slot name="slide" :item="item"></slot>
        </div>
      </Flicking>
    </div>
  </div>
</template>
<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking';
import "@egjs/vue3-flicking/dist/flicking.css";
import { ref, computed, onMounted, onUnmounted, type PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<any>,
    required: true,
  },
  currentItem: {
    type: Number,
    required: true,
  }
});


const options = {
  circular: true,
  panelsPerView: 1,
  moveType: 'snap',
  deceleration: 0.25,
  defaultIndex: props.currentItem,
  autoResize: true,
  resizeDebounce: 100,
  maxResizeDebounce: 300,
  autoInit: true,
}

const slider = ref(null);
const prev = () => !slider.value.animating ? slider.value.prev() : null;
const next = () => !slider.value.animating ? slider.value.next() : null;
defineExpose({prev, next});

// Read height out from Parent container
// div is "empty" since child is absolute
// so it takes up the max space available
const imageHeight = ref(0);
const sizer = ref(null);
const setSize = () => (imageHeight.value = sizer.value?.clientHeight);

onMounted(() => setSize() && addEventListener('resize', setSize));
onUnmounted(() => removeEventListener('resize', setSize));
</script>
