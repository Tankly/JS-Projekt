import { useAuthStore } from '@/stores/auth'
import Cookies from 'js-cookie'

export default function () {
  const token = Cookies.get('x-access-token')
  const auth = useAuthStore()
  if (token) {
    auth.fetchUser()
  }
}
