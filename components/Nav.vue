<template>
    <nav>
        <div class="d-block d-md-none">
            <button @click="handleClick()" :class="active ? 'active' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path class="menu-top" d="M1 10L35 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="menu-bottom" d="M1 25L35 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <div class="d-md-block d-none nav-desktop">
            
        </div>
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
        }
    };
    
</script>