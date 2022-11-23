<template>
  <Suspense>
    <Gallery :organization="org" :album-name="album" />
  </Suspense>
</template>
<script setup lang="ts">
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
