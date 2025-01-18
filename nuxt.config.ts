// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  routeRules: {
    "/services": {
      redirect: "/#services",
    },
    "/pricing": {
      redirect: "/#pricing",
    },
    "/about-us": {
      redirect: "/#about-us",
    },
  },
  css: ["~/assets/css/main.scss"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: [100, 400, 700, 900],
          Vollkorn: [400, 500, 600, 700, 800, 900],
          "Vollkorn+SC": [400, 600, 700, 900],
        },
      },
    ],
    "nuxt-mdi",
  ],
});
