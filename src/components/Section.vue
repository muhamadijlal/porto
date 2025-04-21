<script setup>
defineProps({
    title: String,
})
</script>

<template>
    <div class="mt-5 space-y-1 sm:mt-12 sm:space-y-[7px]">
        <p class="text-[14px] font-semibold capitalize sm:text-[20px]">{{ title }}</p>
        <p class="text-justify text-[12px] leading-[17px] sm:text-[18px] sm:leading-[30px]">
            <slot name="description"></slot>
        </p>
        <slot></slot>
    </div>
</template>
