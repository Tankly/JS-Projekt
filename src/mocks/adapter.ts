import type { AxiosStatic } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import AuthMockAdapter from './AuthMockAdapter'
import ShoppingListsMockAdapter from './ShoppingListsMockAdapter'

export default function (axios: AxiosStatic) {
  const mockAdapter = new MockAdapter(axios, {
    delayResponse: 500,
  })
  const authMockAdapter = new AuthMockAdapter(mockAdapter)
  const shoppingListsMockAdapter = new ShoppingListsMockAdapter(mockAdapter)
  authMockAdapter.execute()
  shoppingListsMockAdapter.execute()
}
