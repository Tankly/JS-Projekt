import axios from '@/plugins/axios'
import type ShoppingList from '@/interfaces/ShoppingListInterface'

class ShoppingListService {
  async getAllShoppingLists(): Promise<Array<ShoppingList>> {
    const { data } = await axios.get<Array<ShoppingList>>('/shopping_lists')
    return data
  }

  async getShoppingListById(id: String | String[]): Promise<ShoppingList> {
    const { data } = await axios.get<ShoppingList>(`/shopping_lists/${id}`)
    return data
  }
}

export default new ShoppingListService()
