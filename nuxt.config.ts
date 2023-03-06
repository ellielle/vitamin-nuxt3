// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@unocss/nuxt", "@nuxtjs/google-fonts"],
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
    // Basic Nuxt page transition
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  // Sample Google font config
  googleFonts: {
    families: {
      "Noto+Sans": {
        wght: [300, 400, 700],
        // ital: [300],
      },
    },
  },
  // Simple css reset
  css: ["@/assets/css/globals.css"],
  // Temp fix for 'Sourcemap for "/__uno.css" points to missing source files' error
  sourcemap: {
    client: false,
    server: true,
  },
});
