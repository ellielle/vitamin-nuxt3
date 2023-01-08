<script setup lang="ts">
  const clickHandler = async () => {
    // Server and Browser should show different logs
    const response = await $fetch("/api/intro");
    console.log(response);
  };
</script>

<template>
  <!-- <NuxtWelcome /> -->
  <div class="flex place-content-center pt-24">
    <div class="i-logos-vue text-8xl"></div>
    <div class="i-logos-nuxt text-8xl"></div>
  </div>
  <div class="flex flex-col">
    <button class="justify-center mt-12" @click="clickHandler">CSS is reset. This is a button.</button>
  </div>
</template>
