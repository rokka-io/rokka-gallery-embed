<template>
  <Suspense>
    <div class="rokka-gallery rokka-gallery-app--container">
      <Gallery :organization="org" :album-name="album" />
    </div>
  </Suspense>
</template>
<script setup lang="ts">
import '@/scss/base.scss';
import Gallery from './components/Gallery.vue';

defineProps({
  org: {
    type: String,
    required: true,
  },
  album: {
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
      padding-top: 16px;
    }
  }
}
</style>
