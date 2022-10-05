<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="ROKKA IMAGE GALLERY" />
    </div>
  </header>
  <main>
    <ImageGallery
      :images="images"
    />
  </main>
</template>
<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import ImageGallery from "./components/ImageGallery.vue";

const images = [
  {
    url: 'https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'dAtA aNaLySt',
  },
  {
    url: 'https://images.unsplash.com/photo-1664910059414-f7d75a61f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Maske',
  },
  {
    url: 'https://images.unsplash.com/photo-1664970251461-d027c58f94fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'strand',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1661740645196-86113ed93ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'essen',
  },
  
]
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
