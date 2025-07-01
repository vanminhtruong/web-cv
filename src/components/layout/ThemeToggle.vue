<template>
  <div class="relative theme-toggle">
    <button @click="toggleThemeMenu" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
      <svg v-if="!themeStore.isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>
    
    <div v-if="isMenuOpen" class="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
      <button 
        @click="setTheme('light')" 
        class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
        :class="{'font-semibold': !themeStore.isDark}"
      >
        <span>Light Mode</span>
        <span v-if="!themeStore.isDark" class="text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      
      <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
      <div v-for="theme in themeStore.darkThemes" :key="theme.id">
        <button 
          @click="setTheme(theme.id)" 
          class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
          :class="{'font-semibold': themeStore.isDark && themeStore.currentDarkTheme === theme.id}"
        >
          <div class="flex items-center">
            <div class="w-4 h-4 rounded-full mr-2" :style="getThemeColorStyle(theme.id)"></div>
            <span>{{ theme.name }}</span>
          </div>
          <span v-if="themeStore.isDark && themeStore.currentDarkTheme === theme.id" class="text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeToggle } from '../../composables/useThemeToggle'

const {
  themeStore,
  isMenuOpen,
  toggleThemeMenu,
  setTheme,
  getThemeColorStyle
} = useThemeToggle()
</script>
