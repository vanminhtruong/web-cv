<template>
  <header :class="[
    'fixed w-full top-0 z-50 transition-all duration-300', 
    isScrolled ? 'bg-white dark:bg-gray-800 shadow-md py-2' : 'bg-transparent dark:bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="font-bold text-2xl flex items-center" :style="{ 'color': colorStore.currentColor.primary }" @click="closeMobileMenu">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </span>
            <span>Trương Văn Minh</span>
          </RouterLink>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <RouterLink to="/" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary }">
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink to="/skills" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary }">
            {{ t('nav.skills') }}
          </RouterLink>
          <RouterLink to="/experience" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary }">
            {{ t('nav.experience') }}
          </RouterLink>
          <RouterLink to="/contact" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary }">
            {{ t('nav.contact') }}
          </RouterLink>
        </nav>
        
        <!-- Theme Toggle & Download CV Button (Desktop) -->
        <div class="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <ColorSwitcher />
          <ThemeToggle />
          <DownloadButton />
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button type="button" @click="toggleMobileMenu" class="text-gray-600 hover:text-indigo-600 focus:outline-none">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 shadow-lg mt-2 py-3 px-4 transition-all duration-300">
      <div class="flex flex-col space-y-3">
        <RouterLink to="/" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary, '--theme-secondary': colorStore.currentColor.secondary }">
          {{ t('nav.home') }}
        </RouterLink>
        <RouterLink to="/skills" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary, '--theme-secondary': colorStore.currentColor.secondary }">
          {{ t('nav.skills') }}
        </RouterLink>
        <RouterLink to="/experience" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary, '--theme-secondary': colorStore.currentColor.secondary }">
          {{ t('nav.experience') }}
        </RouterLink>
        <RouterLink to="/contact" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200" :class="{ 'hover:text-theme-primary': true }" :style="{ '--theme-primary': colorStore.currentColor.primary, '--theme-secondary': colorStore.currentColor.secondary }">
          {{ t('nav.contact') }}
        </RouterLink>
        
        <!-- Download CV Button (Mobile) -->
        <div class="flex items-center justify-between">
          <!-- Language Switcher (Mobile) -->
          <LanguageSwitcher />
          <!-- Color Switcher (Mobile) -->
          <ColorSwitcher />
          <DownloadButton />
          
          <!-- Theme Toggle Button (Mobile) -->
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColorStore } from '../../stores/color'
import LanguageSwitcher from '../LanguageSwitcher.vue'
import ColorSwitcher from '../ColorSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'
import DownloadButton from './DownloadButton.vue'

const colorStore = useColorStore()

const { t } = useI18n()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 10
  })
})
</script>
