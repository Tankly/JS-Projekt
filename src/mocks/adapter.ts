import type { AxiosStatic } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import AuthMockAdapter from './AuthMockAdapter'
import ProductMockAdapter from './ProductMockAdapter'
import ShoppingListsMockAdapter from './ShoppingListsMockAdapter'

export default function (axios: AxiosStatic) {
  const mockAdapter = new MockAdapter(axios)
  const authMockAdapter = new AuthMockAdapter(mockAdapter)
  const shoppingListsMockAdapter = new ShoppingListsMockAdapter(mockAdapter)
  const productMockAdapter = new ProductMockAdapter(mockAdapter)
  authMockAdapter.execute()
  productMockAdapter.execute()
  shoppingListsMockAdapter.execute()
}
