<template>
  <Suspense>
    <Gallery
      :organization="organization.trim()"
      :album-name="album.trim()"
      class="rokka-gallery"
    />
  </Suspense>
</template>

<script setup lang="ts">
import '@/scss/base.scss';
import Gallery from './components/Gallery.vue';

defineProps({
  organization: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
});
</script>
