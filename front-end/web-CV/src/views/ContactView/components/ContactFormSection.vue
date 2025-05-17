<script setup>
import { useColorStore } from '../../../stores/color'
import { useI18n } from 'vue-i18n'
import LazySection from '../../../components/LazySection.vue'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <LazySection threshold="0.1" rootMargin="100px" class="h-full">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1 border-r-4 h-full flex flex-col" :style="{ 'border-color': colorStore.currentColor.primary }">
      <div class="flex items-center mb-6">
        <div class="h-10 w-10 rounded-lg flex items-center justify-center mr-3" :style="{ 'background-image': `linear-gradient(to right, ${colorStore.currentColor.primary}, ${colorStore.currentColor.secondary})` }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ t('contact.send') }}</h3>
      </div>

      <form action="#" method="POST" class="space-y-6 flex-grow">
        <div class="group">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200">{{ t('contact.name') }}</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input type="text" id="name" name="name" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200" :style="{ '--tw-ring-color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }" :placeholder="t('contact.namePlaceholder')" />
          </div>
        </div>

        <div class="group">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200">{{ t('contact.email') }}</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input type="email" id="email" name="email" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200" :style="{ '--tw-ring-color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }" :placeholder="t('contact.emailPlaceholder')" />
          </div>
        </div>

        <div class="group">
          <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200">{{ t('contact.subject') }}</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </div>
            <input type="text" id="subject" name="subject" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200" :style="{ '--tw-ring-color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }" :placeholder="t('contact.subjectPlaceholder')" />
          </div>
        </div>

        <div class="group">
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors duration-200">{{ t('contact.message') }}</label>
          <div class="relative">
            <div class="absolute top-3 left-3 flex items-start pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <textarea id="message" name="message" rows="5" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 placeholder-gray-400 dark:placeholder-gray-300 transition-all duration-200" :style="{ '--tw-ring-color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }" :placeholder="t('contact.messagePlaceholder')"></textarea>
          </div>
        </div>

        <div>
          <button type="submit" class="w-full text-white font-medium py-3 px-4 rounded-lg shadow-md hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center" :style="{ 'background-color': colorStore.currentColor.primary, '--tw-ring-color': colorStore.currentColor.primary }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {{ t('contact.send') }}
          </button>
        </div>
      </form>
    </div>
  </LazySection>
</template>
