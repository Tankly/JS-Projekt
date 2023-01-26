import axios from '@/plugins/axios'
import type SearchProductInterface from '@/interfaces/Responses/SearchProductInterface'

class ShoppingListService {
  async search(search: string): Promise<Array<SearchProductInterface>> {
    const { data } = await axios.post<Array<SearchProductInterface>>(
      '/products/search',
      {
        search,
      }
    )
    return data
  }
}

export default new ShoppingListService()
