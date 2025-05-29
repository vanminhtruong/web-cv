<script setup>
import { useThemeStore } from '../../stores/theme'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'

const themeStore = useThemeStore()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <EducationSection />
      <SkillsSection />
    </div>
  </div>
</template>
