// import type { AxiosInstance } from 'axios'
import type AuthUserInteface from '@/interfaces/AuthUserInteface'
import BaseMockAdapter from './BaseMockAdapter'

export default class AuthMockAdapter extends BaseMockAdapter {
  private user = {
    id: 1,
    email: 'test@wp.pl',
    name: 'Test test',
  } as AuthUserInteface

  private password = '1234'

  execute(): void {
    this.adapter.onPost('/auth/login').replyOnce(500)
    this.adapter.onPost('/auth/login').reply((config) => {
      const data = JSON.parse(config.data)
      if (data.email == this.user.email && data.password == this.password) {
        return [
          200,
          {
            access_token: 'dsasadasddasdsadsadsa',
            expires_in: 30123,
            user: this.user,
          },
        ]
      } else {
        return [
          404,
          {
            status: 'error',
            message: 'User not found',
          },
        ]
      }
    })
  }
}
