<template>
  <div v-if="isOpen" class="xl:hidden bg-white dark:bg-gray-800 shadow-lg mt-2 py-3 px-4 transition-all duration-300">
    <div class="flex flex-col space-y-3">
      <RouterLink to="/" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        {{ t('nav.home') }}
      </RouterLink>
      <RouterLink to="/skills" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        {{ t('nav.skills') }}
      </RouterLink>
      <RouterLink to="/experience" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        {{ t('nav.experience') }}
      </RouterLink>
      <RouterLink to="/contact" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': primaryColor }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        {{ t('nav.contact') }}
      </RouterLink>
      <div class="flex justify-around gap-3 pt-3 border-t border-gray-200 dark:border-gray-700 mt-3">
        <LanguageSwitcher />
        <ColorSwitcher />
        <ThemeToggle />
        <DownloadButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import LanguageSwitcher from '../LanguageSwitcher.vue'
import ColorSwitcher from '../ColorSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'
import DownloadButton from './DownloadButton.vue'
import { useNavigation } from '../../composables/useNavigation'
import { useHeaderStyles } from '../../composables/useHeaderStyles'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const {
  t,
  handleMouseEnter,
  handleMouseLeave
} = useNavigation()

const { 
  primaryColor 
} = useHeaderStyles()

function closeMenu() {
  emit('close')
}
</script>

<style scoped>
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
  background-color: v-bind("primaryColor");
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
