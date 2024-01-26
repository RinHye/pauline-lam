<template>
    <main id="projets" class="d-block">
        <header>
            <h1 class="mb-5">Portfolio</h1>
            <!-- <Nav :current-link="currentLink"/> -->
        </header>
        <div class="projets">
            <ProjectCard 
                v-for="p in projects" 
                :image="p.imageRef"
                :title="p.title"
                :subtitle="p.subtitle" 
                :link="p.link"
             />
        </div>
        

    </main>
</template>

<script lang="ts">

    import { LIST1, LIST2, LIST3, PROJECTS } from '@/constants/'

    export default {
        setup() {
            const projects : any[] = PROJECTS

            const list1 : any[] = LIST1

            const list2 : any[] = LIST2

            const list3 : any[] = LIST3
            return {
                list1,
                list2,
                list3,
                projects
            }
        },
        data() {
            return { 
                //showMore: window?.innerHeight < 828
                
            };
        },
        methods: {
            /*
            handleResize() {
                this.showMore = window?.innerHeight < 828
            }*/
        },
        watch: {
            /*
            showMore(newValue, oldValue) {
                if(this.showMore === true) {
                    let parentEl = document.getElementById('scrollParent') || document.documentElement
                    console.log(parentEl.scrollHeight)
                    console.log(parentEl)
                    console.log("HE : " + parentEl.scrollTop)
                    
                    parentEl.scrollTop = 555
                    window.scrollTo(0, 555)
                    console.log("HOO : " + parentEl.scrollTop)
                }
            }*/
        },
        /*
        beforeMount () {
            window?.addEventListener('resize', this.handleResize)
        },
        beforeDestroy () {
            window?.removeEventListener('resize', this.handleResize)
        },*/

    };

</script>