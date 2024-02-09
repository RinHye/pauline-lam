
<template>
    <main class="fiche-projet d-flex flex-column justify-content-md-between align-items-center">
        <section class="section_page d-flex justify-content-center pb-5">
            <div class="section_projet pb-5">
                <div class="mt-5">
                    <div class="pb-5">
                        <a href="/" class="text-uppercase unstyled-link highlighted-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none">
                                <path d="M19.0128 0.987372C19.2491 1.22405 19.3819 1.54488 19.3819 1.87938C19.3819 2.21388 19.2491 2.53471 19.0128 2.77138L3.07657 18.7097L19.0128 34.648C19.2357 34.8872 19.3571 35.2037 19.3513 35.5307C19.3456 35.8578 19.2131 36.1698 18.9818 36.401C18.7506 36.6323 18.4385 36.7648 18.1115 36.7706C17.7845 36.7763 17.468 36.6549 17.2287 36.432L0.398453 19.6017C0.162071 19.365 0.0292969 19.0442 0.0292969 18.7097C0.0292969 18.3752 0.162071 18.0543 0.398453 17.8177L17.2287 0.987372C17.4654 0.750989 17.7863 0.618217 18.1208 0.618217C18.4553 0.618217 18.7761 0.750989 19.0128 0.987372Z" fill="url(#paint0_linear_1025_550)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_1025_550" x1="22.6088" y1="18.7377" x2="0.0281929" y2="18.7377" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#01B0D3"/>
                                    <stop offset="1" stop-color="#D794FA"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            Retour à l'accueil
                        </a>
                    </div>
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
        <section class="mt-5 section_page d-flex justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-lg-5 d-flex flex-column">
                    <div class="mb-0">
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
        <section class="mt-5 section_page d-flex justify-content-center last_div-margin">
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
