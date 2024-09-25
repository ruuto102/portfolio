// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'MY PORTFOLIO'
    }
  },

  $development: {
    app: {
      head: {
        title: 'DEV'
      }
    }
  },
  compatibilityDate: '2024-09-24',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    api: {
      baseURL: '/api/_my_content'
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
})