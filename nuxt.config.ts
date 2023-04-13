// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/main.css'],
    ssr: false,
    components: { global: true, dirs: ['~/components'] },
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
      preference: 'dark', // default value of $colorMode.preference
    }

})
