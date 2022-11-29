<template>
  <Suspense>
    <div class="rokka-gallery">
      <Gallery :organization="organization" :album-name="album" />
    </div>
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
  lang: {
    type: String,
    required: false,
  },
});

const { availableLocales, locale } = useI18n();
onBeforeMount(() => {
  if (props.lang && availableLocales.includes(props.lang)) {
    locale.value = props.lang;
  }
});
</script>
