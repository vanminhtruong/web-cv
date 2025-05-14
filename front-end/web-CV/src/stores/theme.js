import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  // Kiểm tra localStorage hoặc sử dụng chế độ sáng làm mặc định
  const isDark = ref(localStorage.getItem('theme') === 'dark')
  
  // Hàm chuyển đổi theme
  function toggleTheme() {
    isDark.value = !isDark.value
    // Lưu trạng thái vào localStorage
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    // Cập nhật class trên thẻ html
    updateThemeClass()
  }
  
  // Hàm thiết lập theme cụ thể
  function setTheme(dark) {
    isDark.value = dark
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    updateThemeClass()
  }
  
  // Hàm cập nhật class trên thẻ html
  function updateThemeClass() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  // Khởi tạo theme khi store được tạo
  function initTheme() {
    updateThemeClass()
  }
  
  return { isDark, toggleTheme, setTheme, initTheme }
})
