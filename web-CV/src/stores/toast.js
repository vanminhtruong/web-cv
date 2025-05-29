import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { useColorStore } from './color'

export const useToastStore = defineStore('toast', () => {
  const toast = useToast()
  const colorStore = useColorStore()

  function showSuccess(message) {
    toast.success(message, {
      timeout: 3000,
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
    })
  }

  function showError(message) {
    toast.error(message, {
      timeout: 4000,
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
    })
  }

  function showInfo(message) {
    toast.info(message, {
      timeout: 3000,
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
    })
  }

  function showWarning(message) {
    toast.warning(message, {
      timeout: 3500,
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
    })
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  }
})
