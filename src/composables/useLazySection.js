import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useLazySection(props) {
  const lazySection = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          isVisible.value = entry.isIntersecting
        })
      },
      {
        threshold: props.threshold,
        rootMargin: props.rootMargin
      }
    )
    
    if (lazySection.value) {
      observer.observe(lazySection.value)
    }
  })

  onBeforeUnmount(() => {
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
