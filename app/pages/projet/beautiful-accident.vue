
<template>
    <main class="fiche-projet d-flex flex-column justify-content-md-between align-items-center">
        <section class="section_page d-flex justify-content-center pb-5">
            <div class="section_projet pb-5">
                <div class="mt-5">
                    <Back/>
                    <div class="d-flex align-items-center title_link-icon mb-lg-5">
                        <h2>Beautiful Accident</h2>
                    </div>
                    <p class="d-none d-lg-block">
                        Beautiful Accident est un bijoutier qui personnalise des bagues sur mesure.
                    </p>
                </div>
                <div class="d-flex flex-column flex-lg-row justify-content-between mt-5">
                    <div class="d-flex flex-column flex-lg-column">
                        <div class="img-neon-border img-projet">
                            <img src="/images/projets/bacc.jpg" alt="vignette bague Beautiful Accident"/>
                        </div>
                        <p class="d-block d-lg-none">
                            Beautiful Accident est un bijoutier qui personnalise des bagues sur mesure.
                        </p>
                    </div>

                    <div class="right-content d-flex flex-column justify-content-center">
                        <div class="mt-5 mt-lg-0 mb-5">
                            <h3 class="mb-4">But du projet</h3>
                            <p>
                                Le but est de réaliser des maquettes pour la page d'accueil et pour la page de 
                                <br class="d-none d-xxl-block"> personnalisation de bagues pour mobile et desktop <span class="fw-bold highlighted_word">sous Figma.</span>
                            </p>
                        </div>
                        <div class="mb-sm-5 mb-md-0">
                            <h3 class="mb-4">Contrainte</h3>
                            <p>
                                La contrainte est de garder le logo de la marque, ainsi que sa police d'écriture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_page d-flex justify-content-center">
            <div class="section_projet">
                <div class="mt-5 d-flex flex-column">
                    <div class="my-5">
                        <div>
                            <h3 class="mb-4 text-start">Prototype Figma Mobile</h3>
                            <p class="mb-5">Ceci est le prototype Hi-fi.</p>
                        </div>
                        
                        <div class="phone_screen d-flex justify-content-center align-items-center mb-5">
                            <img class="" src="@/public/images/phone-screen.png" alt="phone screen border"/>

                            <iframe class="phone_iframe" width="434" height="771" src="https://www.youtube.com/embed/xpMGv2xH2lA" title="Prototype Hi-fi Beautiful Accident Mobile" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <svg class="circle" width="1202" height="1029" viewBox="0 0 1202 1029" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="xl_circle" cx="596" cy="529" r="500" fill="url(#paint0_linear_1036_151)"/>
                                <circle class="sm_circle" cx="96" cy="10" r="10" fill="#C71BF9"/>
                                <circle class="md_circle" cx="25" cy="118" r="25" fill="#C71BF9"/>
                                <circle class="sm_circle" cx="1192" cy="896" r="10" fill="#2496DA"/>
                                <circle class="md_circle" cx="1121" cy="1004" r="25" fill="#2496DA"/>
                                <defs>
                                <linearGradient id="paint0_linear_1036_151" x1="1096" y1="1029" x2="81.6219" y2="43.804" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00B0D3"/>
                                <stop offset="1" stop-color="#EB00FF"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_page d-flex justify-content-center last_div-margin">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-5">
                        <h3 class="mb-5 text-start">Prototype Figma Desktop</h3>
                        <div class="desktop_iframe overflow-hidden mb-5">
                            <iframe width="1214" height="683" src="https://www.youtube.com/embed/xGdtKty6f1A" title="Prototype Hi-fi beautiful Accident Desktop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                       
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
