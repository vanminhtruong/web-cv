<template>
  <div class="language-switcher">
    <div class="custom-select" @click="toggleDropdown" ref="selectContainer">
      <div class="selected-option">
        <span v-if="currentLocale === 'en'">English</span>
        <span v-else-if="currentLocale === 'ko'">한국어</span>
        <span v-else-if="currentLocale === 'vi'">Tiếng Việt</span>
        <span v-else-if="currentLocale === 'zh'">中文</span>
        <span v-else-if="currentLocale === 'es'">Español</span>
        <span v-else-if="currentLocale === 'fr'">Français</span>
        <!-- Mũi tên với hiệu ứng xoay -->
        <svg xmlns="http://www.w3.org/2000/svg" 
             class="h-4 w-4 ml-1 transition-transform duration-300 ease-in-out" 
             :class="{ 'rotate-180': isOpen }" 
             viewBox="0 0 20 20" 
             :fill="colorStore.currentColor.primary">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
      <ul class="options-list" v-show="isOpen">
        <li 
          @click.stop="selectOption('en')" 
          :class="{'active': currentLocale === 'en'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
        >English</li>
        <li 
          @click.stop="selectOption('ko')" 
          :class="{'active': currentLocale === 'ko'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
        >한국어</li>
        <li 
          @click.stop="selectOption('vi')" 
          :class="{'active': currentLocale === 'vi'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
        >Tiếng Việt</li>
        <li 
          @click.stop="selectOption('zh')" 
          :class="{'active': currentLocale === 'zh'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
        >中文</li>
        <li 
          @click.stop="selectOption('es')" 
          :class="{'active': currentLocale === 'es'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
        >Español</li>
        <li 
          @click.stop="selectOption('fr')" 
          :class="{'active': currentLocale === 'fr'}"
          :style="{'--hover-bg-color': colorStore.currentColor.primary + '33', '--active-bg-color': colorStore.currentColor.primary}"
        >Français</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useLanguageSwitcher } from '../composables/useLanguageSwitcher'

const {
  colorStore,
  themeStore,
  currentLocale,
  isOpen,
  selectContainer,
  toggleDropdown,
  selectOption
} = useLanguageSwitcher()
</script>

<style scoped>
.language-switcher {
  margin: 0 1rem;
  position: relative;
}

.custom-select {
  position: relative;
  user-select: none;
  min-width: 125px;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f1f5f9;
  color: #334155;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #ccc;
  z-index: 50;
  overflow-y: visible;
}

.options-list li {
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.options-list li:hover {
  background-color: var(--hover-bg-color);
}

.options-list li.active {
  background-color: var(--active-bg-color);
  color: white;
}

/* Dark mode styles */
.dark .selected-option {
  background-color: var(--bg-secondary, #1e293b);
  border-color: var(--card-border, #475569);
  color: var(--text-primary, #f8fafc);
}

.dark .options-list {
  background-color: var(--bg-primary, #0f172a);
  border-color: var(--card-border, #4B5563);
  color: var(--text-primary, #E5E7EB);
}
</style>
