<template>
    <div class="d-flex flex-column text-left cards">
        <div class="mb-5 img-neon-border">
            <img :src="image" alt="photo du projet"/>
        </div>
        <h2>{{ title }}</h2>
        <p class="subtitle_card">{{ subtitle }}</p>
        <!--
        <div class="main-content-cards">
            <div v-for="content in contents">
                <h3 v-if="!content.isList">{{ content.title }}</h3>
                <ul v-if="content.isList" :aria-label="content.title">
                    <li v-for="bullet in content.bullet_list">
                        {{ bullet }}
                    </li>
                </ul>
                <p v-else>
                    {{ content.description }}
                </p>
            </div>
        </div>
        -->

        <NeonButton class="d-flex" :label-btn="'En savoir plus'" :link="'projet/' + link" />

    </div>
</template>
<script setup>
    defineProps({
        image: {
            type: String,
            default: 'images/projets/Alpiq.jpg'
        },
        title: {
            type: String,
            default: 'Projet'
        },
        subtitle: {
            type: String,
            default: ''
        },
        /*contents: {
            type: [],
            default: []
        },*/
        link: {
            type: String,
            default: 'projet/alpiq'
        }
    })
</script>

