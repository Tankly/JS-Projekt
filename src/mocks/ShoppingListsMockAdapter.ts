import type { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default class ShoppingListsMockAapter extends MockAdapter {
  shoppingList = [
    {
      id: 1,
      name: 'For work',
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
    {
      id: 2,
      name: 'General',
      color: '#524C8C',
      icon: 'mdi-gift',
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
    {
      id: 3,
      name: 'Gym',
      color: '#FFE200',
      icon: 'mdi-cart',
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
    // const urlWithId = new RegExp('/\/shopping_lists\/\d+')
    // eslint-disable-next-line prettier/prettier, no-useless-escape
    this.onGet('/shopping_lists/2').reply((config) => {
      const id = config.url?.split('/').at(-1) || 0
      const response = this.shoppingList.find((Object) => {
        return Object.id == id
      })
      return [200, response]
    })
  }
}
