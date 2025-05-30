import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useLazySection(props) {
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

  return {
    lazySection,
    isVisible
  }
}
