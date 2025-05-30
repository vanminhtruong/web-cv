<template>
  <div class="color-switcher">
    <div class="relative">
      <button 
        @click.stop="toggleColorMenu" 
        class="color-button flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
        :style="{ backgroundColor: currentColor.primary }"
      >
        <div class="relative flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white transition-opacity duration-300" :class="{ 'opacity-100': !isOpen, 'opacity-0': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white absolute transition-opacity duration-300" :class="{ 'opacity-0': !isOpen, 'opacity-100': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>

      <div v-if="isOpen" class="color-dropdown absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
        <div class="p-2">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 px-3 py-1">
            {{ t('colors.selectTheme') }}
          </div>
          <div class="grid grid-cols-5 gap-2">
            <button 
              v-for="color in colorStore.colors" 
              :key="color.id"
              @click.stop="selectColor(color.id)"
              class="color-option w-7 h-7 rounded-full border-2 transition-all duration-200"
              :class="{ 'border-gray-400 dark:border-gray-300 scale-110': color.id === colorStore.currentColorId }"
              :style="{ backgroundColor: color.primary }"
              :title="t('colors.' + color.name.toLowerCase())"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useColorSwitcher } from '../composables/useColorSwitcher'

const {
  t,
  colorStore,
  isOpen,
  currentColor,
  toggleColorMenu,
  selectColor
} = useColorSwitcher()
</script>

<style scoped>
.color-switcher {
  position: relative;
  display: inline-block;
}

.color-button {
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.color-dropdown {
  min-width: 200px;
}

.color-option {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.color-option:hover {
  transform: scale(1.1);
}

/* Dark mode styles */
.dark .color-dropdown {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
}
</style>
