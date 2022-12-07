<template>
  <div class="rokka-gallery-overlay--container">
    <div class="rokka-gallery-overlay--header">
      <Button @click="emit('close')" :title="$t('overlay.close')" class="rokka-gallery-overlay--close-button">
        <Close aria-hidden="true" />
      </Button>
    </div>
    <div class="rokka-gallery-overlay--inner-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, onUnmounted } from 'vue';
import Close from '@/components/Icons/Close.vue';
import Button from './Button.vue';

const emit = defineEmits(['close']);

onMounted(() => {
  document.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape);
});

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};
</script>

<style lang="scss">
@import '@/scss/_mediaqueries.scss';

:root {
  --rokka-gallery-overlay--z-index: 1000;
  --rokka-gallery-overlay--bg-color: rgb(0, 0, 0, 0.95);
  --rokka-gallery-overlay--text-color: #ffffff;
}

.rokka-gallery-overlay {
  &--container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    z-index: var(--rokka-gallery-overlay--z-index);
    background-color: var(--rokka-gallery-overlay--bg-color);
    color: var(--rokka-gallery-overlay--text-color);

    padding: 2rem 0;
    @include screen-md {
      padding: 2.5rem 1rem;
    }
  }

  &--header {
    margin-bottom: 1rem;
    text-align: right;
  }

  &--close-button {
    padding: 0 1.5rem;
  }

  &--inner-container {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
