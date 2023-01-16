import axios from 'axios'
import type { AxiosInstance } from 'axios'
import initMocks from '@/mocks/adapter'

initMocks(axios)
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
