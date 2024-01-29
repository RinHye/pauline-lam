<template>
    <nav class="text-uppercase">
        <label>
            <input id="navBox" type="checkbox"/>
            <span class="menu">
                <span class="hamburger"></span>
            </span>
            <ul class="nav_links">
                <li @click="uncheck()" class="pb-4">
                    <a href="/">Accueil</a>
                </li>
                <li @click="uncheck()" class="pb-4">
                    <a href="#projets">Mes projets</a>
                </li>
                <li>
                    <a @click="uncheck()" href="#about">A propos de moi</a>
                </li>
            </ul>
        </label>
    </nav>
</template>
<!--
<script setup>

    defineProps({
        currentLink: {
            type: String,
            default: 'home'
        }
    })

</script>
-->

<script lang="ts">
    export default {
        data() {
            return {
                active: false,
            }
        },
        methods: {
            handleClick() {
                this.active = !this.active;
            },
            uncheck() {
                let input = document?.getElementById('navBox') as HTMLInputElement;
                if (input?.checked) {
                    input.checked = !(input.checked);
                }

            },
            handleScroll() {
                if(process.client){
                    const currentScrollPosition = window.scrollY
                    if(currentScrollPosition > 0){
                        let input = document?.getElementById('navBox') as HTMLInputElement;
                        if (input?.checked) {
                            input.checked = !(input.checked);
                        }
                    }

                }
            }
        },
        mounted() {
            if(process.client){
                    window.addEventListener("scroll", this.handleScroll);
            }
        },
    };
    
</script>