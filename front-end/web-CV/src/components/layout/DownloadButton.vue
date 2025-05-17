<template>
  <a :href="profileStore.cvPath" download class="inline-flex items-center px-4 py-2 bg-theme-primary dark:bg-theme-primary text-white text-sm font-medium rounded-lg hover:bg-theme-accent dark:hover:bg-theme-accent transition-colors duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    {{ t('nav.downloadCV') }}
  </a>
</template>

<script setup>
import { useProfileStore } from '../../stores/profile'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const profileStore = useProfileStore()
</script>
