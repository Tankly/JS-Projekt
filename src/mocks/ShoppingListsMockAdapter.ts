import BaseMockAdapter from './BaseMockAdapter'

export default class ShoppingListsMockAapter extends BaseMockAdapter {
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
          price: 3.2,
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
          price: 3.2,
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
          price: 3.2,
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

  execute(): void {
    this.adapter.onGet('/shopping_lists').reply(200, this.shoppingList)
    for (let i = 1; i <= 20; i++) {
      this.adapter.onGet(`/shopping_lists/${i}`).reply((config) => {
        const id = config.url?.split('/').at(-1) || 0
        const response = this.shoppingList.find((Object) => {
          return Object.id == id
        })
        return [200, response]
      })
    }
  }
}
