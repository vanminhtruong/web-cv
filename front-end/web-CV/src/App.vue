<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from './stores/theme'
import { useProfileStore } from './stores/profile'
import { useColorStore } from './stores/color'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ColorSwitcher from './components/ColorSwitcher.vue'

const { t } = useI18n()
const themeStore = useThemeStore()
const colorStore = useColorStore()
const profileStore = useProfileStore()
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
  
  // Khởi tạo theme và màu sắc
  themeStore.initTheme()
  colorStore.initColor()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans dark:text-white">
    <!-- Header with Navigation -->
    <header :class="[
      'fixed w-full top-0 z-50 transition-all duration-300', 
      isScrolled ? 'bg-white dark:bg-gray-800 shadow-md py-2' : 'bg-transparent dark:bg-transparent py-4'
    ]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <RouterLink to="/" class="text-theme-primary dark:text-theme-secondary font-bold text-2xl flex items-center" @click="closeMobileMenu">
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
            <RouterLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
              {{ t('nav.home') }}
            </RouterLink>
            <RouterLink to="/skills" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
              {{ t('nav.skills') }}
            </RouterLink>
            <RouterLink to="/experience" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
              {{ t('nav.experience') }}
            </RouterLink>
            <RouterLink to="/contact" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
              {{ t('nav.contact') }}
            </RouterLink>
          </nav>
          
          <!-- Theme Toggle & Download CV Button (Desktop) -->
          <div class="hidden md:flex items-center space-x-4">
            <!-- Language Switcher -->
            <LanguageSwitcher />
            <!-- Color Switcher -->
            <ColorSwitcher />
            <!-- Theme Toggle Button -->
            <button @click="themeStore.toggleTheme" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <svg v-if="!themeStore.isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            
            <!-- Download CV Button -->
            <a :href="profileStore.cvPath" download class="inline-flex items-center px-4 py-2 bg-theme-primary dark:bg-theme-primary text-white text-sm font-medium rounded-lg hover:bg-theme-accent dark:hover:bg-theme-accent transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ t('nav.downloadCV') }}
            </a>
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
          <RouterLink to="/" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink to="/skills" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
            {{ t('nav.skills') }}
          </RouterLink>
          <RouterLink to="/experience" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
            {{ t('nav.experience') }}
          </RouterLink>
          <RouterLink to="/contact" @click="closeMobileMenu" class="text-gray-700 dark:text-gray-300 hover:text-theme-primary dark:hover:text-theme-secondary py-2 text-base font-medium transition-colors duration-200">
            {{ t('nav.contact') }}
          </RouterLink>
          
          <!-- Download CV Button (Mobile) -->
          <div class="flex items-center justify-between">
            <!-- Language Switcher (Mobile) -->
            <LanguageSwitcher />
            <!-- Color Switcher (Mobile) -->
            <ColorSwitcher />
            <a :href="profileStore.cvPath" download class="inline-flex items-center px-4 py-2 bg-theme-primary dark:bg-theme-primary text-white text-sm font-medium rounded-lg hover:bg-theme-accent dark:hover:bg-theme-accent transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ t('nav.downloadCV') }}
            </a>
            
            <!-- Theme Toggle Button (Mobile) -->
            <button @click="themeStore.toggleTheme" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
              <svg v-if="!themeStore.isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content with Padding for Fixed Header -->
    <main class="pt-20">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-theme-secondary">{{ profileStore.fullName }}</h3>
            <p class="text-gray-400 mb-4">{{ t('footer.description') }}</p>
            <p class="text-gray-400">{{ t('footer.copyrightText', {year: profileStore.year, name: profileStore.fullName}) }}</p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-theme-secondary">{{ t('nav.links') }}</h3>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/" class="text-gray-400 hover:text-white transition-colors duration-200">{{ t('nav.home') }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/skills" class="text-gray-400 hover:text-white transition-colors duration-200">{{ t('nav.skills') }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/experience" class="text-gray-400 hover:text-white transition-colors duration-200">{{ t('nav.experience') }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="text-gray-400 hover:text-white transition-colors duration-200">{{ t('nav.contact') }}</RouterLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-theme-secondary">{{ t('nav.connect') }}</h3>
            <div class="flex space-x-4">
              <a :href="profileStore.socialLinks.facebook" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a :href="profileStore.socialLinks.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109.608 0 1.1.497 1.1 1.109 0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a :href="profileStore.socialLinks.github" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a :href="profileStore.socialLinks.youtube" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
