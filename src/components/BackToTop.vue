<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScrollStore } from '../stores/scroll'
import { useColorStore } from '../stores/color'
import { useI18n } from 'vue-i18n'

const colorStore = useColorStore()

const { t } = useI18n()
const scrollStore = useScrollStore()

onMounted(() => {
  window.addEventListener('scroll', scrollStore.updateScrollPosition)
  scrollStore.updateScrollPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollStore.updateScrollPosition)
})
</script>

<template>
  <transition name="fade">
    <button
      v-show="scrollStore.showBackToTop"
      @click="scrollStore.scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-3 rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none"
      :style="{ 
        'background-color': colorStore.currentColor.primary,
        '--hover-bg': colorStore.currentColor.secondary
      }"
      :class="{
        'hover:bg-theme-accent': true
      }"
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
