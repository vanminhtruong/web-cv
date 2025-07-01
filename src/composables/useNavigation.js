import { useI18n } from 'vue-i18n'
import { useColorStore } from '../stores/color'

export function useNavigation() {
  const { t } = useI18n()
  const colorStore = useColorStore()

  // Hover effects for navigation links
  const handleMouseEnter = (event) => {
    event.target.style.color = colorStore.currentColor.primary
  }
  
  const handleMouseLeave = (event) => {
    event.target.style.color = ''
  }

  return {
    t,
    colorStore,
    handleMouseEnter,
    handleMouseLeave
  }
} 