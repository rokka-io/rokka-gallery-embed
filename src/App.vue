<template>
  <header class="mb-52">
    <h1 class="uppercase font-bold">rokka image gallery</h1>
  </header>
  <main>
    <Suspense>
      <Gallery album-name="Zurich" />
    </Suspense>
  </main>
</template>
<script lang="ts" setup>
import Gallery from './components/Gallery.vue';
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
