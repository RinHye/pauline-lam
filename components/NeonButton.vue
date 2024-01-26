<template>
    <div class="div-btn-neon">
        <NuxtLink :to="link" class="unstyled-link btn-label btn-neon">
        {{ labelBtn }}
        </NuxtLink>
    </div>
</template>
<script setup>
    defineProps({
        labelBtn: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: '/'
        },
    })
</script>