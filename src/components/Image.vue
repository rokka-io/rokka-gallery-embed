<template>
    <a @click="emit('click', image)">
        <div class="aspect-image cursor-pointer">
            <img
                class="object-cover w-full h-full"
                :src="image.url"
                :alt="image.description"
            />
        </div>
    </a>
</template>
<script lang="ts" setup>
import type RokkaImage from '@/classes/RokkaImage';
import type { PropType } from 'vue';
defineProps({
    image: {
        type: Object as PropType<RokkaImage>,
        required: true,
    }
})

const emit =  defineEmits(['click']);
</script>