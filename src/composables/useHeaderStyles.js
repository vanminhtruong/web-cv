import { computed } from 'vue'
import { useColorStore } from '../stores/color'

export function useHeaderStyles() {
  const colorStore = useColorStore()

  // Get primary color for active links and hover effects
  const primaryColor = computed(() => colorStore.currentColor.primary)
  
  // Style for scroll progress bar
  const progressBarStyle = computed((progress) => {
    return {
      width: `${progress}%`,
      backgroundColor: colorStore.currentColor.primary
    }
  })
  
  // Style for router-link-active
  const activeNavLinkStyle = computed(() => {
    return {
      color: colorStore.currentColor.primary
    }
  })

  return {
    colorStore,
    primaryColor,
    progressBarStyle,
    activeNavLinkStyle
  }
} 