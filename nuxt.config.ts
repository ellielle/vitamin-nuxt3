// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@unocss/nuxt"],
  experimental: {
    reactivityTransform: true,
  },
  css: [
    "@unocss/reset/tailwind.css"
  ]
});