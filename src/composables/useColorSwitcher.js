import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useColorStore } from '../stores/color'
import { useI18n } from 'vue-i18n'

export function useColorSwitcher() {
  const { t } = useI18n()
  const colorStore = useColorStore()
  const isOpen = ref(false)
  const currentColor = ref(colorStore.currentColor)

  const toggleColorMenu = () => {
    if (!isOpen.value) {
      window.dispatchEvent(new Event('color-switcher-open'));
    }
    isOpen.value = !isOpen.value
  }

  const selectColor = (colorId) => {
    colorStore.setColor(colorId)
    currentColor.value = colorStore.currentColor
    isOpen.value = false
  }

  const handleClickOutside = (event) => {
    const colorSwitcher = document.querySelector('.color-switcher')
    if (colorSwitcher && !colorSwitcher.contains(event.target)) {
      isOpen.value = false
    }
  }

  // Watch for changes in colorStore.currentColor
  watch(() => colorStore.currentColor, (newColor) => {
    currentColor.value = newColor
  }, { deep: true })

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('theme-toggle-open', () => {
      isOpen.value = false
    })
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('theme-toggle-open', () => {
      isOpen.value = false
    })
  })

  return {
    t,
    colorStore,
    isOpen,
    currentColor,
    currentColorId: colorStore.currentColorId,
    toggleColorMenu,
    selectColor
  }
}
