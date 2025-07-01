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
    { id: 'cyan', name: 'Cyan', primary: '#06b6d4', secondary: '#22d3ee', accent: '#0891b2' },
    { id: 'rainbow', name: 'Rainbow', primary: '#ff0000', secondary: '#ff7f00', accent: '#ffff00' }
  ]

  const rainbowColors = [
    '#ff0000',
    '#ff7f00',
    '#ffff00',
    '#00ff00',
    '#0000ff',
    '#4b0082',
    '#9400d3'
  ]

  const currentColorId = ref(localStorage.getItem('colorTheme') || 'indigo')
  const currentColor = ref(colors.find(color => color.id === currentColorId.value) || colors[0])
  const rainbowInterval = ref(null)
  const rainbowIndex = ref(0)
  const rainbowProgress = ref(0)

  function setColor(colorId) {
    const color = colors.find(c => c.id === colorId)
    if (color) {
      currentColorId.value = colorId
      currentColor.value = color
      localStorage.setItem('colorTheme', colorId)
      
      if (colorId !== 'rainbow') {
        stopRainbowAnimation()
      } else {
        startRainbowAnimation()
      }
      
      updateCssVariables()
    }
  }

  function startRainbowAnimation() {
    stopRainbowAnimation()
    rainbowIndex.value = 0
    rainbowProgress.value = 0
    
    rainbowInterval.value = setInterval(() => {
      rainbowProgress.value += 0.02
      
      if (rainbowProgress.value >= 1) {
        rainbowProgress.value = 0
        rainbowIndex.value = (rainbowIndex.value + 1) % rainbowColors.length
      }
      
      const currentIndex = rainbowIndex.value
      const nextIndex = (currentIndex + 1) % rainbowColors.length
      const thirdIndex = (currentIndex + 2) % rainbowColors.length
      
      const currentRainbowColor = interpolateColor(
        rainbowColors[currentIndex], 
        rainbowColors[nextIndex], 
        rainbowProgress.value
      )
      const nextRainbowColor = interpolateColor(
        rainbowColors[nextIndex], 
        rainbowColors[thirdIndex], 
        rainbowProgress.value
      )
      const thirdRainbowColor = interpolateColor(
        rainbowColors[thirdIndex], 
        rainbowColors[(thirdIndex + 1) % rainbowColors.length], 
        rainbowProgress.value
      )
      
      currentColor.value = {
        ...currentColor.value,
        primary: currentRainbowColor,
        secondary: nextRainbowColor,
        accent: thirdRainbowColor
      }
      
      updateCssVariables()
    }, 50)
  }

  function interpolateColor(color1, color2, factor) {
    const r1 = parseInt(color1.slice(1, 3), 16)
    const g1 = parseInt(color1.slice(3, 5), 16)
    const b1 = parseInt(color1.slice(5, 7), 16)
    
    const r2 = parseInt(color2.slice(1, 3), 16)
    const g2 = parseInt(color2.slice(3, 5), 16)
    const b2 = parseInt(color2.slice(5, 7), 16)
    
    const r = Math.round(r1 + (r2 - r1) * factor)
    const g = Math.round(g1 + (g2 - g1) * factor)
    const b = Math.round(b1 + (b2 - b1) * factor)
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }

  function stopRainbowAnimation() {
    if (rainbowInterval.value) {
      clearInterval(rainbowInterval.value)
      rainbowInterval.value = null
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
    if (currentColorId.value === 'rainbow') {
      startRainbowAnimation()
    }
  }

  return { 
    colors, 
    rainbowColors,
    currentColorId, 
    currentColor, 
    setColor, 
    initColor,
    startRainbowAnimation,
    stopRainbowAnimation
  }
})
