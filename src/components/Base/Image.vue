<template>
  <Clickable @click="emit('click', image)">
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
import type RokkaImage from '@/classes/RokkaImage';
import type { PropType } from 'vue';
import Clickable from './Clickable.vue';

defineProps({
  image: {
    type: Object as PropType<RokkaImage>,
    required: true,
  },
});

const emit = defineEmits(['click']);
</script>
