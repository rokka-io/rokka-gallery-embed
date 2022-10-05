<template>
    <div class="w-full">
        <div class="w-full mb-4 grid grid-cols-4 gap-4">
            <div
                class="aspect-image"
                v-for="image of images"   
            >
                <img 
                    class="object-cover w-full h-full"
                    :src="image.url"
                    :alt="image.description"
                />
            </div>
        </div>
        <div class="w-full flex justify-between">
            <div>
                <p><a>Alle Fotos Anzeigen</a></p>
            </div>
            <div>
                <p>powered by <b>ROKKA</b></p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, type PropType } from 'vue';

export interface RokkaImage {
    url: string;
    description: string;
} 

defineProps({
    images: {
        type: Object as PropType<RokkaImage[]>,
        required: true,
    }
});
</script>