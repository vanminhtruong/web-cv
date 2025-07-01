<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '../../../stores/profile'
import { useColorStore } from '../../../stores/color'
import { useTypingEffect } from '../composables/useTypingEffect'
import { useContactInfo } from '../composables/useContactInfo'
import PDFViewer from '../../../components/PDFViewer.vue'

const profileStore = useProfileStore()
const colorStore = useColorStore()
const { t } = useI18n()

const fullName = "Trương Văn Minh" 

const { displayedText: displayedName } = useTypingEffect(fullName, {
  typingSpeed: 150,        
  deletingSpeed: 100,      
  delayAfterComplete: 2000, 
  delayAfterDelete: 500,   
  startDelay: 1000,        
  loop: true              
})

const { contactItems, actionButtons } = useContactInfo()

const updatedActionButtons = computed(() => {
  return actionButtons.value.map(button => {
    if (button.id === 'download-cv') {
      return { ...button, href: profileStore.cvPath }
    }
    return button
  })
})

const primaryButtons = computed(() => updatedActionButtons.value.filter(button => button.isPrimary))
const secondaryButtons = computed(() => updatedActionButtons.value.filter(button => !button.isPrimary))

// PDF Viewer state
const isPdfViewerOpen = ref(false)
const openPdfViewer = () => {
  isPdfViewerOpen.value = true
}
const closePdfViewer = () => {
  isPdfViewerOpen.value = false
}
</script>

<template>
  <div class="wrapper flex flex-col lg:flex-col xl:flex-row items-center justify-between mb-16 gap-4 lg:gap-8">
    <div class="avatar xl:w-1/3 flex justify-center transform transition-all duration-500 hover:scale-105 mt-8 lg:mt-0">
      <div class="relative w-64 h-64 lg:w-80 lg:h-80">
        <div class="absolute inset-0 rounded-full shadow-lg" :style="{ 'background-image': `linear-gradient(to bottom right, ${colorStore.currentColor.primary}20, ${colorStore.currentColor.secondary}20)` }"></div>
        <div class="absolute inset-4 rounded-full shadow-inner" :style="{ 'background-image': `linear-gradient(to top right, ${colorStore.currentColor.primary}30, ${colorStore.currentColor.secondary}30)` }"></div>
        <div class="absolute inset-8 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl" :style="{ 'background-color': colorStore.currentColor.primary }">
          {{ t('home.avatar') }}
        </div>
      </div>  
    </div>
    <div class="tablet:w-full lg:w-full xl:w-2/3 p-4 transform transition-all duration-300 hover:-translate-y-1">
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        <span class="block">{{ t('home.greeting') }}</span>
        <span class="block transform transition-all duration-300 hover:scale-105" :style="{ color: colorStore.currentColor.primary }">
          <span class="typing-effect">{{ displayedName }}</span>
          <span class="typing-cursor" :style="{ color: colorStore.currentColor.primary }">|</span>
        </span>
      </h1>
      <h2 class="text-2xl text-gray-700 dark:text-gray-300 mb-6 flex items-center">
        <div class="briefcase-container mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-white briefcase-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.primary }">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <span>{{ t('home.role') }}</span>
        <div 
          class="exclamation-mark ml-2 cursor-pointer" 
          @click="openPdfViewer"
          :title="t('home.viewCV')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 exclamation-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </h2>
      <div class="grid grid-cols-1 xl:w-[630px] sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-md border-l-4 groups" :style="{ 'border-color': colorStore.currentColor.primary }">
        <div v-for="item in contactItems" :key="item.id" class="flex items-center group">  
          <div class="rounded-lg flex items-center justify-center mr-3 transition-colors group-hover:bg-opacity-50 icon-container h-10 w-10" :style="{ 'background-color': colorStore.currentColor.secondary + '30', '--hover-bg': colorStore.currentColor.secondary + '50' }">
            <svg v-if="item.id === 'email'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 email-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg> 
            <svg v-else-if="item.id === 'phone'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 phone-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.svgPath" />
            </svg>
            <svg v-else-if="item.id === 'github'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 github-animate" viewBox="0 0 24 24" fill="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path :d="item.svgPath" />
            </svg>
            <svg v-else-if="item.id === 'address'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 address-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.svgPath" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.svgPath" />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium text-gray-500">{{ item.label }}</div>
            <div v-if="!item.url" class="font-medium truncate">{{ item.value }}</div>
            <a v-else :href="item.url" class="font-medium transition-colors" :style="{ color: colorStore.currentColor.primary }" :class="{ 'hover:opacity-80': true }">github.com/{{ item.value }}</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        <a v-for="button in primaryButtons" :key="button.id"
           :href="button.href" 
           class="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg" 
           :style="{ 'background-color': colorStore.currentColor.primary }" 
           :class="{ 'hover:opacity-90': true }">
          {{ button.label }}
        </a>
        <a v-for="button in secondaryButtons" :key="button.id"
           :href="button.href" 
           download 
           class="inline-flex items-center px-6 py-3 border-2 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ml-4"
           :style="{ 'border-color': colorStore.currentColor.secondary, 'color': colorStore.currentColor.secondary }"
           :class="{ 'hover:bg-gray-50 dark:hover:bg-gray-800': true }">
          <svg v-if="button.icon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 download-animate" fill="none" viewBox="0 0 24 24" stroke="currentColor" :style="{ 'color': colorStore.currentColor.secondary }">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="button.icon" />
          </svg>
          {{ button.label }}
        </a>
      </div>
    </div>
  </div>

  <!-- PDF Viewer Modal -->
  <PDFViewer 
    :is-open="isPdfViewerOpen" 
    :pdf-url="profileStore.cvPath" 
    :title="t('home.viewCV')"
    @close="closePdfViewer"
  />
</template>

<style scoped>
.icon-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hiệu ứng chung */
.icon-animate {
  animation: pulse 2s infinite;
}

/* Hiệu ứng cho icon briefcase */
.briefcase-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.briefcase-animate {
  animation: pulse 3s ease-in-out infinite;
}

/* Hiệu ứng cho icon email */
.email-animate {
  animation: bounce 2s infinite;
}

/* Hiệu ứng cho icon điện thoại */
.phone-animate {
  animation: shake 1.5s infinite;
}

/* Hiệu ứng cho icon github */
.github-animate {
  animation: rotate 3s infinite;
}

/* Hiệu ứng cho icon địa chỉ */
.address-animate {
  animation: pulse-location 2s infinite;
}

/* Hiệu ứng cho icon tải xuống */
.download-animate {
  animation: download-motion 2s ease-in-out infinite;
  transform-origin: center;
}

/* Hiệu ứng cho icon chấm than */
.exclamation-animate {
  animation: pulse 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 2px currentColor);
  transition: transform 0.2s;
}

.exclamation-mark:hover .exclamation-animate {
  transform: scale(1.2);
}

/* Định nghĩa các keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}



@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
  60% {
    transform: translateY(-3px);
  }
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse-location {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 3px currentColor);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes download-motion {
  0% {
    transform: translateY(0);
    filter: drop-shadow(0 0 0px currentColor);
  }
  50% {
    transform: translateY(2px);
    filter: drop-shadow(0 0 1px currentColor);
  }
  100% {
    transform: translateY(0);
    filter: drop-shadow(0 0 0px currentColor);
  }
}

@media (min-width: 768px) and (max-width: 1270px) {
  .wrapper{
    display: block;
  }

  .groups{
    width: 100%;
  }

  .avatar{
    margin: 0 auto;
    margin-top: 25px;
    order: 2;
  }

}

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

.dark .typing-cursor {
  color: var(--theme-secondary);
}
</style>
