import { ref, onMounted, onUnmounted } from 'vue'
import { useColorStore } from '../stores/color'
import { useI18n } from 'vue-i18n'

export function useColorSwitcher() {
  const { t } = useI18n()
  const colorStore = useColorStore()
  const isOpen = ref(false)
  const currentColor = ref(colorStore.currentColor)

  const toggleColorMenu = () => {
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

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  return {
    t,
    colorStore,
    isOpen,
    currentColor,
    toggleColorMenu,
    selectColor
  }
}
