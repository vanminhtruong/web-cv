import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '../stores/theme'

export function useThemeToggle() {
  const themeStore = useThemeStore()
  const isMenuOpen = ref(false)

  function toggleThemeMenu() {
    if (!isMenuOpen.value) {
      window.dispatchEvent(new Event('theme-toggle-open'));
    }
    isMenuOpen.value = !isMenuOpen.value
  }

  function setTheme(themeId) {
    themeStore.setTheme(themeId)
    isMenuOpen.value = false
  }

  // Hàm lấy màu cho từng theme
  function getThemeColorStyle(themeId) {
    switch(themeId) {
      case 'dark':
        return { backgroundColor: '#1f2937' }; // gray-800
      case 'black':
        return { backgroundColor: '#000000' };
      case 'navy':
        return { backgroundColor: '#312e81' }; // indigo-900
      case 'charcoal':
        return { backgroundColor: '#111827' }; // gray-900
      case 'midnight':
        return { backgroundColor: '#1e3a8a' }; // blue-900
      case 'deep-purple':
        return { backgroundColor: '#4c1d95' }; // purple-900
      default:
        return { backgroundColor: '#1f2937' }; // gray-800
    }
  }

  // Close menu when clicking outside
  function handleClickOutside(event) {
    if (isMenuOpen.value && !event.target.closest('.theme-toggle')) {
      isMenuOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('color-switcher-open', () => {
      isMenuOpen.value = false
    })
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('color-switcher-open', () => {
      isMenuOpen.value = false
    })
  })

  return {
    themeStore,
    isMenuOpen,
    toggleThemeMenu,
    setTheme,
    getThemeColorStyle
  }
}
