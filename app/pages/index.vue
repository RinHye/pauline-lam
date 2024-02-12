
<template>
    <main id="home" class="d-flex flex-column justify-content-md-between align-items-center">
        <section class="d-flex flex-column flex-md-row overflow-hidden">
            <div class="d-md-block d-none div-img-profil">
                <img
                    class="w-100 img-profil-desktop"
                    src="/images/photo-profil-md-min.jpeg"
                    alt=""
                />
            </div>

            <header class="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <Nav/> 

                <div class="d-block d-md-none">
                    <img
                    class="circle-neon-img"
                    src="/images/photo-profil-xxl-min.jpeg"
                    srcset="/images/photo-profil-xxl-min.jpeg 1959w,
                    /images/photo-profil-md-min.jpeg 993w,
                    /images/photo-profil-md-min.jpeg 250w"
                    alt=""
                    />
                </div>
                <div class="home-content-text">
                    <div>
                        <div class="d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between align-items-center">
                            <h1 class="titles mb-0">Pauline LAM</h1>
                            <Reseaux :class-list="'reseaux_btn mb-5 mb-md-2 d-flex'"/>
                        </div>
                        <p class="h1-subtitles">
                            UX/UI Engineer - Eligible
                            <span class="highlighted-text">
                                <a class="unstyled-link" target="_blank" href="https://travail-emploi.gouv.fr/emploi-et-insertion/emplois-francs/article/embaucher-une-personne-en-emploi-franc">
                                    emploi franc*
                                </a>
                            </span>
                        </p>
                    </div>
                    <div>
                    <blockquote class="quotes">" The only way to do great work is <br class="d-md-block d-none">to love what you do."</blockquote>
                    </div>
                    <NeonButton :label-btn="labelProjets" :link="projetsLink" />
                </div>
            </header>
        </section>
        <section id="projets" class="section_home">
            <h2 class="mb-5">Mon portfolio</h2>
            <div class="projets">
                <ProjectCard 
                    v-for="p in projects" 
                    :image="p.imageRef"
                    :title="p.title"
                    :subtitle="p.subtitle" 
                    :link="p.link"
                />
            </div>
        </section>

        <section id="about" class="section_home last_section d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column justify-content-center section">
                
                <h2 class="mb-5">A propos de moi</h2>
                
                <div class="d-flex flex-lg-wrap flex-column flex-lg-row align-items-center align-items-lg-baseline justify-content-between">
                    <p class="my-2">
                        Anciennement développeur puis chef de projet technique dans le domaine du web, j'ai décidé de me plonger dans l'UX/UI design pour compléter mes compétences web.
                    </p>
                    <p class="my-2">
                        Grâce à mon expertise polyvalente, je voudrais aider les entreprises à promouvoir leur marque en construisant des projets user-friendly et adaptés à leur image. 
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">


    import { PROJECTS } from '@/constants/'

    export default {
        setup() {
            const projects : any[] = PROJECTS

            const labelProjets = 'Voir mes projets'
            const currentLink = '/'
            const projetsLink = '#projets'
            return {

                projects,
                labelProjets,
                currentLink,
                projetsLink
            }
        },
        data() {
            return { 
                //showMore: window?.innerHeight < 828
                
            };
        },
        methods: {

        },
        watch: {

        }
    };
</script>
