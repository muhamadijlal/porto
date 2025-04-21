<script setup>
import { defineProps } from 'vue'

defineProps({
    url: String,
})
</script>

<template>
    <div class="size-5 bg-contain sm:size-8" :style="{ backgroundImage: `url(${url})` }"></div>
</template>
