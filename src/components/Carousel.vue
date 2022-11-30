<template>
  <div class="rokka-gallery-carousel--container">
    <Button
      @click="prev"
      class="rokka-gallery-carousel--nav-arrow"
      :title="$t('gallery.prev')"
    >
      <Left aria-hidden="true" />
    </Button>
    <div class="rokka-gallery-carousel--inner-container">
      <div class="rokka-gallery-carousel--header">
        <Button
          @click="emit('openOverview', currentImageIndex)"
          class="rokka-gallery-carousel--back-to-overview"
          :title="$t('gallery.backToOverview')"
        >
          <Back aria-hidden="true" />
          <span>{{ $t('gallery.openOverview') }}</span>
        </Button>
      </div>
      <CarouselWithFixedHeight
        ref="carousel"
        :items="images"
        :initial-item="initialSlide"
        class="rokka-gallery-carousel--carousel"
      >
        <template #slide="{ item }: { item: Image }">
          <CarouselImageItem
            :image="item"
            :download-button-tab-index="downloadButtonTabIndex(item)"
          />
        </template>
      </CarouselWithFixedHeight>
    </div>
    <Button
      @click="next"
      class="rokka-gallery-carousel--nav-arrow"
      :title="$t('gallery.next')"
    >
      <Right aria-hidden="true" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import type { PropType } from 'vue';
import Button from './Base/Button.vue';
import Right from './Icons/Right.vue';
import Left from './Icons/Left.vue';
import type { Image } from '@/config/types';
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

const carousel = ref<InstanceType<typeof CarouselWithFixedHeight> | null>();
const currentImageIndex = computed(() => carousel.value?.currentSlide());
const prev = () => carousel.value?.prev();
const next = () => carousel.value?.next();
const downloadButtonTabIndex = (item: Image) =>
  carousel.value?.currentSlide() === props.images.indexOf(item) ? '0' : '-1';
</script>

<style lang="scss">
@import '@/scss/_mediaqueries.scss';

.rokka-gallery-carousel {
  &--container {
    display: flex;
    height: 100%;
    width: 100%;
  }

  &--inner-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &--nav-arrow {
    padding: 1rem;
    flex-shrink: 0;

    @include screen-md {
      padding: 1.5rem;
    }
  }

  &--back-to-overview {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    > svg {
      flex-shrink: 0;
      margin-right: 0.5rem;
    }
  }

  &--carousel {
    flex-grow: 1;
  }
}
</style>
