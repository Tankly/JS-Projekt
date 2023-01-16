import type { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default class ExercisesMockAdapter extends MockAdapter {
  constructor(axios: AxiosInstance) {
    super(axios)
    this.onGet('/exercises').reply(200, ['test'])
  }
}
