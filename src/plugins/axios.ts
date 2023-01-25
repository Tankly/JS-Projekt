import axios, { type AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
import initMocks from '@/mocks/adapter'
import { useAlertStore } from '@/stores/alert'
import { useAuthStore } from '@/stores/auth'
import AlertTypeEnum from '@/enums/AlertTypeEnum'
import Cookies from 'js-cookie'
import router from '@/router'

initMocks(axios)

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
apiClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = Cookies.get('x-access-token')
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }
  return config
})
apiClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const auth = useAuthStore()
    const alertStore = useAlertStore()
    const code = error.response.status
    const data = error.response.data
    if (code == 500) {
      alertStore.fire('Internal server errror', AlertTypeEnum.ERROR)
    } else if (code == 401) {
      auth.clear()
      alertStore.fire('Unauthorized', AlertTypeEnum.WARNING)
      router.push({ name: 'login' })
    } else if (data && data.message) {
      alertStore.fire(data.message, AlertTypeEnum.WARNING)
    }
    return Promise.reject(error)
  }
)

export default apiClient
