import { useAuthStore } from '@/stores/auth'
import Cookies from 'js-cookie'

export default function () {
  const token = Cookies.get('x-access-token')
  const auth = useAuthStore()
  console.log(token)
  if (token) {
    auth.fetchUser()
  }
}
