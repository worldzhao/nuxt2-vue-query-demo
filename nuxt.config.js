export default {
  alias: {
    vue$: 'vue/dist/vue.runtime.esm.js',
  },
  render: {
    bundleRenderer: {
      // AbortController support for development
      // see more: 
      //     1. https://github.com/nuxt/nuxt/issues/4914
      //     2. https://github.com/nuxt/nuxt/issues/6480
      runInNewContext: false,
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-query.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@tanstack/vue-query', '@tanstack/query-core'],
    extend(config) {
      config.module.rules = config.module.rules.concat([
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ]);
    },
  },
};
