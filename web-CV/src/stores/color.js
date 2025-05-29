import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', () => {
  const colors = [
    { id: 'indigo', name: 'Indigo', primary: '#6366f1', secondary: '#818cf8', accent: '#4f46e5' },
    { id: 'blue', name: 'Blue', primary: '#3b82f6', secondary: '#60a5fa', accent: '#2563eb' },
    { id: 'red', name: 'Red', primary: '#ef4444', secondary: '#f87171', accent: '#dc2626' },
    { id: 'green', name: 'Green', primary: '#10b981', secondary: '#34d399', accent: '#059669' },
    { id: 'purple', name: 'Purple', primary: '#8b5cf6', secondary: '#a78bfa', accent: '#7c3aed' },
    { id: 'pink', name: 'Pink', primary: '#ec4899', secondary: '#f472b6', accent: '#db2777' },
    { id: 'yellow', name: 'Yellow', primary: '#f59e0b', secondary: '#fbbf24', accent: '#d97706' },
    { id: 'teal', name: 'Teal', primary: '#14b8a6', secondary: '#2dd4bf', accent: '#0d9488' },
    { id: 'orange', name: 'Orange', primary: '#f97316', secondary: '#fb923c', accent: '#ea580c' },
    { id: 'cyan', name: 'Cyan', primary: '#06b6d4', secondary: '#22d3ee', accent: '#0891b2' }
  ]

  const currentColorId = ref(localStorage.getItem('colorTheme') || 'indigo')
  const currentColor = ref(colors.find(color => color.id === currentColorId.value) || colors[0])
  function setColor(colorId) {
    const color = colors.find(c => c.id === colorId)
    if (color) {
      currentColorId.value = colorId
      currentColor.value = color
      localStorage.setItem('colorTheme', colorId)
      updateCssVariables()
    }
  }

  function updateCssVariables() {
    const root = document.documentElement
    root.style.setProperty('--color-primary', currentColor.value.primary)
    root.style.setProperty('--color-secondary', currentColor.value.secondary)
    root.style.setProperty('--color-accent', currentColor.value.accent)
  }

  function initColor() {
    updateCssVariables()
  }

  return { 
    colors, 
    currentColorId, 
    currentColor, 
    setColor, 
    initColor 
  }
})
