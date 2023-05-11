<script setup lang="ts">
  const clickHandler = async () => {
    // Server and Browser should show different logs
    const response = await $fetch("/api/intro");
    console.log(response);
  };
</script>

<template>
  <main class="flex justify-center min-h-[100vh]">
    <!-- Don't forget to edit head data in nuxt.config.ts -->
    <div class="flex flex-col justify-center justify-items-center">
      <div class="flex justify-center">
        <div class="i-logos-vue text-8xl"></div>
        <div class="i-logos-nuxt text-8xl"></div>
      </div>
      <HelloWorld msg="You did it!" />
      <div class="flex justify-center mt-8">
        <NuxtLink to="/about">
          <button @click="clickHandler">CSS is reset. This is a button.</button>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
