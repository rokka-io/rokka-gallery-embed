<template>
  <Suspense>
    <div class="rokka-gallery rokka-gallery-app--container">
      <Gallery :organization="organization" :album-name="albumName" />
    </div>
  </Suspense>
</template>
<script setup lang="ts">
import '@/scss/reset.scss';
import '@/scss/base.scss';
import Gallery from './components/Gallery.vue';

defineProps({
  organization: {
    type: String,
    required: true,
  },
  albumName: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss">
.rokka-gallery {
  &-app {
    &--container {
      margin-top: 16px;
      margin-bottom: 32px;
    }
  }
}
</style>
