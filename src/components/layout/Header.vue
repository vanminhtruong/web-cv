<template>
  <header :class="[
    'fixed w-full top-0 z-50 transition-all duration-300', 
    isScrolled ? 'bg-white dark:bg-gray-800 shadow-md py-2' : 'bg-transparent dark:bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <div class="flex-shrink-0">
          <RouterLink to="/" class="font-bold text-2xl flex items-center border-none outline-none" :style="{ 'color': colorStore.currentColor.primary }" @click="closeMobileMenu">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </span>
            <span>Trương Văn Minh</span>
          </RouterLink>
        </div>
        
        <nav class="hidden xl:flex xl:space-x-6">
          <RouterLink to="/" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink to="/skills" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
            {{ t('nav.skills') }}
          </RouterLink>
          <RouterLink to="/experience" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
            {{ t('nav.experience') }}
          </RouterLink>
          <RouterLink to="/contact" class="text-gray-700 dark:text-gray-300 py-2 text-sm tablet:text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
            {{ t('nav.contact') }}
          </RouterLink>
        </nav>
        
        <div class="hidden xl:flex items-center xl:space-x-4">
          <LanguageSwitcher />
          <ColorSwitcher />
          <ThemeToggle />
          <DownloadButton />
        </div>
        
        <div class="xl:hidden">
          <button type="button" @click="toggleMobileMenu" class="text-gray-600 hover:text-primary transition-colors duration-200" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''" >
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
    
    <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
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
import MobileMenu from './MobileMenu.vue'

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

<style scoped>
.router-link-active {
  color: v-bind("colorStore.currentColor.primary");
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: v-bind("colorStore.currentColor.primary");
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
