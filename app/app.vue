<template>
  <NuxtPage />
  <BackToTop v-if="showButton" :class-list="'unstyled-link backToTop text-center fixed-bottom'"/>
</template>
<script lang="ts">

export default defineNuxtComponent({
    setup() {

    },
    data() {
        return { 
          showButton: window && window.scrollY > 0
        };
    },
    methods: {
      handleScroll() {
        if(process.client){
          const currentScrollPosition = window.scrollY

          if(currentScrollPosition > 0){
              this.showButton = true
          }
          else{
              this.showButton = false

          }
        }
      },
    },
    head() {
        return {
            title: 'Pauline LAM UXUI Engineer - Portfolio',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no' },
                { hid: 'description', name: 'description', content: 'Portfolio de Pauline LAM, UXUI Engineer' }
            ],
            link: [
                { rel: 'stylesheet' , href: 'https://cdn.jsdelivr.net/npm/vue-slick-carousel@1.0.6/dist/vue-slick-carousel-theme.min.css' },
                { rel: 'icon', href: '/Logo.png', type: "image/x-icon"}
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/vue-slick-carousel@1.0/dist/vue-slick-carousel.umd.min.js'
                }
            ],
        }

    },
    watch: {

    },
    mounted() {
      if(process.client){
            window.addEventListener("scroll", this.handleScroll);
      }
    },
    beforeMount () {

    },
    beforeDestroy () {

    },

});
</script>