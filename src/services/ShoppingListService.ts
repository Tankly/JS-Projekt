import axios from '@/plugins/axios'
import type ShoppingList from '@/interfaces/ShoppingListInterface'

class ShoppingListService {
  async getAllShoppingLists(): Promise<Array<ShoppingList>> {
    const { data } = await axios.get<Array<ShoppingList>>('/shopping_lists')
    return data
  }
}

export default new ShoppingListService()
