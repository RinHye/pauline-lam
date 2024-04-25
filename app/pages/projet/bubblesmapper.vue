
<template>
    <main class="fiche-projet d-flex flex-column justify-content-md-between align-items-center">
        <section class="section_page d-flex justify-content-center pb-5">
            <div class="section_projet pb-5">
                <div class="mt-5">
                    <Back/>
                    <div class="d-flex align-items-center title_link-icon mb-lg-5">
                        <h2>BubblesMapper</h2>
                        <!--
                            <a  
                            title="Consulter mes développements sur le site d'Alpiq" 
                            class="unstyled-link highlighted-text"
                            target="_blank" href="https://particuliers.alpiq.fr/"
                        >
                            <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="35" viewBox="0 0 60 45" fill="none">
                                <g clip-path="url(#clip0_1025_381)">
                                    <path d="M15.425 8.27253C16.6595 7.03723 18.1252 6.05728 19.7386 5.38869C21.3519 4.7201 23.0812 4.37597 24.8275 4.37597C26.5739 4.37597 28.3032 4.7201 29.9165 5.38869C31.5298 6.05728 32.9956 7.03723 34.23 8.27253C36.7247 10.7693 38.126 14.1543 38.126 17.6838C38.126 21.2132 36.7247 24.5983 34.23 27.095L30.655 30.67C30.3133 31.0235 30.1241 31.497 30.1281 31.9887C30.1322 32.4803 30.3292 32.9507 30.6766 33.2985C31.0241 33.6463 31.4943 33.8437 31.9859 33.8482C32.4775 33.8527 32.9512 33.6639 33.305 33.3225L36.88 29.745C40.0777 26.5451 41.874 22.2064 41.874 17.6825C41.874 13.1587 40.0777 8.81999 36.88 5.62003C35.2973 4.03625 33.4181 2.77987 31.3496 1.92267C29.2812 1.06547 27.0641 0.624268 24.825 0.624268C22.586 0.624268 20.3689 1.06547 18.3005 1.92267C16.232 2.77987 14.3527 4.03625 12.77 5.62003L5.62004 12.78C3.29526 15.1092 1.69355 18.061 1.00786 21.2796C0.322161 24.4982 0.581737 27.8465 1.75531 30.921C2.92889 33.9955 4.9664 36.665 7.62239 38.6081C10.2784 40.5512 13.4395 41.6848 16.725 41.8725C16.9709 41.8862 17.2171 41.8512 17.4495 41.7697C17.6819 41.6882 17.896 41.5617 18.0795 41.3975C18.263 41.2332 18.4124 41.0344 18.519 40.8125C18.6257 40.5905 18.6877 40.3497 18.7013 40.1038C18.7149 39.8579 18.68 39.6117 18.5985 39.3793C18.5169 39.1469 18.3905 38.9329 18.2262 38.7493C18.062 38.5658 17.8632 38.4165 17.6412 38.3098C17.4192 38.2031 17.1784 38.1412 16.9325 38.1275C14.3691 37.9808 11.9028 37.096 9.83063 35.5797C7.7585 34.0635 6.16897 31.9804 5.25353 29.5815C4.33809 27.1826 4.13578 24.5702 4.67098 22.0589C5.20618 19.5477 6.45606 17.2447 8.27004 15.4275L15.425 8.27253Z" fill="url(#paint0_linear_1025_381)"/>
                                    <path d="M43.275 3.12751C42.7784 3.09999 42.2912 3.27088 41.9205 3.60259C41.5499 3.93429 41.3263 4.39964 41.2987 4.89626C41.2712 5.39288 41.4421 5.88008 41.7738 6.2507C42.1055 6.62132 42.5709 6.84499 43.0675 6.87251C45.6309 7.01926 48.0973 7.90406 50.1694 9.42032C52.2415 10.9366 53.831 13.0196 54.7465 15.4185C55.6619 17.8174 55.8642 20.4299 55.329 22.9411C54.7938 25.4524 53.544 27.7553 51.73 29.5725L44.575 36.725C43.3405 37.9607 41.8746 38.941 40.261 39.6098C38.6475 40.2786 36.9179 40.6228 35.1712 40.6228C33.4246 40.6228 31.695 40.2786 30.0814 39.6098C28.4679 38.941 27.002 37.9607 25.7675 36.725C23.2736 34.2284 21.8727 30.8439 21.8727 27.315C21.8727 23.7862 23.2736 20.4016 25.7675 17.905L29.3425 14.325C29.6737 13.9696 29.854 13.4995 29.8454 13.0137C29.8368 12.528 29.6401 12.0645 29.2965 11.721C28.953 11.3774 28.4895 11.1806 28.0038 11.1721C27.518 11.1635 27.0479 11.3438 26.6925 11.675L23.1175 15.2525C19.9198 18.4525 18.1235 22.7912 18.1235 27.315C18.1235 31.8388 19.9198 36.1775 23.1175 39.3775C24.7002 40.9613 26.5794 42.2177 28.6479 43.0749C30.7164 43.9321 32.9334 44.3733 35.1725 44.3733C37.4115 44.3733 39.6286 43.9321 41.6971 43.0749C43.7655 42.2177 45.6448 40.9613 47.2275 39.3775L54.3775 32.2175C56.7014 29.8883 58.3024 26.937 58.9877 23.719C59.673 20.501 59.4135 17.1535 58.2403 14.0795C57.0671 11.0056 55.0303 8.33639 52.3751 6.39329C49.72 4.45019 46.5598 3.31607 43.275 3.12751Z" fill="url(#paint1_linear_1025_381)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1025_381" x1="41.874" y1="41.8754" x2="24.6824" y2="0.878226" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#01B0D3"/>
                                    <stop offset="0.649" stop-color="#D794FA"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1025_381" x1="59.362" y1="44.3733" x2="42.1716" y2="3.3785" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#01B0D3"/>
                                    <stop offset="0.649" stop-color="#D794FA"/>
                                    </linearGradient>
                                    <clipPath id="clip0_1025_381">
                                    <rect width="60" height="45" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    -->
                    </div>
                    <p class="d-none d-lg-block">
                        BubblesMapper est une application mobile qui permet à ses utilisateurs de trouver des points d’eaux (toilettes, fontaines d’eau potable, ...) et espaces publics de premières nécessités en France.
                    </p>
                </div>
                <div class="d-flex flex-column flex-lg-row justify-content-between mt-5">
                    <div class="d-flex flex-column-reverse flex-lg-column">
                        <p class="d-block d-lg-none">
                            BubblesMapper est une application mobile qui permet à ses utilisateurs de trouver des points d’eaux (toilettes, fontaines d’eau potable, ...) et espaces publics de premières nécessités en France.
                        </p>
                        <div class="img-neon-border img-projet">
                            <img src="/images/projets/BubblesMapper.jpg" alt="vignette BubblesMapper avec fontaine d'eau"/>
                        </div>
                    </div>

                    <div class="mt-5 mt-lg-auto right-content">
                        <div class="mb-5">
                            <h3 class="mb-4">But du projet</h3>
                            <p>Réaliser une refonte visuelle du site web de BubblesMapper. Le <span class="fw-bold highlighted_word">contenu</span> du site est <span class="fw-bold highlighted_word">imposé</span> par le client.</p>
                            </div>
                        <div class="mt-5">
                            <h3 class="mb-4">Mes tâches</h3>
                            <p>Pour ce projet, j’ai réalisé :</p>
                            <ul>
                                <li>
                                    Le <span class="fw-bold highlighted_word">moodboard</span> de l’application qui me permet de créer le <span class="fw-bold highlighted_word">style guide</span> du site.
                                </li>
                                <li>
                                    Les maquettes version <span class="fw-bold highlighted_word">mobile</span> et <span class="fw-bold highlighted_word">desktop</span> du site.
                                </li>
                                <li>
                                    Quelques <span class="fw-bold highlighted_word">illustrations</span> du site.
                                </li>
                                <li>
                                    Des propositions de <span class="fw-bold highlighted_word">redesign</span> de quelques interfaces de <span class="fw-bold highlighted_word">l’application mobile</span>.
                                </li>
                            </ul>
                            <p>J’ai également collaboré avec une graphiste qui a réalisé le logo et les dessins de la mascotte du site.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_page d-flex justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-5 mt-5">
                        <h3 class="mb-4 text-start">Moodboard</h3>
                        <p>
                            Pour le Moodboard, j'ai réfléchi avec la graphiste aux mots qui pouvaient le mieux <span class="fw-bold highlighted_word">représenter</span> l'application de BubblesMapper. Voici les mots clés que j’ai retenus, avec les couleurs auxquels ils correspondent basés sur la <span class="fw-bold highlighted_word">psychologie des couleurs</span> :
                        </p>
                        <ul>
                            <li>Eau : l'application répertorie majoritairement des points d'eaux.</li>
                            <li>Toilettes et fontaines : les points d'eaux les plus répertoriés de l'application sont les toilettes et les fontaines.</li>
                            <li>Aide et pratique : BubblesMapper est une application qui veut aider ses utilisateurs lors de ses déplacements urbains.</li>
                            <li>Map : l'application cartographie des points d'eaux.</li>
                            <li>Bulles : en référence au nom de l'application.</li>
                        </ul>
                        <p>J’ai donc tapé tous ces mots dans des sites d’images comme Pinterest, Pexel et Unsplash et gardé les images qui m'ont inspirées.</p>    
                        <p>Puis, j'ai effectué un tri en ne conservant que <span class="fw-bold highlighted_word">les images les plus pertinentes</span> selon moi. Voici le moodboard obtenu :</p>
                        <div class="mt-5 mb-5">
                            <img class="w-100" src="/images/projets/bbm/moodboard.png" alt="moodboard réalisé pour BubblesMapper"/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_page d-flex justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-5">
                        <h3 class="mb-5 text-start">Style guide</h3>
                        <p>
                            Après avoir réalisé le <span class="fw-bold highlighted_word">moodboard</span>, j'ai créé le <span class="fw-bold highlighted_word">style guide</span> qui permet de garder de la <span class="fw-bold highlighted_word">consistence</span> et de la <span class="fw-bold highlighted_word">cohérence</span> à la réalisation des maquettes.
                        </p>
                        <div class="text-center my-5">
                          <img class="vertical_img" src="/images/projets/bbm/style.jpg" alt="Style guide réalisé pour SHEIN"/>
                        </div>
                        <p>
                            J'ai également réalisé des icônes illustratives pour le site :
                        </p>
                        <div class="text-center my-5">
                          <img class="vertical_img" src="/images/projets/bbm/illu.jpg" alt="Illustrations réalisées pour le site de BubblesMapper."/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section class="d-none d-md-flex section_page justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-0">
                        <h3 class="mb-5 text-start">L'avant-après redesign du site web</h3>
                        <p>
                            Voici l'avant-après des sections du site côté business :
                        </p>
                        <div class="text-center my-5 w-100">
                            <img class="w-100" src="/images/projets/bbm/avant-apres/1.png" alt="Avant-après du site web - sections côté business"/>
                        </div>
                        <p>
                            Voici l'avant-après des sections du site côté particulier :
                        </p>
                        <div class="text-center my-5 w-100">
                            <img class="w-100" src="/images/projets/bbm/avant-apres/2.png" alt="Avant-après du site web - sections accueil côté particulier"/>
                        </div>              
                        <div class="text-center my-5 w-100">
                            <img class="w-100" src="/images/projets/bbm/avant-apres/3.png" alt="Avant-après du site web - sections introduction et fonctionnalités"/>
                        </div>
                        <p>
                            Voici l'avant-après du bas de page (footer) :
                        </p>
                        <div class="text-center my-5 w-100">
                            <img class="w-100" src="/images/projets/bbm/avant-apres/footer.png" alt="Avant-après du pied de page du site"/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_page d-flex justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-5">
                        <h3 class="mb-5 text-start">L'avant-après du redesign de l'application mobile</h3>
                        <p>
                            J'ai appliqué le style guide sur l'application mobile. Voici l'avant-après :
                        </p>
                        <div class="text-center my-5 w-100">
                            <img class="w-100" src="/images/projets/bbm/avant-apres/home_evol.png" alt="Avant-après de deux écrans de l'application"/>
                        </div>
                        <div class="text-center my-5 w-100">
                            <img class="w-100" src="/images/projets/bbm/avant-apres/map_evol.png" alt="Avant-après de deux écrans de l'application"/>
                        </div>

                    </div>
                </div> 
            </div>
        </section>
        <section class="section_page d-flex justify-content-center">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-5">
                        <h3 class="mb-5 text-start">Prototype Figma Desktop</h3>
                        <div class="desktop_iframe overflow-hidden my-5">
                            <iframe width="1214" height="683" src="https://www.youtube.com/embed/2Ha-IB0wZhs" title="Redesign du site web BubblesMapper (Desktop)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <section class="section_page d-flex justify-content-center last_div-margin">
            <div class="section_projet mt-5">
                <div class="mt-5 d-flex flex-column">
                    <div class="mb-0">
                        <h3 class="mb-5 text-start">Prototype Figma mobile</h3>
                        <p>J'ai créé un prototype interactif sous Figma pour vous présenter le redesign complet.</p>
                        <div class="mt-3 phone_screen d-flex justify-content-center align-items-center">
                            <img class="" src="@/public/images/phone-screen.png" alt="phone screen border"/>
                            <iframe class="phone_iframe" src="https://www.youtube.com/embed/Xx6QG86BSIc" title="Redesign du site web de BubblesMapper (mobile)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            
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
