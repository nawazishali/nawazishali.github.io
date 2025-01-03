// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
  css: ['@/assets/scss/base.scss'],
  primevue: {
    components: {
      prefix: 'Prime',
    },
    importTheme: { from: '@/themes/customTheme.ts' }
  },
});