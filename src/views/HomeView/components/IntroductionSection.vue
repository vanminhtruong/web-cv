<script setup>
import { useI18n } from 'vue-i18n'
import { useColorStore } from '../../../stores/color'
import LazySection from '../../../components/LazySection.vue'

const { t } = useI18n()
const colorStore = useColorStore()
</script>

<template>
  <LazySection class="mb-16 p-4">
    <div class="flex items-center mb-10">
      <div class="mr-4 hidden md:block">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
      <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }">{{ t('about.title').toUpperCase() }}</h2>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-6 transform hover:-translate-y-1 border-l-4" :style="{ 'border-color': colorStore.currentColor.primary }">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {{ t('about.content') }}
      </p>
    </div>
  </LazySection>
</template>
