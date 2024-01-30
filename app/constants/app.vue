<template>
  <NuxtPage />
  <BackToTop v-if="showButton" :class-list="'unstyled-link backToTop text-center fixed-bottom'"/>
</template>
<script lang="ts">

export default {
    setup() {

    },
    data() {
        return { 
          showButton: window.scrollY > 0
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

};
</script>