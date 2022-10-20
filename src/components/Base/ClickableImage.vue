<template>
  <Clickable
    @click="emit('click', image)"
    @keydown.enter="emit('click', image)"
  >
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
import type Image from '@/classes/Image';
import type { PropType } from 'vue';
import Clickable from './Clickable.vue';

defineProps({
  image: {
    type: Object as PropType<Image>,
    required: true,
  },
});

const emit = defineEmits(['click']);
</script>
