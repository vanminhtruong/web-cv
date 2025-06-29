import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  // Thông tin cá nhân
  const fullName = ref('Trương Văn Minh')
  const jobTitle = ref('Frontend Developer')
  const description = ref('Frontend Developer chuyên nghiệp với kinh nghiệm phát triển giao diện người dùng.')
  const year = ref(new Date().getFullYear())
  
  // Đường dẫn đến file CV
  const cvPath = ref('/src/assets/file/TruongVanMinh-CV.pdf')
  
  // Thông tin liên hệ
  const socialLinks = ref({
    facebook: 'https://facebook.com/truongvanminh',
    linkedin: 'https://linkedin.com/in/truongvanminh',
    github: 'https://github.com/truongvanminh',
    youtube: 'https://youtube.com/truongvanminh'
  })

  return {
    fullName,
    jobTitle,
    description,
    year,
    socialLinks,
    cvPath
  }
})
