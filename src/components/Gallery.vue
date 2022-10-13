<template>
    <Teaser 
        :images="images" 
        @open-image="setActiveImage"
        @open-overlay="openOverlay"
    />
    <Overlay v-model="isOverlayActive" >
        <Overview
            v-if="!activeImage"
            :images="images" 
            @open-image="setActiveImage" 
        />

        <Carousel
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
import Teaser from "./Teaser.vue";
import Overlay from "./Base/Overlay.vue";
import Overview from "./Overview.vue";
import Carousel from "./Carousel.vue";


defineProps({
    images: {
        type: Array as PropType<RokkaImage[]>,
        required: true,
    }
})

const isOverlayActive = ref(false);
const activeImage = ref<RokkaImage>();

const openOverlay = () => {
    activeImage.value = undefined;
    isOverlayActive.value = true;
}

const setActiveImage = (image: RokkaImage) => {
    activeImage.value = image;
    isOverlayActive.value = true;
}

</script>
