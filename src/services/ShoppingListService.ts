import axios from '@/plugins/axios'
import type ShoppingList from '@/interfaces/ShoppingListInterface'
import type { AxiosError, AxiosResponse } from 'axios'

class ShoppingListService {
  async getAllShoppingLists(): Promise<Array<ShoppingList>> {
    const { data } = await axios.get<Array<ShoppingList>>('/shopping_lists')
    return data
  }

  async getShoppingListById(id: String | String[]): Promise<ShoppingList> {
    const { data } = await axios.get<ShoppingList>(`/shopping_lists/${id}`)
    return data
  }
  async deleteList(id: Number): Promise<ShoppingList> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/shopping_lists/${id}`)
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((e: AxiosError) => {
          reject(e)
        })
    })
  }
  async addList(data: Object): Promise<ShoppingList> {
    return new Promise((resolve, reject) => {
      axios
        .post('/shopping_lists', {
          data,
        })
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((e: AxiosError) => {
          reject(e)
        })
    })
  }
}

export default new ShoppingListService()
