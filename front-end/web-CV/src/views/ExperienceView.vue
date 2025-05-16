<script setup>
import { useThemeStore } from '../stores/theme'
import { useColorStore } from '../stores/color'
import { useI18n } from 'vue-i18n'
import LazySection from '../components/LazySection.vue'

const themeStore = useThemeStore()
const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Experience section -->
      <LazySection threshold="0.1" rootMargin="100px" class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }">{{ t('experience.title').toUpperCase() }}</h2>
        </div>

        <div class="relative">
          <!-- Timeline bar -->
          <div class="absolute left-0 md:left-1/2 h-full w-1 transform md:translate-x-[-50%] rounded-full" :style="{ 'background-image': `linear-gradient(to bottom, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }"></div>

          <!-- Timeline items -->
          <div class="space-y-12">
            <!-- Experience 1 -->
            <div class="relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0">
              <!-- Ngày tháng mobile (chỉ hiển thị trên mobile) -->
              <div class="block md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20">
                <div class="text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ t('experience.date1') }}
                </div>
              </div>
              <div class="flex-1 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1 transition-all duration-300 transform hover:-translate-y-1 mt-6 md:mt-0">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-theme-primary">
                  <div class="flex flex-col">
                    <span class="text-xs font-semibold uppercase tracking-wider text-theme-primary dark:text-theme-secondary mb-1">{{ t('experience.date1') }}</span>
                    <h3 class="text-xl font-bold text-theme-primary dark:text-theme-secondary mb-2">{{ t('experience.company1') }}</h3>
                    <p class="text-theme-primary dark:text-theme-secondary font-medium mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {{ t('experience.position1') }}
                    </p>
                  </div>
                  <div class="pl-2 border-l-2 border-theme-secondary border-opacity-30 dark:border-theme-primary dark:border-opacity-30">
                    <h4 class="text-lg font-semibold text-theme-primary dark:text-theme-secondary mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {{ t('experience.department1') }}
                    </h4>
                    <ul class="list-none text-gray-600 space-y-2">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">Contributed to the development of an e-commerce system (details in the Team Project section).</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility1') }}</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">Collaborated with the backend team to integrate APIs and implement functionalities for user, product, and notification management.</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility2') }}</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility3') }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div  class="translate-x-[360px] absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[80px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10">
                <div :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }" class="h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="absolute w-24 h-px top-1/2 left-full transform -translate-y-1/2 hidden md:block" :style="{ 'background-image': `linear-gradient(to right, transparent, ${colorStore.currentColor.secondary}, transparent)` }"></div>
              </div>

              <div class="md:w-[45%] md:pl-8 md:text-left order-3 mt-6 md:mt-0">
                <div class="translate-y-[5px] text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-16 md:mt-28 inline-flex items-center hidden md:inline-flex" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ t('experience.date1') }}
                </div>
              </div>
            </div>

            <!-- Experience 2 -->
            <div class="relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0">
              <!-- Ngày tháng mobile (chỉ hiển thị trên mobile) -->
              <div class="block md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20">
                <div class="text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ t('experience.date2') }}
                </div>
              </div>
              <div class="translate-y-5 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1">
                <div class="text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-16 md:mt-28 hidden md:inline-flex items-center ml-auto relative z-20" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ t('experience.date2') }}
                </div>
              </div>

              <div class="translate-x-[360px] translate-y-4 absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[80px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10">
                <div :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }" class="h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div class="absolute w-24 h-px top-1/2 right-full transform -translate-y-1/2 hidden md:block" :style="{ 'background-image': `linear-gradient(to left, transparent, ${colorStore.currentColor.secondary}, transparent)` }"></div>
              </div>

              <div class="flex-1 md:w-[45%] md:pl-8 order-3 transition-all duration-300 transform hover:-translate-y-1 mt-4">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-r-4 border-theme-secondary">
                  <div class="flex flex-col">
                    <span class="text-xs font-semibold uppercase tracking-wider text-theme-primary mb-3">{{ t('experience.position2') }}</span>
                    <h3 class="text-2xl font-bold text-theme-primary dark:text-theme-secondary">{{ t('experience.company2') }}</h3>
                    <p class="text-theme-secondary font-medium mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {{ t('experience.position2') }}
                    </p>
                  </div>
                  <div class="pr-2 border-r-2 border-theme-secondary border-opacity-30">
                    <h4 class="text-lg font-semibold text-theme-primary dark:text-theme-secondary mb-2 flex items-center justify-end">
                      {{ t('experience.department2') }}
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-theme-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </h4>
                    <ul class="list-none text-gray-600 space-y-2">
                      <li class="flex items-start justify-end">
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility4') }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                      <li class="flex items-start justify-end">
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility5') }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                      <li class="flex items-start justify-end">
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility6') }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                      <li class="flex items-start justify-end">
                        <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility7') }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      <!-- Team Projects section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }">TEAM PROJECT</h2>
        </div>

        <!-- Project 1: C-to-C E-commerce Website -->
        <LazySection threshold="0.1" rootMargin="100px">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div class="p-8 relative">
            <div class="absolute top-0 right-0 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
              Featured Project
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-start mb-8 mt-8">
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-4" :style="{ 'background-color': colorStore.currentColor.primary }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold transition-colors" :style="{ 'color': colorStore.currentColor.primary }">C-to-C E-commerce Website</h3>
              </div>
              <div class="flex items-center font-medium mt-4 lg:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-theme-primary h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ t('projects.project1.date') }}
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 class="text-lg font-semibold text-theme-primary dark:text-theme-secondary mb-2">Name of customer</h4>
                <p class="text-gray-700 dark:text-gray-300">Worked on projects for corporate clients based in Korea.</p>
              </div>

              <div class="lg:col-span-2">
                <h4 class="text-lg font-semibold text-theme-primary dark:text-theme-secondary mb-2">Description project</h4>
                <p class="text-gray-700 dark:text-gray-300">Developed a feature-rich e-commerce platform with Super Admin controls (user/shop/product/category/promotion/banner management) and Web user features (auth, shopping, orders, reviews, seller tools, chat, notifications, and marketing).</p>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-6">
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Team Size</h4>
                </div>
                <div class="ml-11">
                  <div class="text-3xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">8</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Collaborative development team</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">My Role</h4>
                </div>
                <div class="ml-11">
                  <div class="font-bold" :style="{ 'color': colorStore.currentColor.primary }">Front End Developer</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Vue.js specialist focusing on user experience</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Technology Stack</h4>
                </div>
                <div class="ml-11 space-y-2">
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.primary + '20', 'color': colorStore.currentColor.primary }">Front End</span>
                    <span class="text-gray-700 dark:text-gray-300">Vue.js, Next.js</span>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.secondary + '20', 'color': colorStore.currentColor.secondary }">Back End</span>
                    <span class="text-gray-700 dark:text-gray-300">Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 mt-6">
              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Team Size</h4>
                </div>
                <div class="ml-11">
                  <div class="text-3xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">8</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Collaborative development team</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">My Role</h4>
                </div>
                <div class="ml-11">
                  <div class="font-bold" :style="{ 'color': colorStore.currentColor.primary }">Frontend Developer</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Vue.js specialist focusing on user experience</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Technology Stack</h4>
                </div>
                <div class="ml-11 space-y-2">
                  <div class="flex items-center">
                    <a href="https://team03-admin.cyvietnam.id.vn" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Admin Dashboard
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="https://team03.cyvietnam.id.vn" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      User Website
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Admin" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Admin Repository
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="https://github.com/vanminhtruong/Team03-cy/tree/main/Team03-Web" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      User Repository
                    </a>
                  </div>
                  <div class="flex items-center mt-3">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.primary + '20', 'color': colorStore.currentColor.primary }">Front End</span>
                    <span class="text-gray-700 dark:text-gray-300">Vue.js, Next.js</span>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.secondary + '20', 'color': colorStore.currentColor.secondary }">Back End</span>
                    <span class="text-gray-700 dark:text-gray-300">Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-white dark:from-gray-700 to-indigo-50 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-100 dark:border-gray-600 mt-8">
              <div class="flex items-center mb-4">
                <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Key Responsibilities</h4>
              </div>
              <div class="ml-11">
                <div class="mb-4">
                  <div class="flex items-center mb-2">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.primary + '20', 'color': colorStore.currentColor.primary }">Super Admin</span>
                  </div>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Developed authentication features, including login and logout functionality</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Implemented product approval system, enabling review, approval, and rejection of new products</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div class="flex items-center mb-2">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.primary + '20', 'color': colorStore.currentColor.primary }">User Features</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">Built functionality to add, edit, delete user addresses and set default addresses</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">Integrated VNPay for seamless online payment during checkout</span>
                      </li>
                    </ul>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">Developed features for order management, including order tracking and cancellation</span>
                      </li>
                      <li class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                        <span class="text-gray-700 dark:text-gray-400">Implemented delivery status management, allowing users and shop admins to track and update order statuses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </LazySection>

        <!-- Project 2: Library Management Website -->
        <LazySection threshold="0.1" rootMargin="100px">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div class="p-8 relative">
            <div class="absolute top-0 right-0 text-white px-6 py-2 rounded-bl-lg font-semibold text-sm uppercase tracking-wider shadow-md" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
              Solo Project
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-start mb-8 mt-8">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-theme-secondary dark:bg-theme-secondary rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">Library Management Website</h3>
              </div>
              <div class="flex items-center font-medium mt-4 lg:mt-0 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-white" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-theme-primary h-5 w-5 mr-2 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Project Description</h4>
              </div>
              <div class="ml-11 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Developed a comprehensive Library Management System with dual interfaces (Admin & User). Admin website features authentication system, books/categories management, borrowing tracking, fine management, user control, and multilingual support. User interface includes account management, book browsing/searching, borrowing management, dark/light mode theming, and responsive design.</p>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Team Size</h4>
                </div>
                <div class="ml-11">
                  <div class="text-3xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">1</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">Personal project development</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">My Role</h4>
                </div>
                <div class="ml-11">
                  <div class="font-bold" :style="{ 'color': colorStore.currentColor.primary }">Full Stack Developer</div>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">End-to-end implementation of all features</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-purple-100 dark:border-gray-600 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div class="flex items-center mb-3">
                  <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Technology Stack</h4>
                </div>
                <div class="ml-11 space-y-2">
                  <div class="flex items-center">
                    <a href="https://github.com/vanminhtruong/libary.git" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Repository
                    </a>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.primary + '20', 'color': colorStore.currentColor.primary }">Front End</span>
                    <span class="text-gray-700 dark:text-gray-300">Vue.js, React.js</span>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2 py-1 text-xs font-medium rounded mr-2" :style="{ 'background-color': colorStore.currentColor.secondary + '20', 'color': colorStore.currentColor.secondary }">Back End</span>
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
                <h4 class="text-lg font-semibold" :style="{ 'color': colorStore.currentColor.primary }">Key Responsibilities</h4>
              </div>
              <div class="ml-11">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Led full-stack development from initial design to deployment</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Implemented secure authentication and role-based access control</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Developed comprehensive book management system with CRUD operations</span>
                    </li>
                  </ul>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Built borrowing tracking system and fine management features</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Created responsive UI/UX design with Vue.js and React.js frontends</span>
                    </li>
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-theme-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-400">Designed and implemented RESTful APIs with Laravel backend</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </LazySection>
      </div>
    </div>
  </div>
</template>
