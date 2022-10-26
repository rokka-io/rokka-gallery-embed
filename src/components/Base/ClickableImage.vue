<template>
  <Clickable @click="emit('click', image)" ref="clickableImage">
    <div class="aspect-image">
      <img
        class="object-cover w-full h-full"
        :src="image.url"
        :alt="image.description"
      />
    </div>
  </Clickable>
</template>
<script lang="ts" setup>
import type { Image } from '@/classes/types';
import type { PropType } from 'vue';
import Clickable from './Clickable.vue';
import { ref, defineExpose } from 'vue';

defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
});

const clickableImage = ref<InstanceType<typeof Clickable> | null>(null);
defineExpose({ clickableImage });

const emit = defineEmits(['click']);
</script>
