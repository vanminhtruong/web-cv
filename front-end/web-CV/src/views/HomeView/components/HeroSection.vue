<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '../../../stores/profile'
import { useTypingEffect } from '../composables/useTypingEffect'
import { useContactInfo } from '../composables/useContactInfo'

const profileStore = useProfileStore()
const { t } = useI18n()

// Hiệu ứng xổ ra từng chữ cho tên
const fullName = "Trương Văn Minh" // Giữ nguyên tên này vì đây là tên riêng

// Sử dụng composable cho hiệu ứng đánh máy
const { displayedText: displayedName } = useTypingEffect(fullName, {
  typingSpeed: 150,        // Tốc độ gõ (ms)
  deletingSpeed: 100,      // Tốc độ xóa (ms)
  delayAfterComplete: 2000, // Thời gian chờ sau khi hiển thị đầy đủ (ms)
  delayAfterDelete: 500,   // Thời gian chờ sau khi xóa hết (ms)
  startDelay: 1000,        // Chờ 1 giây trước khi bắt đầu
  loop: true               // Lặp lại hiệu ứng
})

// Sử dụng composable cho thông tin liên hệ
const { contactItems, actionButtons } = useContactInfo()

// Tạo computed properties để lọc các nút hành động
const primaryButtons = computed(() => actionButtons.filter(button => button.isPrimary))
const secondaryButtons = computed(() => actionButtons.filter(button => !button.isPrimary))
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
    <div class="md:w-1/2 transform transition-all duration-300 hover:-translate-y-1">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        <span class="block">{{ t('home.greeting') }}</span>
        <span class="block text-theme-primary dark:text-theme-secondary transform transition-all duration-300 hover:scale-105">
          <span class="typing-effect">{{ displayedName }}</span>
          <span class="typing-cursor">|</span>
        </span>
      </h1>
      <h2 class="text-2xl text-gray-700 dark:text-gray-300 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>{{ t('home.role') }}</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-theme-primary">
        <div v-for="item in contactItems" :key="item.id" class="flex items-center group">
          <div class="h-10 w-10 bg-theme-secondary bg-opacity-20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-theme-secondary group-hover:bg-opacity-30 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.svgPath" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-medium text-gray-500">{{ item.label }}</div>
            <div v-if="!item.url" class="font-medium">{{ item.value }}</div>
            <a v-else :href="item.url" class="font-medium text-theme-primary hover:text-theme-accent transition-colors">github.com/{{ item.value }}</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <a v-for="button in primaryButtons" :key="button.id"
           :href="button.href" 
           class="inline-flex items-center px-6 py-3 bg-theme-primary dark:bg-theme-accent text-white font-medium rounded-lg hover:bg-theme-accent dark:hover:bg-theme-secondary transition-colors duration-300 shadow-md hover:shadow-lg">
          {{ button.label }}
        </a>
        <a v-for="button in secondaryButtons" :key="button.id"
           :href="profileStore.cvPath" 
           download 
           class="inline-flex items-center px-6 py-3 border-2 border-theme-accent dark:border-theme-secondary text-theme-accent dark:text-theme-secondary font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg ml-4">
          <svg v-if="button.icon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="button.icon" />
          </svg>
          {{ button.label }}
        </a>
      </div>
    </div>
    <div class="md:w-1/2 flex justify-center transform transition-all duration-500 hover:scale-105">
      <div class="relative w-64 h-64 md:w-80 md:h-80">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full shadow-lg"></div>
        <div class="absolute inset-4 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full shadow-inner"></div>
        <!-- Placeholder for profile image -->
        <div class="absolute inset-8 bg-theme-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
          TVM
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing-cursor {
  display: inline-block;
  width: 3px;
  animation: blink 0.7s infinite;
  color: var(--theme-primary);
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.typing-effect {
  display: inline-block;
  font-weight: bold;
}

/* Đảm bảo hiệu ứng tương thích với chế độ tối */
.dark .typing-cursor {
  color: var(--theme-secondary);
}
</style>
