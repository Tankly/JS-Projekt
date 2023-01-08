import type MockAdapter from 'axios-mock-adapter/types'

export default function (mock: MockAdapter) {
  mock.onGet('/exercises').reply(200, [])
}
