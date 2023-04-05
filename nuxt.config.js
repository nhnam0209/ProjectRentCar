export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Rental Car",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  env: {
    baseURL: process.env.BASE_URL || "http://locahost:5000/api/",
  },

  loading: {
    color: "blue",
    height: "5px",
  },

  ssr: false,
  generate: { fallback: '404.html' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/store_proxy", "~/plugins/index"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  components: [
    "../ProjectRentCar/components/atoms/",
    "../ProjectRentCar/components/",
    "../ProjectRentCar/components/logos/",
    "../ProjectRentCar/components/molecules/",
    "../ProjectRentCar/components/organisms/",
    "../ProjectRentCar/layout/",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/axios",
    "@nuxtjs/fontawesome",
  ],
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  // generate: {
  //   fallback: "404.html",
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/toast"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: process.env.BASE_URL || "http://locahost:5000/api/",
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL || "http://locahost:5000/api/",
    },
  },
};
