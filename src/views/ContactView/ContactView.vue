<script setup>
import { useColorStore } from '../../stores/color'
import { useI18n } from 'vue-i18n'
import ContactInfoSection from './components/ContactInfoSection.vue'
import ContactFormSection from './components/ContactFormSection.vue'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'border-color': colorStore.currentColor.primary, 'color': colorStore.currentColor.primary }">{{ t('contact.title').toUpperCase() }}</h2>
        </div>

        <div class="flex flex-col md:flex-row gap-8 h-full">
          <div class="w-full md:w-1/2">
            <ContactInfoSection />
          </div>
          <div class="w-full md:w-1/2">
            <ContactFormSection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
