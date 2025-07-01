<template>
  <div v-if="isOpen" class="pdf-viewer-modal" @click.self="closeModal">
    <div class="pdf-viewer-container">
      <div class="pdf-viewer-header" :style="{ 'background-color': colorStore.currentColor.primary }">
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <div class="flex items-center gap-4">
          <div class="zoom-controls flex items-center gap-2">
            <button class="zoom-button" @click="zoomOut" title="Zoom out">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
            </button>
            <span class="zoom-level">{{ Math.round(zoomLevel * 100) }}%</span>
            <button class="zoom-button" @click="zoomIn" title="Zoom in">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <button class="zoom-button" @click="toggleFullScreen" title="Fullscreen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isFullScreen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a 
            :href="pdfUrl" 
            target="_blank" 
            class="download-button flex items-center gap-1 px-2 py-1 rounded-md bg-white/20 hover:bg-white/30 transition-colors" 
            title="Open in new tab"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span class="text-sm">Open</span>
          </a>
          <button class="close-button" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div class="pdf-viewer-content" ref="pdfContainer">
        <div v-if="!pdfLoadError" class="pdf-wrapper">
          <iframe 
            ref="pdfFrame"
            :src="pdfUrl" 
            frameborder="0" 
            :style="{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }"
            allow="fullscreen"
            @load="handleIframeLoad"
            @error="handleIframeError"
          ></iframe>
        </div>
        <div v-else class="pdf-fallback">
          <div class="pdf-error-message">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 class="text-xl font-bold mb-2">PDF không thể hiển thị trực tiếp</h3>
            <p class="mb-4">Vui lòng sử dụng nút tải CV hoặc mở trong tab mới</p>
            <div class="flex justify-center gap-4">
              <a 
                :href="pdfUrl" 
                download 
                class="inline-flex items-center px-4 py-2 rounded-md"
                :style="{ 'background-color': colorStore.currentColor.primary, color: 'white' }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Tải CV
              </a>
              <a 
                :href="pdfUrl" 
                target="_blank" 
                class="inline-flex items-center px-4 py-2 border-2 rounded-md"
                :style="{ 'border-color': colorStore.currentColor.primary, 'color': colorStore.currentColor.primary }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Mở trong tab mới
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useColorStore } from '../stores/color';

const colorStore = useColorStore();
const zoomLevel = ref(1.0); // Default zoom to 100%
const pdfContainer = ref(null);
const pdfFrame = ref(null);
const isFullScreen = ref(false);
const pdfLoadError = ref(false);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'CV Preview'
  },
  pdfUrl: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const zoomIn = () => {
  if (zoomLevel.value < 4) { // Allow higher maximum zoom
    zoomLevel.value += 0.25;
  }
};

const zoomOut = () => {
  if (zoomLevel.value > 0.5) {
    zoomLevel.value -= 0.25;
  }
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    if (pdfFrame.value.requestFullscreen) {
      pdfFrame.value.requestFullscreen();
      isFullScreen.value = true;
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullScreen.value = false;
    }
  }
};

const handleIframeLoad = (event) => {
  try {
    // Check if the iframe loaded content is an error page
    const iframe = event.target;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Check if there's a 404 or other error message in the loaded document
    if (iframeDoc.title.includes('404') || iframeDoc.body.textContent.includes('404 Not Found')) {
      pdfLoadError.value = true;
    } else {
      pdfLoadError.value = false;
    }
  } catch (error) {
    // If we can't access the iframe content due to CORS, assume it's working
    pdfLoadError.value = false;
  }
};

const handleIframeError = () => {
  pdfLoadError.value = true;
};

// Listen for fullscreen change events
document.addEventListener('fullscreenchange', () => {
  isFullScreen.value = !!document.fullscreenElement;
});
</script>

<style scoped>
.pdf-viewer-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 0.5rem;
}

.pdf-viewer-container {
  background-color: white;
  border-radius: 0.5rem;
  width: 98%;
  max-width: 1400px; /* Further increased max-width */
  height: 98vh; /* Further increased height */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.pdf-viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
}

.zoom-controls {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.zoom-level {
  font-weight: bold;
  min-width: 4rem;
  text-align: center;
}

.zoom-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.zoom-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.pdf-viewer-content {
  flex: 1;
  overflow: auto;
  background-color: #444;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
}

.pdf-wrapper {
  width: 100%;
  min-height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.pdf-viewer-content iframe {
  width: 100%;
  height: 100%;
  border: none;
  transition: transform 0.3s ease;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.pdf-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
}

.pdf-error-message {
  text-align: center;
  padding: 2rem;
  max-width: 500px;
  color: #333;
}

@media (max-width: 768px) {
  .pdf-viewer-container {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
  
  .zoom-level {
    min-width: 3rem;
  }
}
</style> 