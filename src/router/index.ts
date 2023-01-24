import { createRouter, createWebHistory } from 'vue-router'
import lists from '@/views/lists.vue'
import list from '@/views/list.vue'
import thrash from '@/views/thrash.vue'
import settings from '@/views/settings.vue'
import TheLoginLayoutVue from '@/layouts/TheLoginLayout.vue'
import walkthrough from '@/views/walkthrough.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import passwordreset from '@/views/password-reset.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'walkthrough',
      component: walkthrough,
      meta: {
        layout: TheLoginLayoutVue,
        backgroundImage: 'img/backgrounds/walkthrough-background.png',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        layout: TheLoginLayoutVue,
        backgroundImage: 'img/backgrounds/login-background.png',
      },
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: passwordreset,
      meta: {
        layout: TheLoginLayoutVue,
        backgroundImage: 'img/backgrounds/password-reset-background.png',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        layout: TheLoginLayoutVue,
        backgroundImage: 'img/backgrounds/register-background.png',
      },
    },
    {
      path: '/lists',
      name: 'Lists',
      component: lists,
      meta: {
        extension: true,
      },
    },
    {
      path: '/lists/:id',
      name: 'List',
      component: list,
      meta: {
        extension: true,
      },
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
