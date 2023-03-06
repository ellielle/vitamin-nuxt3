<script setup lang="ts">

</script>

<template>
<<<<<<< HEAD
  <div class="flex flex-col justify-center">
    <p>An about me page!</p>
  </div>
</template>
=======
  <div class="grid-container">
    <p class="flex flex-row place-items-end">An about me page!</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-content: center;
    min-height: inherit;
  }
</style>
>>>>>>> d47002e8a3d64acce70e3488ae1d5bbf6d52a83c
