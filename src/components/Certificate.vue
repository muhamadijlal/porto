<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { defineProps } from 'vue'

defineProps({
    imgPath: String,
    title: String,
    date: String,
})
</script>

<template>
    <div class="my-11 sm:my-14">
        <img :src="imgPath" alt="certificates logo" class="size-8 bg-cover sm:size-12" />

        <div class="mt-3 space-y-3 sm:mt-8">
            <h1
                class="group inline-flex items-center gap-5 text-[12px] capitalize hover:underline sm:text-[18px]"
            >
                {{ title }}
                <ArrowUpRight
                    class="hidden size-4 font-semibold group-hover:inline-block sm:size-5"
                />
            </h1>

            <p class="line-clamp-2 text-[12px] text-black/70 sm:text-[18px]">
                <slot name="description"></slot>
            </p>

            <footer class="text-[12px] sm:text-[18px]">
                <span class="text-black/70">Issued on</span>
                <p>{{ date }}</p>
            </footer>
        </div>
    </div>
</template>
