<template>
  <header class="mb-52">
    <h1 class="uppercase font-bold">rokka image gallery</h1>
  </header>
  <main>
    <Gallery
      :images="images"
    />
  </main>
</template>
<script lang="ts" setup>
import Gallery from './components/Gallery.vue';

const images = [
  {
    id: 'aa',
    url: 'https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'dAtA aNaLySt',
  },
  {
    id: 'bb',
    url: 'https://images.unsplash.com/photo-1664910059414-f7d75a61f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Maske',
  },
  {
    id: 'cc',
    url: 'https://images.unsplash.com/photo-1664970251461-d027c58f94fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'strand',
  },
  {
    id: 'dd',
    url: 'https://plus.unsplash.com/premium_photo-1661740645196-86113ed93ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'essen',
  },
];
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
