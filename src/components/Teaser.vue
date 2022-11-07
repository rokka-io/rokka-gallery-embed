<template>
  <div class="w-full">
    <div class="w-full mb-4 grid grid-cols-4 gap-4">
      <ClickableImage
        v-for="(image, index) of images"
        :key="index"
        :image="image"
        :tabindex="teaserTabIndex"
        @click="(image) => emit('openImage', image)"
      />
    </div>
    <div class="w-full flex justify-between">
      <Clickable @click="emit('openOverview')" :tabindex="teaserTabIndex">
        <p>{{ $t('teaser.openOverview') }}</p>
      </Clickable>
      <ExternalLink to="https://rokka.io" :tabindex="teaserTabIndex">
        <p>{{ $t('teaser.poweredBy') }}<Rokka class="inline ml-2" /></p>
      </ExternalLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import type { Image } from '@/classes/types';
import ClickableImage from './Base/ClickableImage.vue';
import Rokka from './Icons/Rokka.vue';
import Clickable from './Base/Clickable.vue';
import ExternalLink from './Base/ExternalLink.vue';

defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
  teaserTabIndex: {
    type: String,
    default: '0',
  },
});

const emit = defineEmits(['openImage', 'openOverview']);
</script>
