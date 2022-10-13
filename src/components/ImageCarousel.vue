<template>
    <div class="flex items-center h-full w-full">
        <div class="mx-4">
            <InvisibleButton @click="prev">
                <Left/>
            </InvisibleButton>
        </div>
        <div class="flex-auto flex flex-col h-full">
            <div>
                <InvisibleButton @click="emit('openOverlay')">
                    <p><Back class="inline mr-2"/>Übersicht</p>
                </InvisibleButton>
            </div>
            <div class="flex-auto relative"
                ref="sizer" :style="{'--slider-height': `${imageHeight}px`}"
            >
                <div class="absolute w-full">
                    <Carousel v-model="slider" :wrap-around="true">
                        <Slide v-for="(image, index) of images" :key="index">
                            <div class="flex flex-col w-full h-[var(--slider-height)]">
                                <div class="flex-auto custom-bg-stripes">
                                    <img class="object-contain w-full h-full" :src="image.url" :alt="image.description"/>
                                </div>
                                <div class="flex-shrink-0 flex justify-between">
                                    <p>{{image.description}}</p>
                                    <a :href="`${image.url}?download`" target="_blank">
                                        <p><Download class="inline mr-2"/>Download</p>
                                    </a>
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
                </div>
            </div>
        </div>
        <div class="mx-4">
            <InvisibleButton @click="next">
                <Right/>
            </InvisibleButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'
import { onMounted, onUnmounted, ref, watch } from 'vue';
import type { PropType } from 'vue';
import InvisibleButton from './InvisibleButton.vue';
import Right from './Icons/Right.vue';
import Left from './Icons/Left.vue';
import type RokkaImage from '@/classes/RokkaImage';
import Back from './Icons/Back.vue';
import Download from './Icons/Download.vue';

const emit = defineEmits(['openOverlay'])
const props = defineProps({
    images: {
        type: Array as PropType<RokkaImage[]>,
        required: true,
    },
    image: {
        type: Object as PropType<RokkaImage>,
        required: true,
    }
})

const slider = ref(props.images.indexOf(props.image));
watch(props.image,  (image) => {
    if(image) slider.value = props.images.indexOf(props.image);
})

const prev = () => slider.value = slider.value - 1; 
const next = () => slider.value = slider.value + 1;

/* Control image height */
const imageHeight = ref(0);
const sizer = ref(null);
const setSize = () => imageHeight.value = sizer.value?.clientHeight;
onMounted(() => setSize() && addEventListener('resize', setSize));
onUnmounted(() => removeEventListener('resize', setSize));

</script>
<style lang="css" scoped>
    .custom-bg-stripes {
        background-color: #9ca3af1a;
        background-image: linear-gradient(135deg,#6b728080 10%,transparent 0,transparent 50%,#6b728080 0,#6b728080 60%,transparent 0,transparent);
        background-size: .75rem .75rem;
    
        /* additional styling */
        border-radius: .5rem;
        overflow: hidden;
    }
</style>
