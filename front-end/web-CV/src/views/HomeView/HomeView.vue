<script setup>
import { useThemeStore } from '../../stores/theme'
import HeroSection from './components/HeroSection.vue'
import IntroductionSection from './components/IntroductionSection.vue'
import ObjectiveSection from './components/ObjectiveSection.vue'

const themeStore = useThemeStore()
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <IntroductionSection />
      <ObjectiveSection />
    </div>
  </div>
</template>

<style scoped>
.lazy-hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.lazy-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
</style>
