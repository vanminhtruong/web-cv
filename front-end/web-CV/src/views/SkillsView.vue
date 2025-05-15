<script setup>
import { useThemeStore } from '../stores/theme'
import { useI18n } from 'vue-i18n'

const themeStore = useThemeStore()
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Education section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 bg-theme-primary rounded-lg flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-theme-primary dark:text-theme-secondary inline-block pb-2 border-b-4 border-theme-primary transform transition-all duration-300 hover:scale-105">{{ t('education.title').toUpperCase() }}</h2>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 transform hover:-translate-y-1 border-l-4 border-theme-primary">
          <div class="flex flex-col md:flex-row justify-between items-start mb-6">
            <div class="flex items-start">
              <div class="h-12 w-12 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-theme-primary dark:text-theme-secondary">{{ t('education.schoolName') }}</h3>
                <p class="text-lg font-medium text-theme-primary mt-1">{{ t('education.major') }}</p>
                <div class="text-gray-600 dark:text-gray-400 mt-1">{{ t('education.location') }}</div>
              </div>
            </div>
            <div class="bg-theme-secondary bg-opacity-10 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm mt-4 md:mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-theme-primary dark:text-theme-secondary font-medium">{{ t('education.period') }}</span>
            </div>
          </div>
          
          <div class="ml-16 mt-6 bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border border-theme-secondary border-opacity-30 dark:border-gray-600">
            <div class="flex items-center mb-4">
              <div class="h-8 w-8 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-theme-primary dark:text-theme-secondary">{{ t('education.degree') }}</h4>
            </div>
            <ul class="ml-11 space-y-2">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                <span>{{ t('skills.course1') }}</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                <span>{{ t('skills.course2') }}</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                <span>{{ t('skills.course3') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Skills section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 bg-theme-primary rounded-lg flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-theme-primary dark:text-theme-secondary inline-block pb-2 border-b-4 border-theme-primary transform transition-all duration-300 hover:scale-105">{{ t('skills.title').toUpperCase() }}</h2>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-l-4 border-theme-primary">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="mb-8">
                <div class="flex items-center mb-5">
                  <div class="h-10 w-10 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-theme-primary dark:text-theme-secondary">{{ t('skills.frontend') }}</h3>
                </div>
                <div class="flex flex-wrap gap-2 ml-13">
                  <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-100 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    VueJS
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-100 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    ReactJS
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-100 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    TaiWind
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-100 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    NuxtJS
                  </span>
                </div>
              </div>
              
              <div class="mb-8">
                <div class="flex items-center mb-5">
                  <div class="h-10 w-10 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-theme-primary dark:text-theme-secondary">Back End</h3>
                </div>
                <div class="flex flex-wrap gap-2 ml-13">
                  <span class="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg text-sm font-medium border border-emerald-100 dark:border-emerald-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Laravel
                  </span>
                </div>
              </div>
              
              <div class="mb-8">
                <div class="flex items-center mb-5">
                  <div class="h-10 w-10 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-theme-primary dark:text-theme-secondary">Database</h3>
                </div>
                <div class="flex flex-wrap gap-2 ml-13">
                  <span class="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-lg text-sm font-medium border border-cyan-100 dark:border-cyan-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
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
                  <div class="h-10 w-10 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Other Tools</h3>
                </div>
                <div class="flex flex-wrap gap-2 ml-13">
                  <span class="px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-100 dark:border-purple-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    GitHub
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-100 dark:border-purple-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Jira
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-100 dark:border-purple-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Figma
                  </span>
                </div>
              </div>
              
              <div>
                <div class="flex items-center mb-5">
                  <div class="h-10 w-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">AI Tools</h3>
                </div>
                <div class="flex flex-wrap gap-2 ml-13">
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    GitHub Copilot
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Cursor AI
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Windsurf IDE
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    ChatGPT
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    GrokAI
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Claude AI
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    DeepSeek
                  </span>
                  <span class="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-800 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Perplexity AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
