import { defineStore } from 'pinia'
import AlertTypeEnum from '@/enums/AlertTypeEnum'

export const useAlertStore = defineStore({
  id: 'alert',
  state: () => {
    return {
      title: null as string | null,
      content: null as string | null,
      show: false as boolean,
      type: AlertTypeEnum.SUCCESS as AlertTypeEnum,
    }
  },
  actions: {
    fire(
      title: string,
      type: AlertTypeEnum = AlertTypeEnum.SUCCESS,
      content: string = '',
      timeout: number = 3000
    ) {
      this.show = true
      this.content = content
      this.title = title
      this.type = type
      setTimeout(() => {
        this._clear()
      }, timeout)
    },
    _clear() {
      this.show = false
      this.content = null
      this.title = null
    },
  },
})
