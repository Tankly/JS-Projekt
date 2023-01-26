import { createRouter, createWebHistory } from 'vue-router'
import lists from '@/views/lists.vue'
import list from '@/views/list.vue'
import settings from '@/views/settings.vue'
import TheLoginLayoutVue from '@/layouts/TheLoginLayout.vue'
import walkthrough from '@/views/walkthrough.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import passwordReset from '@/views/password-reset.vue'
import listsAdd from '@/views/lists-add.vue'
import editAccount from '@/views/edit-account.vue'
import buildMiddleware from './middlewareBuilder'
import onVueReady from './onVueReady'
import authenticationGuard from '@/middleware/authenticationGuard'
import unauthenticatedCheck from '@/middleware/unauthenticatedCheck'
import productsEdit from '@/views/products-edit.vue'

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
      component: passwordReset,
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
      path: '/lists/:id/products-edit',
      name: 'Edit products',
      component: productsEdit,
      meta: {
        middleware: authenticationGuard,
        extension: true,
      },
    },
    {
      path: '/lists-add',
      name: 'Add list',
      component: listsAdd,
      meta: {
        middleware: authenticationGuard,
        extension: true,
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
    {
      path: '/account-edit',
      name: 'Edit account',
      component: editAccount,
      meta: {
        middleware: authenticationGuard,
      },
    },
  ],
})

router.beforeResolve(onVueReady)

export default buildMiddleware(router)
