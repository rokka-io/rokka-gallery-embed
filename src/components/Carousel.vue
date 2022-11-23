<template>
  <div
    class="rokka-gallery-flex--autosize-parent rokka-gallery-carousel--parent"
  >
    <div class="rokka-gallery-carousel--nav-arrow">
      <Clickable @click="prev">
        <Left />
      </Clickable>
    </div>
    <div
      class="rokka-gallery-flex--autosize rokka-gallery-flex--autosize-vertical-parent"
    >
      <div class="rokka-gallery-carousel--back-to-overview">
        <Clickable
          @click="emit('openOverview', currentImageIndex)"
          tabindex="0"
        >
          <p>
            <Back class="rokka-gallery-base--inline-icon" />
            {{ $t('gallery.openOverview') }}
          </p>
        </Clickable>
      </div>
      <CarouselWithFixedHeight
        ref="carousel"
        :items="images"
        :initial-item="initialSlide"
        class="rokka-gallery-flex--autosize"
      >
        <template #slide="{ item }: { item: Image }">
          <CarouselImageItem
            :image="item"
            :download-button-tab-index="downloadButtonTabIndex(item)"
          />
        </template>
      </CarouselWithFixedHeight>
    </div>
    <div class="rokka-gallery-carousel--nav-arrow">
      <Clickable @click="next">
        <Right />
      </Clickable>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import type { PropType } from 'vue';
import Clickable from './Base/Clickable.vue';
import Right from './Icons/Right.vue';
import Left from './Icons/Left.vue';
import type { Image } from '@/classes/types';
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
const initialSlide = imageIndex(props.image);

onMounted(() => {
  document.addEventListener('keydown', eventListener);
});

onUnmounted(() => {
  document.removeEventListener('keydown', eventListener);
});

const eventListener = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    next();
  }
  if (event.key === 'ArrowLeft') {
    prev();
  }
};

const carousel = ref(null);
const currentImageIndex = computed(() => carousel.value.currentSlide());
const prev = () => carousel.value.prev();
const next = () => carousel.value.next();
const downloadButtonTabIndex = (item) =>
  carousel.value?.currentSlide() === props.images.indexOf(item) ? '0' : '-1';
</script>
<style lang="scss">
@import '@/scss/mediaqueries.scss';

.rokka-gallery {
  &-carousel {
    &--parent {
      align-items: center;
    }
    &--nav-arrow {
      @include screen-md {
        margin-left: 16px;
        margin-right: 16px;
      }
    }
    &--back-to-overview {
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 16px;
    }
  }
}
</style>
