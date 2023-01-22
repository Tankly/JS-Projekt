import { createRouter, createWebHistory } from 'vue-router'
import lists from '@/views/lists.vue'
import thrash from '@/views/thrash.vue'
import settings from '@/views/settings.vue'
import TheLoginLayoutVue from '@/layouts/TheLoginLayout.vue'
import Walkthrough from '@/views/Walkthrough.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Walkthrough,
      meta: {
        layout: TheLoginLayoutVue,
        backgroundImage: 'img/backgrounds/walkthrough-background.png',
      },
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
