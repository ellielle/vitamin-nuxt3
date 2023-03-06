<script setup lang="ts">
  const clickHandler = async () => {
    // Server and Browser should show different logs
    const response = await $fetch("/api/intro");
    console.log(response);
  };
</script>

<template>
  <!-- Don't forget to edit head data in nuxt.config.ts -->
<<<<<<< HEAD
  <div class="flex-container">
    <div class="i-logos-vue text-8xl"></div>
    <div class="i-logos-nuxt text-8xl"></div>
<!-- TODO create a wrapper element with slots for these to make flex / grid more friendly -->
    <div class="about-link">
=======
  <div class="grid-container">
    <div class="flex-item">
      <div class="i-logos-vue text-8xl"></div>
      <div class="i-logos-nuxt text-8xl"></div>
    </div>
    <div class="about-btn mt-10">
>>>>>>> d47002e8a3d64acce70e3488ae1d5bbf6d52a83c
      <NuxtLink to="/about">
        <button @click="clickHandler">CSS is reset. This is a button.</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
/* A flex container with two logos and a button under them */
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}










</style>
=======
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
>>>>>>> d47002e8a3d64acce70e3488ae1d5bbf6d52a83c
