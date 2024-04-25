
<template>
    <main class="fiche-projet d-flex flex-column justify-content-md-between align-items-center">
        <section class="section_page d-flex justify-content-center pb-5">
            <div class="section_projet pb-5">
                <div class="mt-5">
                    <Back/>
                    <div class="d-flex align-items-center title_link-icon mb-lg-5">
                        <h2>Jazz Café Montparnasse</h2>
                    </div>
                    <p class="d-none d-lg-block">
                        Le Jazz Café Montparnasse est un restaurant bistronomique offrant à ces clients des concerts de jazz.
                    </p>
                </div>
                <div class="d-flex flex-column flex-lg-row justify-content-between mt-5">
                    <div class="d-flex flex-column-reverse flex-lg-column">
                        <p class="d-block d-lg-none">
                            Le Jazz Café Montparnasse est un restaurant bistronomique offrant à ces clients des concerts de jazz.
                        </p>
                        <div class="img-neon-border img-projet">
                            <img src="/images/projets/JCM.jpg" alt="vignette Jazz Café"/>
                        </div>
                    </div>

                    <div class="right-content d-flex flex-column justify-content-center">
                        <div class="mt-5 mt-lg-0 mb-5 mb-lg-0 mb-xl-5">
                            <h3 class="mb-4">But du projet</h3>
                            <p>Le Jazz Café Montparnasse rénove son restaurant et veut ainsi faire de même avec son site.</p>
                            <p>J'ai effectué cette mission en tant qu'UI designer.</p>
                        </div>
                        <div>
                            <h3 class="mb-4">Rendus</h3>
                            <p>J'ai réalisé le logo, les maquettes de la page d'accueil et celle de la carte du restaurant.</p>
                            <p>A noter qu'à cause du covid, l'enseigne a définitivement fermé ses portes et n'a donc pas mis en place le site.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_page d-flex justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-5">
                        <h3 class="mb-4 text-start">Maquettes page d'accueil</h3>
                        <p class="mb-5">Voici les maquettes mobile et desktop de la page d'accueil : </p>

                        <div class="mt-5 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
                            <div class="me-lg-5 mb-5 mb-lg-0">
                                <img width="200" src="@/public/images/projets/jcm/phone_home.png" alt="phone homepage"/>
                            </div>
                            <div class="text-center">
                                <img class="img_desktop" src="@/public/images/projets/jcm/desktop_home.png" alt="desktop homepage"/>
                            </div>
                        </div>
                    
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_page d-flex justify-content-center last_div-margin">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-0">
                        <h3 class="mb-4 text-start">Maquettes page carte du restaurant</h3>
                        <p class="mb-5">Voici les maquettes mobile et desktop de la page de la carte du restaurant : </p>

                        <div class="mt-5 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
                            <div class="me-lg-5 mb-lg-0">
                                <img width="200" src="@/public/images/projets/jcm/phone_menu.png" alt="phone homepage"/>
                            </div>
                            <div class="text-center mb-5 mb-lg-0">
                                <img class="img_desktop" src="@/public/images/projets/jcm/desktop_menu.png" alt="desktop homepage"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    </main>
</template>

<script lang="ts">
export default {
    setup() {
        const path = '/svg/logo/'

        return {
            path
        }
    },

};
</script>
