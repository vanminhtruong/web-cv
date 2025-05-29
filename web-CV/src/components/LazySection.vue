<template>
  <div ref="lazySection" :class="['lazy-section', { 'lazy-visible': isVisible, 'lazy-hidden': !isVisible }]">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  threshold: {
    type: Number,
    default: 0.1
  },
  rootMargin: {
    type: String,
    default: '0px'
  }
})

const lazySection = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  // Khởi tạo Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // Cập nhật trạng thái hiển thị dựa trên việc phần tử có trong viewport hay không
        isVisible.value = entry.isIntersecting
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin
    }
  )
  
  // Bắt đầu theo dõi phần tử
  if (lazySection.value) {
    observer.observe(lazySection.value)
  }
})

onBeforeUnmount(() => {
  // Dừng theo dõi phần tử khi component bị hủy
  if (observer && lazySection.value) {
    observer.unobserve(lazySection.value)
    observer.disconnect()
  }
})
</script>

<style scoped>
.lazy-section {
  display: block;
  perspective: 1000px;
}

.lazy-hidden {
  opacity: 0;
  transform: translateY(80px) scale(0.9) rotate(-2deg);
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1), transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), filter 0.5s ease;
  filter: blur(8px);
  transform-origin: center bottom;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0);
}

.lazy-visible {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1), transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), filter 0.5s ease, box-shadow 0.5s ease;
  filter: blur(0);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
