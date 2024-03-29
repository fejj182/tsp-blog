import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
require('dotenv').config()

export default async () => {
  const routes = await axios.get('https://api.storyblok.com/v1/cdn/stories?token=' + process.env.NUXT_ENV_STORYBLOK_TOKEN)
    .then((res) => {
      return res.data.stories.map((story) => {
        return '/' + story.slug
      })
    })

  return {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',
    // Global page headers (https://go.nuxtjs.dev/config-head)

    head: {
      titleTemplate: '%s',
      title: 'Sustainability Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&display=swap'
        }
      ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
      '~/plugins/components'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
      // https://go.nuxtjs.dev/vuetify
      '@nuxtjs/vuetify'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      '@nuxtjs/sitemap',
      [
        'storyblok-nuxt',
        {
          accessToken: process.env.NUXT_ENV_STORYBLOK_TOKEN,
          cacheProvider: 'memory'
        }
      ]
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
        dark: false,
        themes: {
          light: {
            primary: colors.indigo.darken2,
            accent: colors.grey.darken3,
            secondary: colors.indigo.lighten1,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3
          }
        }
      }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    router: {
      base: process.env.NUXT_ENV_BASE_URL
    },

    sitemap: {
      hostname: process.env.NUXT_ENV_HOST_NAME,
      routes
    },

    generate: {
      routes: () => routes
    }
  }
}
