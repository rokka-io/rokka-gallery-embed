<template>
  <div class="w-full">
    <div class="w-full mb-4 grid grid-cols-4 gap-4">
      <ClickableImage
        v-for="(image, index) of images.slice(0, 4)"
        :key="index"
        :image="image"
        @click="(image) => emit('openImage', image)"
      />
    </div>
    <div class="w-full flex justify-between">
      <Clickable @click="emit('openOverview')">
        <p>{{ $t('teaser.openOverview') }}</p>
      </Clickable>
      <ExternalLink to="https://rokka.io">
        <p>{{ $t('teaser.poweredBy') }}<Rokka class="inline ml-2" /></p>
      </ExternalLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';
import type Image from '@/classes/Image';
import ClickableImage from './Base/ClickableImage.vue';
import Rokka from './Icons/Rokka.vue';
import Clickable from './Base/Clickable.vue';
import ExternalLink from './Base/ExternalLink.vue';

defineProps({
  images: {
    type: Array as PropType<Image[]>,
    required: true,
  },
});

const emit = defineEmits(['openImage', 'openOverview']);
</script>
