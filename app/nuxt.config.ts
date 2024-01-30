// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          'Catamaran': {
            wght: [300, 400, 500, 600, 800]
          },
          'Josefin+Sans': {
            wght: [100,300],
            ital: [100, 300]
          },
          'Open+Sans': {
            wght: [100, 300, 400, 600, 800],
          },
          //ba
          /*
          'Oswald': {
            wght: [100, 300, 400, 500, 600, 700, 800],
          },
          'Lato': {
            wght: [100, 300, 400, 500, 600, 700, 800],
          }*/
        }
    }],
  ],
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "@/assets/style/global.scss",
    "@/assets/style/fonts.scss",
    "@/assets/style/components/nav.scss",
    "@/assets/style/components/neonButton.scss",
    "@/assets/style/components/cards.scss",
    "@/assets/style/components/backToTop.scss",
    "@/assets/style/components/desktopScreen.scss",
    "@/assets/style/components/mobileScreen.scss",
    "@/assets/style/pages/home.scss",
    "@/assets/style/pages/projets.scss",
    "@/assets/style/pages/alpiq.scss",
    "@/assets/style/pages/hc.scss",
    "@/assets/style/pages/bacc.scss",
    
    //"@/assets/style/pages/beautiful-accident.scss"

  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/variables.scss" as *;',
        },
      },
    },
  },
})
