<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
    role: String,
    at: String,
    target: String,
    rangeYear: String,
    description: String,
    isInternship: {
        type: Boolean,
        default: false,
    },
    stacks: {
        type: Array,
        default: () => [],
    },
})

const spreadStacks = computed(() => {
    return props.stacks.map((stack) => stack.charAt(0).toUpperCase() + stack.slice(1)).join(' • ')
})
</script>

<template>
    <div class="mt-7 space-y-3 sm:mt-14 sm:mb-11 sm:space-y-4">
        <div class="flex items-end justify-between">
            <div class="group flex items-end gap-3 text-[12px] sm:text-[20px]">
                <div class="capitalize">
                    <a target="_blank" :href="target" class="flex flex-col group-hover:underline">
                        <p>
                            {{ role }}
                            <span v-if="isInternship" class="capitalize">| Internship</span>
                        </p>
                        <p>{{ at }}</p>
                    </a>
                </div>

                <ArrowUpRight class="size-4 opacity-0 group-hover:opacity-100 sm:size-8" />
            </div>

            <span class="text-[12px] text-black/70 sm:text-[18px]">{{ rangeYear }}</span>
        </div>

        <p class="line-clamp-5 text-[12px] text-black/70 sm:text-[18px] sm:leading-[30px]">
            <slot name="description"></slot>
        </p>

        <p class="text-[12px] sm:text-[18px]">
            {{ spreadStacks }}
        </p>
    </div>
</template>
