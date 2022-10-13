<template>
    <Preview 
        :images="images" 
        @open-image="setActiveImage"
        @open-overlay="openOverlay"
    />
    <Overlay v-model="isOverlayActive" >
        <ImageOverview
            v-if="!activeImage"
            :images="images" 
            @open-image="setActiveImage" 
        />

        <ImageCarousel
            v-if="activeImage"
            :images="images"
            :image="activeImage"
            @open-overlay="openOverlay"
        />
    </Overlay>
</template>
<script setup lang="ts">
import type RokkaImage from '@/classes/RokkaImage';
import { ref, type PropType } from 'vue';
import Preview from "./Preview.vue";
import Overlay from "./Overlay.vue";
import ImageOverview from "./ImageOverview.vue";
import ImageCarousel from "./ImageCarousel.vue";


defineProps({
    images: {
        type: Array as PropType<RokkaImage[]>,
        required: true,
    }
})

const isOverlayActive = ref(false);
const activeImage = ref<RokkaImage | null>(null);

const openOverlay = () => {
    activeImage.value = null;
    isOverlayActive.value = true;
}

const setActiveImage = (image: RokkaImage) => {
    activeImage.value = image;
    isOverlayActive.value = true;
}

</script>
