<template>
  <Suspense>
    <Gallery :organization="organization" :album-name="albumName" />
  </Suspense>
</template>
<script setup lang="ts">
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
