// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['assets/main.css'],
    ssr: false,
    components: { global: true, dirs: ['~/components'] },
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
      preference: 'sepia', // default value of $colorMode.preference
    },
    experimental: {
      payloadExtraction: false
    },
    app: {
      baseURL: '/body-parts/', // baseURL: '/<repository>/'
      // buildAssetsDir: '/dist/_nuxt'
    }

})
