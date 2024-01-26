<template>
    <section class="personnalisation d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-around">
        <div>
            <!-- A modifier avec le module 3D-->
            <img src="images/bague.jpeg" />
        </div>
        <div class="form_perso_mobile">
            <div class="heading">
                <h1 class="titre">Votre personnalisation</h1>
                <p class="price">115,00 €</p>
            </div>

            <div class="d-flex justify-content-between align-items-center">

                <div class="d-flex flex-column mb-5">
                    <label for="taille">Taille</label>
                    <input type="number" name="taille"/>
                </div>
                <div class="d-flex flex-column justify-content-between mb-5">
                    <label for="forme">Forme</label>
                    <select name="forme">
                        <option value="arrondie">Arrondie</option>
                        <option value="forme">Carrée</option>
                        <option value="forme">Rectangulaire</option>
                        <option value="forme">Ovale</option>
                    </select> 
                </div>
            </div>

            <div class="d-flex flex-column mb-5">
                <label for="texte">Texte personnalisé</label>
                <input type="text"  placeholder="ex. : Lorem Ipsum" name="texte"/>
            </div>


            <div class="mb-5">
                <label>Couleur</label>
                <div class="d-flex flex-start mb-4">
                    <div 
                        @click="clickedColor='silver'" 
                        class="circle_color circle_color_silver" 
                        :class="clickedColor === 'silver' ? 'selected_color' : ''"
                    >
                        &nbsp;
                    </div>
                    <div 
                        @click="clickedColor='gold'" 
                        class="circle_color circle_color_gold"
                        :class="clickedColor === 'gold' ? 'selected_color' : ''"
                    >
                        &nbsp;
                    </div>
                    <div 
                        @click="clickedColor='pink'" 
                        class="circle_color circle_color_pink-gold"
                        :class="clickedColor === 'pink' ? 'selected_color' : ''"
                    >
                        &nbsp;
                    </div>

                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p>Couleur sélectionnée : <span :class="'color color_' + clickedColor">{{ clickedColor }}</span></p>
                    <button class="add-btn">Ajouter au panier</button>
                </div>
            </div>

        </div>
        
    </section>
</template>
<script lang="ts">
    export default {
        data() {
            return {
                clickedColor: 'silver',
            }
        }
    
    };
    
</script>