// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@unocss/nuxt"],
  typescript: {
    shim: false,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Wow Nuxt 3!",
      meta: [{ name: "description", content: "Nuxt 3 is pretty neat." }],
    },
  },
  // Simple css reset
  css: ["@/assets/css/globals.css"],
});
