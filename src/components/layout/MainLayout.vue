<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans dark:text-white">
    <BackToTop />
    <Header />
    <main class="pt-20">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '../../stores/theme'
import { useColorStore } from '../../stores/color'
import Header from './Header.vue'
import Footer from './Footer.vue'
import BackToTop from '../BackToTop.vue'

const themeStore = useThemeStore()
const colorStore = useColorStore()

onMounted(() => {
  themeStore.initTheme()
  colorStore.initColor()
})
</script>
