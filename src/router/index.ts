import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import lists from '@/views/lists.vue'
import thrash from '@/views/thrash.vue'
import settings from '@/views/settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: index,
    },
    {
      path: '/lists',
      name: 'Lists',
      component: lists,
    },
    {
      path: '/thrash',
      name: 'Thrash',
      component: thrash,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: settings,
    },
  ],
})

export default router
