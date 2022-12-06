<template>
  <Suspense>
    <Gallery
      :organization="organization"
      :album-name="album"
      class="rokka-gallery"
    />
  </Suspense>
</template>

<script setup lang="ts">
import '@/scss/base.scss';
import Gallery from './components/Gallery.vue';
import { onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
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
