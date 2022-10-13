<template>
  <InvisibleButton @click="emit('click', image)">
    <div class="aspect-image">
      <img
        class="object-cover w-full h-full"
        :src="image.url"
        :alt="image.description"
      />
    </div>
  </InvisibleButton>
</template>
<script lang="ts" setup>
import type RokkaImage from '@/classes/RokkaImage';
import type { PropType } from 'vue';
import InvisibleButton from './InvisibleButton.vue';

defineProps({
  image: {
    type: Object as PropType<RokkaImage>,
    required: true,
  },
});

const emit = defineEmits(['click']);
</script>
