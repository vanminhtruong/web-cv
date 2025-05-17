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

  // Hàm tạo hiệu ứng đánh máy
  const typeEffect = () => {
    const fullText = text

    if (isDeleting.value) {
      // Đang xóa
      displayedText.value = fullText.substring(0, displayedText.value.length - 1)
      currentSpeed.value = deletingSpeed
    } else {
      // Đang gõ
      displayedText.value = fullText.substring(0, displayedText.value.length + 1)
      currentSpeed.value = typingSpeed
    }

    // Xử lý khi hoàn thành gõ hoặc xóa
    if (!isDeleting.value && displayedText.value === fullText) {
      // Đã gõ xong, chờ một lúc rồi bắt đầu xóa
      currentSpeed.value = delayAfterComplete
      isDeleting.value = true
    } else if (isDeleting.value && displayedText.value === '') {
      // Đã xóa xong, chuyển sang vòng lặp tiếp theo
      isDeleting.value = false
      if (loop) {
        loopNum.value++
      }
      currentSpeed.value = delayAfterDelete
    }

    // Nếu không lặp lại và đã hoàn thành một chu kỳ, dừng lại
    if (!loop && isDeleting.value && displayedText.value === '') {
      return
    }

    typingTimer = setTimeout(typeEffect, currentSpeed.value)
  }

  // Bắt đầu hiệu ứng
  const startTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer)
    }
    typingTimer = setTimeout(typeEffect, startDelay)
  }

  // Dừng hiệu ứng
  const stopTyping = () => {
    if (typingTimer) {
      clearTimeout(typingTimer)
      typingTimer = null
    }
  }

  // Khởi động hiệu ứng khi component được mount
  onMounted(() => {
    startTyping()
  })

  // Xóa timer khi component bị unmount để tránh memory leak
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
