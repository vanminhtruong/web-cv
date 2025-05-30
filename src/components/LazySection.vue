<template>
  <div ref="lazySection" :class="['lazy-section', { 'lazy-visible': isVisible, 'lazy-hidden': !isVisible }]">
    <slot></slot>
  </div>
</template>

<script setup>
import { useLazySection } from '../composables/useLazySection'

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

const { lazySection, isVisible } = useLazySection(props)
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
