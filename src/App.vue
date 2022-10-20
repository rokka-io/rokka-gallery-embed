<template>
  <header class="mb-52">
    <h1 class="uppercase font-bold">rokka image gallery</h1>
  </header>
  <main>
    <Gallery :images="images" :favourite-images="fixedLenghtFavouriteImages"/>
  </main>
</template>
<script lang="ts" setup>
import type Image from './classes/Image';
import type RokkaImage from './classes/RokkaImage';
import Gallery from './components/Gallery.vue';
import useRokkaImages from './composables/useRokkaImages';

const rokkaImages: RokkaImage[] = [
  {
    hash: '969039',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'tomas-jerabek-IZCdeSNVtZA.jpg',
  },
  {
    hash: '883058',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'tomas-jerabek-IZCdeSNVtZA.jpg',
  },
  {
    hash: 'cb596f',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'claudio-schwarz-purzlbaum-3G8lNeqg2TQ.jpg',
  },
  {
    hash: '94c095',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'carol-jeng-5vpil1StrJ4.jpg',
  },
  {
    hash: 'a36341',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'claudio-schwarz-purzlbaum-aVv19gC_ee8.jpg',
  },
  {
    hash: '223328',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'bing-hao-9P0pzrbjtHU.jpg',
  },
  {
    hash: 'a91359',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'dominic-ruegg-vEr5I6CfrF0.jpg',
  },
  {
    hash: 'f93d29',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'christian-burri-sLOIsAUxTgY.jpg',
  },
  {
    hash: 'c56b3a',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'dominic-ruegg-zxgiC7rYwoc.jpg',
  },
  {
    hash: '730d48',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'danilo-capece-4Su459cah90.jpg',
  },
  {
    hash: '5a8404',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'teo-zac-55MmQXny4GQ.jpg',
  },
  {
    hash: 'e856f7',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'markus-spiske-Z_Al-iyP8OA.jpg',
  },
  {
    hash: '5e1522',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'lisa-therese-hT1Rvzpi1cs.jpg',
  },
  {
    hash: '424110',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'sambo-ratanak-f0KvwL7SF-I.jpg',
  },
  {
    hash: 'c25767',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'eric-weber-_wB88hxsW8M.jpg',
  },
  {
    hash: '05ed86',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'behzad-ghaffarian-bf4tski1t9I.jpg',
  },
  {
    hash: 'e7800a',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'niklas-liniger-uFJukey-7DY.jpg',
  },
  {
    hash: 'f2ebfc',
    mimetype: 'image/jpeg',
    format: 'jpg',
    name: 'claudio-schwarz-purzlbaum-KbqIim1Vlb8.jpg',
  },
];

const favouriteRokkaImages = rokkaImages.slice(-3);

const images: Image[] = useRokkaImages(rokkaImages);
const favouriteImages: Image[] = useRokkaImages(favouriteRokkaImages);

// Make sure always four teaser images are available
// Either Fills up teaser images with images that arent favourited
// Or return the first 4 favourited images
const fixedLenghtFavouriteImages = props.favouriteImages.map(img => img.id);
const teaserImages = props.favouriteImages.length < 4 ?
  props.favouriteImages.concat(
    props.images
      .filter(img => !favouriteImageIds.includes(img.id))
      .slice(0, props.favouriteImages.length-4)
  ) 
  : props.favouriteImages.slice(0, 4);
</script>
<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
