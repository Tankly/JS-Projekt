import axios from 'axios'
import type { AxiosInstance } from 'axios'
import applyMock from '@/mocks/adapter'

applyMock(axios)
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
