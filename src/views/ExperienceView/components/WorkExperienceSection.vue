<script setup>
import { useColorStore } from '../../../stores/color'
import { useI18n } from 'vue-i18n'
import LazySection from '../../../components/LazySection.vue'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <LazySection threshold="0.1" rootMargin="100px" class="mb-16 p-4">
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
      <div class="absolute -ml-6 md:ml-0 left-0 md:left-1/2 h-full w-1 transform md:translate-x-[-50%] rounded-full" :style="{ 'background-image': `linear-gradient(to bottom, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }"></div>
      <div class="space-y-12">
        <div class="relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0">
          <!-- thanh ngang 1 -->
          <div class="tablet:hidden lg:hidden xl:hidden absolute left-0 md:left-1/2 top-20 md:top-1/2 transform translate-x-[-22px] -translate-y-[-260px] z-10">
            <div class="h-0.5 w-6" :style="{ 'background': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }"></div>
          </div>
          <div class="block md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20 flex items-center gap-2">
            <div class="h-8 w-8 rounded-full flex items-center justify-center shadow-lg" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ t('experience.date1') }}
            </div>
          </div>
          <div class="flex-1 md:w-[45%] md:pr-8 md:text-right order-2 md:order-1 transition-all duration-300 transform hover:-translate-y-1 mt-6 md:mt-0">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4" :style="{ 'border-color': colorStore.currentColor.primary }">
              <div class="flex flex-col">
                <span class="text-xs font-semibold uppercase tracking-wider mb-1" :style="{ 'color': colorStore.currentColor.primary }">{{ t('experience.date1') }}</span>
                <h3 class="text-xl font-bold mb-2" :style="{ 'color': colorStore.currentColor.primary }">{{ t('experience.company1') }}</h3>
                <p class="font-medium mb-4 flex items-center" :style="{ 'color': colorStore.currentColor.primary }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {{ t('experience.position1') }}
                </p>
              </div>
              <div class="pl-2 border-l-2 border-opacity-30" :style="{ 'border-color': colorStore.currentColor.secondary }">
                <h4 class="text-lg font-semibold mb-2 flex items-center" :style="{ 'color': colorStore.currentColor.primary }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" :style="{ 'color': colorStore.currentColor.primary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ t('experience.department1') }}
                </h4>
                <ul class="list-none text-gray-600 space-y-2">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility1') }}</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility3') }}</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility2') }}</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility3') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="translate-x-[360px] absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[80px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10 hidden md:block">
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

        <div class="relative flex flex-col md:flex-row items-start md:justify-between group pt-14 md:pt-0">
          <!-- thanh ngang 2 -->
          <div class="absolute md:hidden translate-x-[-100px] absolute left-0 md:left-1/2 top-20 md:top-1/2 transform translate-x-[-24px] -translate-y-[-200px] z-10">
            <div class="h-0.5 w-6" :style="{ 'background': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }"></div>
          </div>
          <!-- Ngày tháng mobile (chỉ hiển thị trên mobile) -->
          <div  class="md:hidden w-full mb-8 px-4 absolute top-0 left-0 right-0 z-20">
            <div class="ml-[43px] text-white font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }">
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

          <div class="lg:translate-x-[360px] translate-y-4 absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-[-15px] left-[-5px] md:top-auto md:mt-28 order-1 md:order-2 ml-6 md:ml-0 z-10">
            <div  :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }" class="lg:opacity-0 h-12 w-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg] hidden md:flex ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <!-- Icon code cạnh ngày tháng ở mobile -->
            <div class="h-8 w-8 rounded-full flex items-center justify-center shadow-lg md:hidden" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="absolute w-24 h-px top-1/2 right-full transform -translate-y-1/2 hidden md:block" :style="{ 'background-image': `linear-gradient(to left, transparent, ${colorStore.currentColor.secondary}, transparent)` }"></div>
          </div>

          <div class="flex-1 md:w-[45%] md:pl-8 order-3 transition-all duration-300 transform hover:-translate-y-1 mt-4">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-r-4" :style="{ 'border-color': colorStore.currentColor.secondary }">
              <div class="flex flex-col">
                <span class="text-xs font-semibold uppercase tracking-wider mb-3" :style="{ 'color': colorStore.currentColor.primary }">{{ t('experience.position2') }}</span>
                <h3 class="text-2xl font-bold" :style="{ 'color': colorStore.currentColor.primary }">{{ t('experience.company2') }}</h3>
                <p class="font-medium mb-4 flex items-center" :style="{ 'color': colorStore.currentColor.secondary }">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {{ t('experience.position2') }}
                </p>
              </div>
              <div class="pr-2 border-r-2 border-opacity-30" :style="{ 'border-color': colorStore.currentColor.secondary }">
                <h4 class="text-lg font-semibold mb-2 flex items-center justify-end" :style="{ 'color': colorStore.currentColor.primary }">
                  {{ t('experience.department2') }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </h4>
                <ul class="list-none text-gray-600 space-y-2">
                  <li class="flex items-start justify-end">
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility4') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </li>
                  <li class="flex items-start justify-end">
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility5') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </li>
                  <li class="flex items-start justify-end">
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility6') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                    </svg>
                  </li>
                  <li class="flex items-start justify-end">
                    <span class="text-gray-700 dark:text-gray-400">{{ t('experience.responsibility7') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 flex-shrink-0 mt-0.5" :style="{ 'color': colorStore.currentColor.secondary }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
</template>
