<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScrollStore } from '../stores/scroll'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const scrollStore = useScrollStore()

// Add scroll event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', scrollStore.updateScrollPosition)
  // Initialize position
  scrollStore.updateScrollPosition()
})

// Clean up the event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', scrollStore.updateScrollPosition)
})
</script>

<template>
  <transition name="fade">
    <button
      v-show="scrollStore.showBackToTop"
      @click="scrollStore.scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-theme-primary dark:bg-theme-primary text-white shadow-lg hover:bg-theme-accent dark:hover:bg-theme-accent transition-all duration-300 focus:outline-none"
      :aria-label="t('common.backToTop')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
