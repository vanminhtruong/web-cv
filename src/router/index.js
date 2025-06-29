import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView/HomeView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView/SkillsView.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView/ExperienceView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView/ContactView.vue')
    }
  ],
})

export default router
