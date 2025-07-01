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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'border-color': colorStore.currentColor.primary, 'color': colorStore.currentColor.primary }">{{ t('skills.title').toUpperCase() }}</h2>
    </div>
    
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-l-4" :style="{ 'border-color': colorStore.currentColor.primary }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div class="mb-8">
            <div class="flex items-center mb-5">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('skills.frontEnd') }}</h3>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-200 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                VueJS
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-200 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                ReactJS
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-200 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                TaiWind
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-200 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                NuxtJS
              </span>
            </div>
          </div>
          
          <div class="mb-8">
            <div class="flex items-center mb-5">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('skills.backEnd') }}</h3>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg text-sm font-medium border border-emerald-200 dark:border-emerald-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Laravel
              </span>
            </div>
          </div>
          
          <div class="mb-8">
            <div class="flex items-center mb-5">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('skills.languages') }}</h3>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span class="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-lg text-sm font-medium border border-cyan-200 dark:border-cyan-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                MySQL
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <div class="mb-8">
            <div class="flex items-center mb-5">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('skills.tools') }}</h3>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                GitHub
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Jira
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Figma
              </span>
            </div>
          </div>
          
          <div>
            <div class="flex items-center mb-5">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ t('skills.aiTools') }}</h3>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                GitHub Copilot
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Cursor AI
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Windsurf IDE
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                ChatGPT
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                GrokAI
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Claude AI
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                DeepSeek
              </span>
              <span class="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-200 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Perplexity AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LazySection>
</template>
