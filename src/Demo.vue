<template>
  <main>
    <Export album="Zurich" organization="gallery-demo" />
  </main>
</template>
<script lang="ts" setup>
import Export from './Export.vue';
</script>
<style>
body {
  display: flex;
  place-items: center;
}

#app {
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
