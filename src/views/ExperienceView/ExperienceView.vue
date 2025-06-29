<script setup>
import { useColorStore } from '../../stores/color'
import { useI18n } from 'vue-i18n'
import LazySection from '../../components/LazySection.vue'
import WorkExperienceSection from './components/WorkExperienceSection.vue'
import TeamProjectSection from './components/TeamProjectSection.vue'
import SoloProjectSection from './components/SoloProjectSection.vue'

const colorStore = useColorStore()
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <LazySection threshold="0.1" rootMargin="100px" class="mb-16">
        <WorkExperienceSection />
      </LazySection>

      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 rounded-lg flex items-center justify-center shadow-md" :style="{ 'background-color': colorStore.currentColor.primary }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold inline-block pb-2 border-b-4 transform transition-all duration-300 hover:scale-105" :style="{ 'color': colorStore.currentColor.primary, 'border-color': colorStore.currentColor.primary }">{{ t('projects.title').toUpperCase() }}</h2>
        </div>

        <TeamProjectSection />
        <SoloProjectSection />
      </div>
    </div>
  </div>
</template>
