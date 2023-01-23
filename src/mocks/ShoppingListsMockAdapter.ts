import type { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default class ShoppingListsMockAapter extends MockAdapter {
  shoppingList = [
    {
      name: 'test name',
      color: '#047C52',
      icon: 'mdi-heart',
      items: [
        {
          name: 'milk',
          category: 'Dairy',
          pirce: 3.2,
          currencyCode: 'PLN',
          quantity: 2,
          note: '2%',
        },
        {
          name: 'bread',
          category: 'Bakery',
          price: 2.3,
          currencyCode: 'PLN',
          quantity: 1,
          note: 'Rye',
        },
      ],
    },
  ]

  constructor(axios: AxiosInstance) {
    super(axios)
    this.onGet('/shopping_lists').reply(200, this.shoppingList)
    this.onPost('/shopping_lists').reply((config) => {
      // this.posts.push({
      //   id: 2,
      //   name: 'xd',
      // })
      return [200, this.shoppingList]
    })
  }
}
