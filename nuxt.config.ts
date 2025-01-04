// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/', // baseURL: '/<repository>/' https://<username>.github.io/<repository>/
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    "@primevue/nuxt-module",
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  tailwindcss: {
    cssPath: '@/assets/scss/tailwind.scss',
    configPath: '@/tailwind.config.ts',
  },
  css: ['@/assets/scss/base.scss', 'primeicons/primeicons.css'],
  primevue: {
    components: {
      prefix: 'Prime',
    },
    importTheme: { from: '@/themes/customTheme.ts' }
  },
});