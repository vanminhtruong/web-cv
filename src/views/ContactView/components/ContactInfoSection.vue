<script setup>
import { useColorStore } from '../../../stores/color'
import { useI18n } from 'vue-i18n'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-l-4 h-full flex flex-col" :style="{ 'border-color': colorStore.currentColor.primary }">
      <div class="flex items-center mb-6">
        <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ t('contact.title') }}</h3>
      </div>

      <div class="space-y-6 mt-8">
        <div class="bg-gradient-to-br from-white to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-200 dark:border-gray-600 flex items-start space-x-4 transform transition-all duration-300 hover:-translate-y-1">
          <div class="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-medium text-gray-800 dark:text-white mb-1">{{ t('about.phone') }}</h4>
            <p class="text-gray-700 dark:text-white flex items-center">
              <span class="px-3 py-1 rounded-full text-sm font-medium text-white mr-2" :style="{ 'background-color': colorStore.currentColor.primary }">{{ t('contact.mobile') }}</span>
              {{ t('contact.phoneNumber') }}
            </p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-white to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-200 dark:border-gray-600 flex items-start space-x-4 transform transition-all duration-300 hover:-translate-y-1">
          <div class="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-medium text-gray-800 dark:text-white mb-1">{{ t('about.email') }}</h4>
            <p class="text-gray-700 dark:text-white">
              <a href="mailto:vanminhtruong95@gmail.com" class="text-gray-700 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-300 transition-colors">{{ t('contact.emailAddress') }}</a>
            </p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-white to-indigo-100 dark:from-gray-700 dark:to-gray-600 p-5 rounded-lg shadow-sm border border-indigo-200 dark:border-gray-600 flex items-start space-x-4 transform transition-all duration-300 hover:-translate-y-1">
          <div class="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.secondary}, ${colorStore.currentColor.primary})` }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-medium text-gray-800 dark:text-white mb-1">{{ t('about.address') }}</h4>
            <p class="text-gray-700 dark:text-white">{{ t('about.addressValue') }}</p>
          </div>
        </div>
      </div>

      <div class="mt-10 bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border dark:border-gray-600" :style="{ 'border-color': colorStore.currentColor.secondary }">
        <div class="flex items-center mb-4">
          <div class="h-8 w-8 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-color': colorStore.currentColor.primary }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-800 dark:text-white">{{ t('contact.title') }}</h4>
        </div>
        <div class="flex flex-wrap gap-3 ml-11">
          <a href="https://github.com/vanminhtruong/Team03-cy.git" class="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-md hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {{ t('contact.githubProject') }}
          </a>
          <a href="https://github.com/vanminhtruong/libary.git" class="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-md hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {{ t('contact.libraryProject') }}
          </a>
          <a href="https://team03-admin.cyvietnam.id.vn" class="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 transform hover:-translate-y-1" :style="{ 'background-color': colorStore.currentColor.secondary + '40', 'color': colorStore.currentColor.primary }" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0l-7.07-4.42c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72l6.7 4.19 6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/>
            </svg>
            Admin Dashboard
          </a>
          <a href="https://github.com/vanminhtruong" target="_blank" class="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 transform hover:-translate-y-1" :style="{ 'background-color': colorStore.currentColor.secondary + '20', 'color': colorStore.currentColor.primary }" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
            </svg>
            {{ t('contact.projectWebsite') }}
          </a>
          <a href="https://team03.cyvietnam.id.vn" class="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 transform hover:-translate-y-1" :style="{ 'background-color': colorStore.currentColor.secondary + '20', 'color': colorStore.currentColor.primary }" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
            </svg>
            {{ t('contact.projectWebsite') }}
          </a>
        </div>
      </div>
    </div>
</template>
