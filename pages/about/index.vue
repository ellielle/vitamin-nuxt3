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
    grid-template-rows: 1fr 1fr;
    place-content: center;
    min-height: inherit;
  }
</style>