<script setup>
import { useThemeStore } from '../stores/theme'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const themeStore = useThemeStore()

// Hiệu ứng xổ ra từng chữ cho tên
const fullName = "Trương Văn Minh"
const displayedName = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const typingSpeed = ref(150) // Tốc độ gõ (ms)
const deletingSpeed = ref(100) // Tốc độ xóa (ms)
const delayAfterComplete = 2000 // Thời gian chờ sau khi hiển thị đầy đủ (ms)
const delayAfterDelete = 500 // Thời gian chờ sau khi xóa hết (ms)

let typingTimer = null

const typeEffect = () => {
  const current = loopNum.value % 1 // Chỉ có 1 tên nên luôn là 0
  const fullText = fullName

  if (isDeleting.value) {
    // Đang xóa
    displayedName.value = fullText.substring(0, displayedName.value.length - 1)
    typingSpeed.value = deletingSpeed.value
  } else {
    // Đang gõ
    displayedName.value = fullText.substring(0, displayedName.value.length + 1)
  }

  // Xử lý khi hoàn thành gõ hoặc xóa
  if (!isDeleting.value && displayedName.value === fullText) {
    // Đã gõ xong, chờ một lúc rồi bắt đầu xóa
    typingSpeed.value = delayAfterComplete
    isDeleting.value = true
  } else if (isDeleting.value && displayedName.value === '') {
    // Đã xóa xong, chuyển sang vòng lặp tiếp theo
    isDeleting.value = false
    loopNum.value++
    typingSpeed.value = delayAfterDelete
  }

  typingTimer = setTimeout(typeEffect, typingSpeed.value)
}

onMounted(() => {
  // Bắt đầu hiệu ứng khi component được mount
  typingTimer = setTimeout(typeEffect, 1000) // Chờ 1 giây trước khi bắt đầu
})

onBeforeUnmount(() => {
  // Xóa timer khi component bị unmount để tránh memory leak
  if (typingTimer) {
    clearTimeout(typingTimer)
  }
})
</script>

<template>
  <div class="min-h-screen py-10 bg-gradient-to-b from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero section -->
      <div class="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div class="md:w-1/2 transform transition-all duration-300 hover:-translate-y-1">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span class="block">Hello, I'm</span>
            <span class="block text-indigo-600 transform transition-all duration-300 hover:scale-105">
              <span class="typing-effect">{{ displayedName }}</span>
              <span class="typing-cursor">|</span>
            </span>
          </h1>
          <h2 class="text-2xl text-gray-700 dark:text-gray-300 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>ReactJS Intern Position</span>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
            <div class="flex items-center group">
              <div class="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-500">Phone</div>
                <div class="font-medium">0982743860</div>
              </div>
            </div>
            <div class="flex items-center group">
              <div class="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-500">Email</div>
                <div class="font-medium">vanminhtruong95@gmail.com</div>
              </div>
            </div>
            <div class="flex items-center group">
              <div class="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-500">GitHub</div>
                <a href="https://github.com/vanminhtruong/Team03-cy.git" class="font-medium text-indigo-600 hover:text-indigo-800 transition-colors">github.com/vanminhtruong</a>
              </div>
            </div>
            <div class="flex items-center group">
              <div class="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-medium text-gray-500">Location</div>
                <div class="font-medium">Hoang Mai district, Hanoi</div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="#contact" class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
            <a href="#" class="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 hover:border-indigo-300 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center transform transition-all duration-500 hover:scale-105">
          <div class="relative w-64 h-64 md:w-80 md:h-80">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full shadow-lg"></div>
            <div class="absolute inset-4 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full shadow-inner"></div>
            <!-- Placeholder for profile image -->
            <div class="absolute inset-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              TVM
            </div>
          </div>
        </div>
      </div>

      <!-- Introduction section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white inline-block pb-2 border-b-4 border-indigo-500 transform transition-all duration-300 hover:scale-105">INTRODUCTION</h2>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-6 transform hover:-translate-y-1 border-l-4 border-indigo-500">
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a final-year Information Technology student with a strong passion for programming, particularly in web development using modern frameworks like ReactJS. I completed a 3-month internship at CY Vietnam Software Development Co., Ltd., where I gained valuable hands-on experience in developing and optimizing web applications using ReactJS. Additionally, I interned at Nacencom Technology Joint Stock Company, which further enhanced my practical skills and experience in the IT field. I am eager to apply my knowledge and continue honing my programming skills in a professional working environment.
          </p>
        </div>
      </div>

      <!-- Objective section -->
      <div class="mb-16">
        <div class="flex items-center mb-10">
          <div class="mr-4 hidden md:block">
            <div class="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white inline-block pb-2 border-b-4 border-indigo-500 transform transition-all duration-300 hover:scale-105">OBJECTIVE</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 border-indigo-500 bg-white dark:bg-gray-800">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Short-term Goal</h3>
            </div>
            <ul class="ml-12 space-y-2">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                <span class="text-lg text-gray-700 dark:text-gray-300">To become a junior Full Stack Web Developer within the next year.</span>
              </li>
            </ul>
          </div>
          <div class="rounded-xl shadow-lg p-8 mb-8 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border-r-4 border-purple-500 bg-white dark:bg-gray-800">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Long-term Goal</h3>
            </div>
            <ul class="ml-12 space-y-2">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                </svg>
                <span class="text-lg text-gray-700 dark:text-gray-300">To advance to a senior Full Stack Web Developer role within the next five years.</span>
              </li>
            </ul>
          </div>
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
  color: #4f46e5; /* indigo-600 */
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
  color: #818cf8; /* indigo-400 */
}
</style>
