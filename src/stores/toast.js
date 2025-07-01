import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { useColorStore } from './color'

export const useToastStore = defineStore('toast', () => {
  const toast = useToast()
  const colorStore = useColorStore()

  // Common toast options to avoid duplication
  const getCommonOptions = () => {
    return {
      position: 'top-right',
      toastClassName: 'custom-toast',
      bodyClassName: 'custom-toast-body',
      closeButton: false,
      icon: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      rtl: false,
      style: {
        '--color-primary': colorStore.currentColor.primary,
        '--color-secondary': colorStore.currentColor.secondary,
        '--color-accent': colorStore.currentColor.accent
      }
    }
  }

  function showSuccess(message) {
    const options = getCommonOptions()
    options.timeout = 3000
    toast.success(message, options)
  }

  function showError(message) {
    const options = getCommonOptions()
    options.timeout = 4000
    toast.error(message, options)
  }

  function showInfo(message) {
    const options = getCommonOptions()
    options.timeout = 3000
    toast.info(message, options)
  }

  function showWarning(message) {
    const options = getCommonOptions()
    options.timeout = 3500
    toast.warning(message, options)
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  }
})
