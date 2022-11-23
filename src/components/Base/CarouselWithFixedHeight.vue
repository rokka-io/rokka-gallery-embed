<template>
  <div ref="sizer" :style="{ '--slider-height': `${imageHeight}px` }">
    <div class="rokka-gallery-carousel-w-fixed-h--sizer">
      <Flicking ref="slider" :options="options">
        <div
          :style="{ height: 'var(--slider-height)' }"
          v-for="(item, index) of items"
          :key="index"
        >
          <slot name="slide" :item="item"></slot>
        </div>
      </Flicking>
    </div>
  </div>
</template>
<script setup lang="ts">
import Flicking, { MOVE_TYPE } from '@egjs/vue3-flicking';
import type { VueFlicking } from '@egjs/vue3-flicking/declaration/types';
import '@egjs/vue3-flicking/dist/flicking.css';
import { ref, onMounted, onUnmounted, type PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<any>,
    required: true,
  },
  initialItem: {
    type: Number,
    required: true,
  },
});

const options = {
  circular: true,
  panelsPerView: 1,
  moveType: MOVE_TYPE.SNAP,
  deceleration: 0.25,
  defaultIndex: props.initialItem,
  autoResize: true,
  resizeDebounce: 100,
  maxResizeDebounce: 300,
  autoInit: true,
};

const slider = ref<VueFlicking | null>();
const prev = () => (!slider.value?.animating ? slider.value?.prev() : null);
const next = () => (!slider.value?.animating ? slider.value?.next() : null);
const currentSlide = () => slider.value?.index;
defineExpose({ prev, next, currentSlide });

// Read height out from Parent container
// div is "empty" since child is absolute
// so it takes up the max space available
const imageHeight = ref<number>(0);
const sizer = ref<HTMLDivElement | null>();
const setSize = () => (imageHeight.value = sizer.value?.clientHeight ?? 0);

onMounted(() => setSize() && addEventListener('resize', setSize));
onUnmounted(() => removeEventListener('resize', setSize));
</script>
<style lang="scss">
.rokka-gallery {
  &-carousel-w-fixed-h {
    &--sizer {
      position: absolute;
      width: 100%;
    }
  }
}
</style>
