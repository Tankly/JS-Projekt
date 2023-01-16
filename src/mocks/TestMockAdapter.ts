import type { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default class TestMockAdapter extends MockAdapter {
  posts = []

  constructor(axios: AxiosInstance) {
    super(axios)
    this.onGet('/posts').reply(200, this.posts)
    this.onPost('/posts').reply((config) => {
      // this.posts.push({
      //   id: 2,
      //   name: 'xd',
      // })
      return [200, this.posts]
    })
  }
}
