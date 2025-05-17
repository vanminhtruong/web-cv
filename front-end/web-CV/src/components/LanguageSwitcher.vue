<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="changeLocale" class="locale-select">
      <option value="en">English</option>
      <option value="ko">한국어</option>
      <option value="vi">Tiếng Việt</option>
      <option value="zh">中文</option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const changeLocale = () => {
  locale.value = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

onMounted(() => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    currentLocale.value = savedLocale
    locale.value = savedLocale
  }
})
</script>

<style scoped>
.language-switcher {
  margin: 0 1rem;
}

.locale-select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Dark mode styles */
.dark .locale-select {
  background-color: #374151;
  border-color: #4B5563;
  color: #E5E7EB;
}

.locale-select:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
</style>
