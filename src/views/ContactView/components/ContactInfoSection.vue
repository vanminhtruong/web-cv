<script setup>
import { useColorStore } from '../../../stores/color'
import { useI18n } from 'vue-i18n'
import { useContactInfo } from '../../HomeView/composables/useContactInfo'

const colorStore = useColorStore()
const { t } = useI18n()
const { contactItems, getPdfPath } = useContactInfo()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-l-4 h-full flex flex-col" :style="{ 'border-color': colorStore.currentColor.primary }">
      <div class="flex items-center mb-6">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ t('contact.title') }}</h3>
      </div>

      <!-- Phone -->
      <div class="flex items-center mb-5">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center mr-4" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.primary }">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ t('about.phone') }}</div>
          <a href="tel:0982743860" class="text-base font-medium text-gray-900 dark:text-white">0982743860</a>
        </div>
      </div>

      <!-- Email -->
      <div class="flex items-center mb-5">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center mr-4" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.primary }">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ t('about.email') }}</div>
          <a href="mailto:vanminhtruong95@gmail.com" class="text-base font-medium text-gray-900 dark:text-white">vanminhtruong95@gmail.com</a>
        </div>
      </div>

      <!-- GitHub -->
      <div class="flex items-center mb-5">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center mr-4" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" :style="{ 'color': colorStore.currentColor.primary }">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</div>
          <a href="https://github.com/vanminhtruong" target="_blank" rel="noopener noreferrer" class="text-base font-medium text-gray-900 dark:text-white">vanminhtruong</a>
        </div>
      </div>

      <!-- Address -->
      <div class="flex items-center mb-5">
        <div class="h-12 w-12 rounded-lg flex items-center justify-center mr-4" :style="{ 'background-color': colorStore.currentColor.primary + '20' }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.primary }">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ t('about.address') }}</div>
          <div class="text-base font-medium text-gray-900 dark:text-white">{{ t('about.addressValue') }}</div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>

      <!-- Links Section -->
      <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-4">{{ t('nav.links') }}</h4>
      
      <!-- GitHub Project -->
      <a href="https://github.com/vanminhtruong/Team03-cy.git" target="_blank" rel="noopener noreferrer" class="flex items-center mb-3 group">
        <div class="h-10 w-10 rounded-full flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
        <span class="text-base font-medium group-hover:text-opacity-80 transition-all duration-300" :style="{ 'color': colorStore.currentColor.primary }">{{ t('contact.githubProject') }}</span>
      </a>

      <!-- Library Project -->
      <a href="https://github.com/vanminhtruong/libary" target="_blank" rel="noopener noreferrer" class="flex items-center mb-3 group">
        <div class="h-10 w-10 rounded-full flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <span class="text-base font-medium group-hover:text-opacity-80 transition-all duration-300" :style="{ 'color': colorStore.currentColor.primary }">{{ t('contact.libraryProject') }}</span>
      </a>

      <!-- Project Website -->
      <a href="#" target="_blank" rel="noopener noreferrer" class="flex items-center mb-5 group">
        <div class="h-10 w-10 rounded-full flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <span class="text-base font-medium group-hover:text-opacity-80 transition-all duration-300" :style="{ 'color': colorStore.currentColor.primary }">{{ t('contact.projectWebsite') }}</span>
      </a>

      <!-- Download CV Button -->
      <a :href="getPdfPath()" class="inline-flex items-center justify-center py-2 px-4 rounded-md text-white font-medium transition-all duration-300 hover:opacity-90 mt-2 bg-red-500 hover:bg-red-600 w-auto self-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {{ t('home.downloadCV') }}
      </a>
    </div>
</template>

<style scoped>
.dark .text-gray-900 {
  color: white;
}
</style>
