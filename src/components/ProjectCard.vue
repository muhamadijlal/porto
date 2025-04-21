<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { defineProps } from 'vue'
import StackItem from '@/components/StackItem.vue'

const props = defineProps({
    title: String,
    imgPath: String,
    urlProject: String,
    createdYear: String,
    description: String,
    stacks: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <div class="w-full rounded-xl bg-black/10 p-4 sm:rounded-2xl sm:p-5">
        <a
            :href="urlProject"
            class="group relative flex h-36 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-black/20 bg-cover bg-no-repeat text-[12px] font-semibold text-white transition-all duration-300 ease-out sm:h-[225px] sm:text-[18px]"
            :style="{ backgroundImage: `url(${imgPath})` }"
        >
            <!-- Backdrop layer (appear on hover) -->
            <div
                class="backdrop-blur-0 absolute inset-0 z-0 bg-black/0 transition-all duration-300 ease-in-out group-hover:bg-black/40 group-hover:backdrop-blur-sm"
            ></div>

            <!-- Content (on top of backdrop) -->
            <p
                class="z-10 hidden opacity-0 transition-all duration-300 ease-in-out group-hover:block group-hover:opacity-100"
            >
                View Project
            </p>
            <ArrowUpRight
                :size="14"
                class="z-10 hidden font-semibold opacity-0 transition-all duration-300 ease-in-out group-hover:block group-hover:opacity-100"
            />
        </a>

        <div class="mt-5 space-y-4 text-left sm:space-y-8">
            <div>
                <h1 class="truncate text-[12px] font-semibold capitalize sm:text-[18px]">
                    {{ title }}
                </h1>
                <p class="text-[12px] text-black/70 sm:text-[18px]">Made in • {{ createdYear }}</p>
            </div>

            <span class="line-clamp-4 text-[12px] text-black/70 sm:text-[18px]">
                {{ description }}
            </span>

            <div class="flex items-center gap-3">
                <StackItem v-for="stack in stacks" :key="stack.id" :url="stack.url" />
            </div>
        </div>
    </div>
</template>
