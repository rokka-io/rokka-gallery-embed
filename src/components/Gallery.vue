<template>
    <Teaser 
        :images="images" 
        @open-image="openImage"
        @open-overview="openOverview"
    />
    <Overlay 
        v-if="openOverlay"
        @close="close"
    >
        <Overview
            v-if="openOverlay === 'overview'"
            :images="images" 
            @open-image="openImage" 
        />

        <Carousel
            v-if="openOverlay === 'carousel'"
            :images="images"
            :image="activeImage"
            @open-overview="openOverview"
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
import { computed } from '@vue/reactivity';


defineProps({
    images: {
        type: Array as PropType<RokkaImage[]>,
        required: true,
    }
})


const activeImage = ref<RokkaImage>();

const isOverlayActive = computed({
    set: (v) => !v ? openOverlay.value = null : null,
    get: () => openOverlay.value !== null
});
const openOverlay = ref<'overview'|'carousel'|null>();

const close = () => openOverlay.value = null;

const openOverview = () => {
    openOverlay.value = 'overview';
}

const openImage = (image: RokkaImage) => {
    activeImage.value = image;
    openOverlay.value = 'carousel';
}

</script>
