import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScrollStore = defineStore('scroll', () => {
  const showBackToTop = ref(false)
  const scrollThreshold = 300 // Show button after scrolling 300px
  function updateScrollPosition() {
    showBackToTop.value = window.scrollY > scrollThreshold
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return {
    showBackToTop,
    updateScrollPosition,
    scrollToTop
  }
})
