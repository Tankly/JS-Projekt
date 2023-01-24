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
import buildMiddleware from './middlewareBuilder'
import onVueReady from './onVueReady'
import authenticationGuard from '@/middleware/authenticationGuard'
import unauthenticatedCheck from '@/middleware/unauthenticatedCheck'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'walkthrough',
      component: walkthrough,
      meta: {
        layout: TheLoginLayoutVue,
        middleware: unauthenticatedCheck,
        backgroundImage: 'img/backgrounds/walkthrough-background.png',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        layout: TheLoginLayoutVue,
        middleware: unauthenticatedCheck,
        backgroundImage: 'img/backgrounds/login-background.png',
      },
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: passwordreset,
      meta: {
        layout: TheLoginLayoutVue,
        middleware: unauthenticatedCheck,
        backgroundImage: 'img/backgrounds/password-reset-background.png',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        layout: TheLoginLayoutVue,
        middleware: unauthenticatedCheck,
        backgroundImage: 'img/backgrounds/register-background.png',
      },
    },
    {
      path: '/lists',
      name: 'Lists',
      component: lists,
      meta: {
        middleware: authenticationGuard,
        extension: true,
      },
    },
    {
      path: '/lists/:id',
      name: 'List',
      component: list,
      meta: {
        middleware: authenticationGuard,
        extension: true,
      },
    },
    {
      path: '/thrash',
      name: 'Thrash',
      component: thrash,
      meta: {
        middleware: authenticationGuard,
      },
    },
    {
      path: '/settings',
      name: 'Settings',
      component: settings,
      meta: {
        middleware: authenticationGuard,
      },
    },
  ],
})

router.beforeResolve(onVueReady)

export default buildMiddleware(router)
