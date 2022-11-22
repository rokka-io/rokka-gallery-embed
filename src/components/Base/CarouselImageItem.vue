<template>
  <div class="autosize-vertical-parent px-4">
    <div class="autosize overflow-hidden rounded-sm bg-gray-400 bg-opacity-10">
      <img
        class="object-contain w-full h-full"
        @dragstart.prevent
        :src="image.url"
        :alt="image.description"
      />
    </div>
    <div class="flex justify-between mt-3 px-2">
      <p class="text-white">{{ image.description }}</p>
      <ExternalLink :to="image.download" :tabindex="downloadButtonTabIndex">
        <p class="text-white">
          <Download class="inline mr-2" />
          {{ $t('gallery.download') }}
        </p>
      </ExternalLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Image } from '@/classes/types';
import type { PropType } from 'vue';
import Download from '../Icons/Download.vue';
import ExternalLink from './ExternalLink.vue';
import '@/base.css';

defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
  downloadButtonTabIndex: {
    type: String,
  },
});
</script>
