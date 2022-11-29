<template>
  <div class="rokka-gallery-overlay--overlay">
    <div class="rokka-gallery-flex--autosize-vertical-parent">
      <div class="rokka-gallery-overlay--close-button">
        <Button @click="emit('close')">
          <Close />
        </Button>
      </div>
      <div
        class="rokka-gallery-flex--autosize rokka-gallery-overlay--overflow-y-auto"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, onMounted, onUnmounted } from 'vue';
import Close from '@/components/Icons/Close.vue';
import Button from './Button.vue';

const emit = defineEmits(['close']);

onMounted(() => {
  document.addEventListener('keydown', eventListener);
});

onUnmounted(() => {
  document.removeEventListener('keydown', eventListener);
});

const eventListener = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};
</script>
<style lang="scss">
@import '@/scss/mediaqueries.scss';

.rokka-gallery {
  &-overlay {
    &--overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      z-index: 999999999;
      background-color: rgb(0 0 0 / 0.95);
      // Make all text inside overlay white
      color: rgb(255, 255, 255);

      padding: 16px;
      padding-bottom: 48px;
      @include screen-md {
        padding: 48px;
        padding-bottom: 80px;
      }
    }

    &--close-button {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 32px;
    }

    &--overflow-y-auto {
      overflow-y: auto;
    }
  }
}
</style>
