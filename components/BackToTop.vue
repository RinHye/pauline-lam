<template>
    <a href="#" :class="classList">
        <svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="ph:caret-up-light" clip-path="url(#clip0_978_32)">
                <path id="Vector" d="M1.48693 0.573919C1.85378 0.207527 2.35106 0.00172997 2.86954 0.00172997C3.38802 0.00172997 3.8853 0.207527 4.25215 0.573919L28.9565 25.275L53.6608 0.573919C54.0317 0.228319 54.5223 0.0401745 55.0292 0.049118C55.536 0.0580616 56.0197 0.263395 56.3781 0.621864C56.7366 0.980333 56.9419 1.46395 56.9509 1.97082C56.9598 2.47769 56.7717 2.96825 56.4261 3.33914L30.3391 29.4261C29.9723 29.7925 29.475 29.9983 28.9565 29.9983C28.438 29.9983 27.9407 29.7925 27.5739 29.4261L1.48693 3.33914C1.12054 2.97229 0.914742 2.47501 0.914742 1.95653C0.914742 1.43805 1.12054 0.940769 1.48693 0.573919Z" fill="url(#paint0_linear_978_32)"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_978_32" x1="29" y1="-5" x2="29" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#01B0D3"/>
                    <stop offset="1" stop-color="#D794FA"/>
                </linearGradient>
                <clipPath id="clip0_978_32">
                <rect width="56.087" height="30" fill="white" transform="matrix(-1 0 0 -1 57 30)"/>
                </clipPath>
            </defs>
        </svg>
        <p class="btn-label mt-3">{{ labelButton }}</p>
    </a>
</template>

<script lang="ts">
    export default {
        props: {
            classList: {
                type: String,
                default: 'backToTop'
            },
            labelButton: {
                type: String,
                default: 'Revenir en haut'
            }
        }
    }
</script>