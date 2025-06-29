<script setup>
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '../../../stores/profile'
import { useColorStore } from '../../../stores/color'
import LazySection from '../../../components/LazySection.vue'

const { t } = useI18n()
const profileStore = useProfileStore()
const colorStore = useColorStore()
</script>

<template>
  <LazySection class="mb-16 p-4">
    <div class="flex items-center mb-10">
      <div class="mr-4 hidden md:block">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }">{{ t('home.objective').toUpperCase() }}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <LazySection class="rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 bg-white dark:bg-gray-800" :style="{ 'border-color': colorStore.currentColor.secondary }">
        <div class="flex items-center mb-4">
          <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.secondary + '30' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ t('home.shortTermTitle') }}</h3>
        </div>
        <ul class="ml-12 space-y-2">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
            </svg>
            <span class="block text-gray-700 dark:text-gray-300">{{ t('home.shortTermGoal') }}</span>
          </li>
        </ul>
      </LazySection>
      <LazySection class="rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 bg-white dark:bg-gray-800" :style="{ 'border-color': colorStore.currentColor.secondary }">
        <div class="flex items-center mb-4">
          <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.secondary + '30' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ t('home.longTermTitle') }}</h3>
        </div>
        <ul class="ml-12 space-y-2">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
            </svg>
            <span class="text-lg text-gray-700 dark:text-gray-300">{{ t('home.longTermGoal') }}</span>
          </li>
        </ul>
      </LazySection>
    </div>
  </LazySection>
</template>
