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
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  compatibilityDate: '2024-09-24',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image', 'dayjs-nuxt'],
  content: {
    api: {
      baseURL: '/api/_my_content'
    }
  },
  dayjs: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  routeRules: {
    '/': { prerender: true }
  }
})