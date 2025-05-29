import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Composable cung cấp hiệu ứng đánh máy cho văn bản
 * @param {string} text - Văn bản đầy đủ cần hiển thị
 * @param {Object} options - Các tùy chọn cấu hình
 * @returns {Object} - Các giá trị và hàm để sử dụng hiệu ứng
 */
export function useTypingEffect(text, options = {}) {
  // Các tham số mặc định
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    delayAfterComplete = 2000,
    delayAfterDelete = 500,
    startDelay = 1000,
    loop = true
  } = options

  // Các biến trạng thái
  const displayedText = ref('')
  const isDeleting = ref(false)
  const loopNum = ref(0)
  const currentSpeed = ref(typingSpeed)
  
  let typingTimer = null

  const typeEffect = () => {
    const fullText = text

    if (isDeleting.value) {
      displayedText.value = fullText.substring(0, displayedText.value.length - 1)
      currentSpeed.value = deletingSpeed
    } else {
      displayedText.value = fullText.substring(0, displayedText.value.length + 1)
      currentSpeed.value = typingSpeed
    }

    if (!isDeleting.value && displayedText.value === fullText) {
      currentSpeed.value = delayAfterComplete
      isDeleting.value = true
    } else if (isDeleting.value && displayedText.value === '') {
      isDeleting.value = false
      if (loop) {
        loopNum.value++
      }
      currentSpeed.value = delayAfterDelete
    }

    if (!loop && isDeleting.value && displayedText.value === '') {
      return
    }

    typingTimer = setTimeout(typeEffect, currentSpeed.value)
  }

  const startTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer)
    }
    typingTimer = setTimeout(typeEffect, startDelay)
  }

  const stopTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer)
      typingTimer = null
    }
  }

  onMounted(() => {
    startTyping()
  })

  onBeforeUnmount(() => {
    stopTyping()
  })

  return {
    displayedText,
    isDeleting,
    loopNum,
    startTyping,
    stopTyping
  }
}
