<template>
  <div class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
    <Image
        v-for="(image, index) of images"
        :key="index"
        :image="image"
        @click="$emit('clickOnImage', image)"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import type RokkaImage from '@/classes/RokkaImage';
import Image from './Image.vue';

defineProps({
  images: {
    type: Array as PropType<RokkaImage[]>,
    required: true,
  },
});</script>
