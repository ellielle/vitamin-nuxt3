<script setup lang="ts">
  const clickHandler = async () => {
    // Server and Browser should show different logs
    const response = await $fetch("/api/intro");
    console.log(response);
  };
</script>

<template>
  <!-- Don't forget to edit head data in nuxt.config.ts -->
  <div class="flex-container">
    <div class="i-logos-vue text-8xl"></div>
    <div class="i-logos-nuxt text-8xl"></div>
<!-- TODO create a wrapper element with slots for these to make flex / grid more friendly -->
    <div class="about-link">
      <NuxtLink to="/about">
        <button @click="clickHandler">CSS is reset. This is a button.</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* A flex container with two logos and a button under them */
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}










</style>