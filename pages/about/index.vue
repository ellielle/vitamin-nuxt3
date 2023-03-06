<script setup lang="ts">

</script>

<template>
  <div class="grid-container">
    <p class="flex flex-row place-items-end">An about me page!</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<style scoped>
  .grid-container {
    display: grid;
    justify-items: center;
    min-height: 100vh;
    grid-template-columns: 1fr;
  }
</style>
