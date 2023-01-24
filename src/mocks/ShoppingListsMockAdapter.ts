import BaseMockAdapter from './BaseMockAdapter'

export default class ShoppingListsMockAapter extends BaseMockAdapter {
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

  execute(): void {
    this.adapter.onGet('/shopping_lists').reply(200, this.shoppingList)
    this.adapter.onPost('/shopping_lists').reply((config) => {
      return [200, this.shoppingList]
    })
  }
}
