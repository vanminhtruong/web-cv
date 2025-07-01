<script setup>
import { useColorStore } from '../../../stores/color'
import { useI18n } from 'vue-i18n'
import LazySection from '../../../components/LazySection.vue'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <LazySection class="mb-16 p-4">
    <div class="flex items-center mb-10">
      <div class="mr-4 hidden md:block">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
      <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'border-color': colorStore.currentColor.primary, 'color': colorStore.currentColor.primary }">{{ t('education.title').toUpperCase() }}</h2>
    </div>
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 transform hover:-translate-y-1 border-l-4" :style="{ 'border-color': colorStore.currentColor.primary }">
      <div class="flex flex-col md:flex-row justify-between items-start mb-6">
        <div class="flex items-start">
          <div class="h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0" :style="{ 'background-color': colorStore.currentColor.primary }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('education.schoolName') }}</h3>
            <p class="text-lg font-medium mt-1" :style="{ 'color': colorStore.currentColor.primary }">{{ t('education.major') }}</p>
            <div class="text-gray-600 dark:text-gray-400 mt-1">{{ t('education.location') }}</div>
          </div>
        </div>
        <div class="flex items-center font-medium mt-4 md:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="font-medium">{{ t('education.period') }}</span>
        </div>
      </div>
      
      <div class="ml-16 mt-6 bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border dark:border-gray-600" :style="{ 'border-color': colorStore.currentColor.secondary }">
        <div class="flex items-center mb-4">
          <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('education.degree') }}</h4>
        </div>
        <ul class="ml-11 space-y-2">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
            </svg>
            <span>{{ t('skills.course1') }}</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
            </svg>
            <span>{{ t('skills.course2') }}</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
            </svg>
            <span>{{ t('skills.course3') }}</span>
          </li>
        </ul>
      </div>
    </div>
  </LazySection>
</template>
