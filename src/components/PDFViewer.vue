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
          <button class="close-button" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div class="pdf-viewer-content" ref="pdfContainer">
        <div class="pdf-wrapper">
          <iframe 
            ref="pdfFrame"
            :src="pdfUrl" 
            frameborder="0" 
            :style="{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }"
            allow="fullscreen"
          ></iframe>
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