import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import type AuthUserInteface from '@/interfaces/AuthUserInteface'
import AuthService from '@/services/AuthService'
import type LoginResponseInterface from '@/interfaces/Responses/LoginResponseInterface'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null as AuthUserInteface | null,
  }),

  getters: {
    getName(state) {
      return state.user?.name || null
    },
    getUserId(state) {
      return state.user?.id || null
    },
  },

  actions: {
    fetchUser(): Promise<AuthUserInteface> {
      return new Promise((resolve) => {
        AuthService.loggedUser()
          .then((user: AuthUserInteface) => {
            this.setUser(user)
            resolve(user)
          })
          .catch(() => {
            const user = JSON.parse(localStorage.getItem('user') || '')
            this.setUser(user)
            resolve(user)
          })
      })
    },
    logout(): Promise<void> {
      return AuthService.logout().then(() => {
        return this.clear()
      })
    },
    authorize(data: LoginResponseInterface): void {
      this.setUser(data.user)
      const expiresIn: Date = new Date(data.expires_in)
      Cookies.set('x-access-token', data.access_token, {
        expires: expiresIn.getTime(),
      })
    },
    clear(): void {
      this.setUser()
      Cookies.remove('x-access-token')
    },
    setUser(user: AuthUserInteface | null = null): void {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
      this.user = user
    },
  },
})
