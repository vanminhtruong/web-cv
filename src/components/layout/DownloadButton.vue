<template>
  <a :href="pdfPath" download class="inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors duration-300" :style="{ 'background-color': colorStore.currentColor.primary, 'border': '1px solid ' + colorStore.currentColor.primary }" :class="{ 'hover:opacity-90': true }">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    {{ t('nav.downloadCV') }}
  </a>
</template>

<script setup>
import { useProfileStore } from '../../stores/profile'
import { useColorStore } from '../../stores/color'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()
const profileStore = useProfileStore()
const colorStore = useColorStore()

// Xác định đúng đường dẫn tùy thuộc vào môi trường triển khai
const pdfPath = computed(() => {
  // Kiểm tra xem có phải đang trên GitHub Pages không (có base path /web-cv/)
  const isGitHubPages = window.location.href.includes('/web-cv/');
  // Nếu đang ở GitHub Pages, sử dụng đường dẫn tương đối với base path
  return isGitHubPages ? '/web-cv/TruongVanMinh-CV.pdf' : '/TruongVanMinh-CV.pdf';
})
</script>
