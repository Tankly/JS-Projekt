import type { AxiosStatic } from 'axios'
import ExercisesMockAdapter from './ExercisesMockAdapter'
import TestMockAdapter from './TestMockAdapter'
import ShoppingListsMockAdapter from './ShoppingListsMockAdapter'

export default function (axios: AxiosStatic) {
  new ExercisesMockAdapter(axios)
  new TestMockAdapter(axios)
  new ShoppingListsMockAdapter(axios)
}
