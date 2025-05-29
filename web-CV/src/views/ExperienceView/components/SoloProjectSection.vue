<script setup>
import { useColorStore } from '../../../stores/color'
import { useI18n } from 'vue-i18n'
import LazySection from '../../../components/LazySection.vue'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <LazySection threshold="0.1" rootMargin="100px">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div class="p-8 relative">
        <div class="absolute top-0 right-0 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
          {{ t('projects.soloProject') }}
        </div>
        <div class="flex flex-col tablet:flex-col lg:flex-col xl:flex-row justify-between items-start mb-8 mt-8">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-4" :style="{ 'background-color': colorStore.currentColor.secondary }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.project2.title') }}</h3>
          </div>
          <div class="flex items-center font-medium mt-4 tablet:mt-4 lg:mt-4 xl:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ t('projects.project2.date') }}
          </div>
        </div>

        <div class="mb-8">
          <div class="flex items-center mb-3">
            <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.project2.description').split('.')[0] }}</h4>
          </div>
          <div class="ml-11 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>{{ t('projects.project2.description') }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 tablet:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="flex items-center mb-3">
              <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.teamSize') }}</h4>
            </div>
            <div class="ml-11">
              <div class="text-3xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">1</div>
              <p class="text-gray-600 dark:text-gray-300 text-sm">{{ t('projects.project2.teamSizeDescription') }}</p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="flex items-center mb-3">
              <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.myRole') }}</h4>
            </div>
            <div class="ml-11">
              <div class="font-bold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.project2.role') }}</div>
              <p class="text-gray-600 dark:text-gray-300 text-sm">{{ t('projects.project2.roleDescription') }}</p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="flex items-center mb-3">
              <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.technologyStack') }}</h4>
            </div>
            <div class="ml-11 space-y-2">
              <div class="flex items-center">
                <a href="https://github.com/vanminhtruong/libary.git" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {{ t('contact.libraryProject') }}
                </a>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.primary + '20', 'color': colorStore.currentColor.primary }">{{ t('projects.frontEnd') }}</span>
                <span class="text-gray-700 dark:text-gray-300">Vue.js, React.js</span>
              </div>
              <div class="flex items-center">
                <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.secondary + '20', 'color': colorStore.currentColor.secondary }">{{ t('projects.backEnd') }}</span>
                <span class="text-gray-700 dark:text-gray-300">Laravel</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600">
          <div class="flex items-center mb-4">
            <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('projects.keyResponsibilities') }}</h4>
          </div>
          <div class="ml-11">
            <div class="grid grid-cols-1 tablet:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-400">{{ t('projects.project2.responsibility1') }}</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-400">{{ t('projects.project2.responsibility2') }}</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-400">{{ t('projects.project2.responsibility3') }}</span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-400">{{ t('projects.project2.responsibility4') }}</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-400">{{ t('projects.project2.responsibility5') }}</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-400">{{ t('projects.project2.responsibility6') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LazySection>
</template>
