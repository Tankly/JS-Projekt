import BaseMockAdapter from './BaseMockAdapter'
import type SearchProductInterface from '@/interfaces/Responses/SearchProductInterface'
import MockProducts from '@/mocks/data/products' 
export default class ProductMockAdapter extends BaseMockAdapter {
  private products = [] as Array<SearchProductInterface>

  constructor(adapter: MockAdapter) {
    super(adapter)
    this.products = MockProducts
  }

  execute(): void {
    this.adapter.onPost(`/products/search`).reply((config) => {
      const data = JSON.parse(config.data)
      return [
        200,
        data.search
          ? this.products.filter((e) =>
              e.name.toLowerCase().includes(data.search.toLowerCase())
            )
          : this.products,
      ]
    })
  }
}
