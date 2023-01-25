import { useAlertStore } from '@/stores/alert'
export default function (title: string, content: string = '') {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker
      .getRegistration()
      .then(function (reg: ServiceWorkerRegistration | undefined) {
        const options = {
          body: content,
          icon: '/img/logo-64x64.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
          },
        }
        reg?.showNotification(title, options)
      })
  } else {
    const alert = useAlertStore()
    alert.fire(title)
  }
}
