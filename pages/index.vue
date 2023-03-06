<script setup lang="ts">
  const clickHandler = async () => {
    // Server and Browser should show different logs
    const response = await $fetch("/api/intro");
    console.log(response);
  };
</script>

<template>
  <main>
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
  </main>
</template>

<style scoped>
  .grid-container {
    display: grid;
    justify-items: center;
    min-height: 100vh;
    grid-template-rows: 1fr 1fr;
  }

  .flex-item {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.4s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
