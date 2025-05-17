import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  // Danh sách các theme tối
  const darkThemes = [
    { id: 'dark', name: 'Dark Mode' },
    { id: 'black', name: 'Black Mode' },
    { id: 'navy', name: 'Navy Mode' },
    { id: 'charcoal', name: 'Charcoal Mode' },
    { id: 'midnight', name: 'Midnight Mode' },
    { id: 'deep-purple', name: 'Deep Purple Mode' }
  ]

  // Kiểm tra localStorage hoặc sử dụng chế độ sáng làm mặc định
  const savedTheme = localStorage.getItem('theme') || 'light'
  const isDark = ref(savedTheme !== 'light')
  const currentDarkTheme = ref(savedTheme !== 'light' ? savedTheme : 'dark')
  
  // Lấy thông tin theme tối hiện tại
  const currentDarkThemeInfo = ref(darkThemes.find(theme => theme.id === currentDarkTheme.value) || darkThemes[0])

  // Hàm chuyển đổi giữa sáng và tối
  function toggleTheme() {
    isDark.value = !isDark.value
    // Lưu trạng thái vào localStorage
    localStorage.setItem('theme', isDark.value ? currentDarkTheme.value : 'light')
    // Cập nhật class trên thẻ html
    updateThemeClass()
  }
  
  // Hàm thiết lập theme cụ thể
  function setTheme(themeId) {
    if (themeId === 'light') {
      isDark.value = false
    } else {
      isDark.value = true
      currentDarkTheme.value = themeId
      const theme = darkThemes.find(t => t.id === themeId)
      if (theme) {
        currentDarkThemeInfo.value = theme
      }
    }
    localStorage.setItem('theme', themeId)
    updateThemeClass()
  }
  
  // Hàm cập nhật class trên thẻ html
  function updateThemeClass() {
    // Lấy tất cả các theme IDs để xóa
    const themeClasses = darkThemes.map(theme => `theme-${theme.id}`)
    
    // Xóa tất cả các class theme hiện tại
    document.documentElement.classList.remove('dark', ...themeClasses)
    
    if (isDark.value) {
      // Thêm class dark cho tất cả các theme tối
      document.documentElement.classList.add('dark')
      // Thêm class theme cụ thể
      document.documentElement.classList.add(`theme-${currentDarkTheme.value}`)
      
      // In ra console để debug
      console.log('Current theme:', currentDarkTheme.value)
      console.log('Applied classes:', document.documentElement.className)
    }
  }
  
  // Khởi tạo theme khi store được tạo
  function initTheme() {
    updateThemeClass()
  }
  
  return { 
    isDark, 
    darkThemes, 
    currentDarkTheme, 
    currentDarkThemeInfo,
    toggleTheme, 
    setTheme, 
    initTheme 
  }
})
