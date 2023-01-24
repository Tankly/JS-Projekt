import Cookies from 'js-cookie'

export default function ({ next }) {
  if (Cookies.get('x-access-token')) {
    return next()
  } else {
    return next({ name: 'login' })
  }
}
