import type ProductSelectorInterface from '@/interfaces/ProductSelectorInterface'
import BaseMockAdapter from './BaseMockAdapter'

export default class ShoppingListsMockAapter extends BaseMockAdapter {
  private id = 3
  shoppingList = [
    {
      id: 1,
      name: 'For work',
      color: '#047C52',
      icon: 'mdi-heart',
      items: [],
    },
  ]

  execute(): void {
    this.adapter.onPost('/shopping_lists').reply((config) => {
      const data = JSON.parse(config.data).data
      this.id++
      data.id = this.id
      data.items = []
      this.shoppingList.push(data)
      return [200]
    })
    this.adapter.onGet('/shopping_lists').reply(200, this.shoppingList)
    for (let i = 1; i <= 20; i++) {
      this.adapter.onGet(`/shopping_lists/${i}`).reply((config) => {
        const id = config.url?.split('/').at(-1) || 0
        const response = this.shoppingList.find((Object) => {
          return Object.id == id
        })
        return [200, response]
      })
      this.adapter.onDelete(`/shopping_lists/${i}`).reply((config) => {
        const id = config.url?.split('/').at(-1) || 0
        const index = this.shoppingList.findIndex((object) => {
          return object.id == id
        })
        this.shoppingList.splice(index, 1)
        return [200]
      })
      this.adapter.onPut(`/shopping_lists/${i}/products`).reply((config) => {
        const data = JSON.parse(config.data)
        const id = config.url?.split('/').at(-2) || 0
        const ShoppingListIndex = this.shoppingList.findIndex((object) => {
          return object.id == id
        })
        const items = []
        for (const productId in data.products as ProductSelectorInterface) {
          const item = data.products[productId]
          items.push({
            quantity: item.quantity,
            id: productId,
            name: item.product.name,
            category: item.product.category,
          })
        }
        this.shoppingList[ShoppingListIndex].items = items
        return [200]
      })
    }
  }
}
