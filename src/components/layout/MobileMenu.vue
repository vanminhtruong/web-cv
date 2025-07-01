<template>
  <div v-if="isOpen" class="xl:hidden bg-white dark:bg-gray-800 shadow-lg mt-2 py-3 px-4 transition-all duration-300">
    <div class="flex flex-col space-y-3">
      <RouterLink to="/" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
        {{ t('nav.home') }}
      </RouterLink>
      <RouterLink to="/skills" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
        {{ t('nav.skills') }}
      </RouterLink>
      <RouterLink to="/experience" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
        {{ t('nav.experience') }}
      </RouterLink>
      <RouterLink to="/contact" @click="closeMenu" class="text-gray-700 dark:text-gray-300 py-2 text-base font-medium transition-colors duration-200 nav-link" :style="{ '--hover-color': colorStore.currentColor.primary }" @mouseenter="e => e.target.style.color = colorStore.currentColor.primary" @mouseleave="e => e.target.style.color = ''">
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
import { useI18n } from 'vue-i18n'
import { useColorStore } from '../../stores/color'
import LanguageSwitcher from '../LanguageSwitcher.vue'
import ColorSwitcher from '../ColorSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'
import DownloadButton from './DownloadButton.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const { t } = useI18n()
const colorStore = useColorStore()

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
  background-color: v-bind("colorStore.currentColor.primary");
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
