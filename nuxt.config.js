import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt2 Pinia Issue",
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [["@pinia/nuxt", { autoImports: ["defineStore"] }]],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  bridge: {
    vite: true,
  },
  vite: {
    css: {
      modules: {
        generateScopedName: "[local]__[hash:base64:5]",
      },
    },
  },
});
