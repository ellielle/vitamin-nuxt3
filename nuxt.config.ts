// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "nuxt-simple-sitemap",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Wow Nuxt 3!",
      meta: [{ name: "description", content: "Nuxt 3 is pretty neat." }],
    },
    // TODO edit page transition(s)
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  // Nitro config
  nitro: {
    // routeRules: {
    //   "/": { prerender: true },
    //   "/*": { cors: true },
    // },
    prerender: {
      crawlLinks: true,
      // TODO add crawl links
      routes: ["/"],
    },
  },
  // TODO make sure robots is working on deployment
  robots: {
    rules: [{ userAgent: "*", disallow: "/" }],
  },
  googleFonts: {
    // TODO clean up this mess once decided on style
    prefetch: true,
    preconnect: true,
    display: "swap",
    download: true,
    base64: true,
    families: {
      "Nunito+Sans": {
        wght: 400,
        // ital: [300],
      },
      Poppins: {
        wght: 400,
      },
      "Fira+Code": {
        wght: 400,
      },
      Inter: {
        wght: 400,
      },
    },
  },
  // Simple css reset with some basic style
  css: ["@/assets/css/globals.css"],
});
