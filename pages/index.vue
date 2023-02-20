<script setup lang="ts">
  const clickHandler = async () => {
    // Server and Browser should show different logs
    const response = await $fetch("/api/intro");
    console.log(response);
  };
</script>

<template>
  <!-- Don't forget to edit head data in nuxt.config.ts -->
  <div class="grid-container">
    <div class="flex-item">
      <div class="i-logos-vue text-8xl"></div>
      <div class="i-logos-nuxt text-8xl"></div>
    </div>
    <div class="about-btn mt-10">
      <NuxtLink to="/about">
        <button @click="clickHandler">CSS is reset. This is a button.</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  /* A flex container with ttwo rows */
  .grid-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-content: center;
    min-height: inherit;
  }

  .flex-item {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
</style>
