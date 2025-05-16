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
}

.lazy-hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.lazy-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
</style>
