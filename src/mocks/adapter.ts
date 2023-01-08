import type { AxiosStatic } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import assignExercises from './handlers/exercises'

export default function (axios: AxiosStatic) {
  const mock = new MockAdapter(axios)
  assignExercises(mock)
}
