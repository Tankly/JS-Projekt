import type { AxiosStatic } from 'axios'
import ExercisesMockAdapter from './ExercisesMockAdapter'
import TestMockAdapter from './TestMockAdapter'

export default function (axios: AxiosStatic) {
  new ExercisesMockAdapter(axios)
  new TestMockAdapter(axios)
}
