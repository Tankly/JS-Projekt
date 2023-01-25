// import type { AxiosInstance } from 'axios'
import type AuthUserInteface from '@/interfaces/AuthUserInteface'
import BaseMockAdapter from './BaseMockAdapter'

export default class AuthMockAdapter extends BaseMockAdapter {
  private users = [
    {
      id: 1,
      email: 'test@wp.pl',
      name: 'Test test',
    },
  ] as Array<AuthUserInteface>

  private usersTokens = {} as Object
  private usersPasswords = ['1234'] as Array<string>

  execute(): void {
    this.adapter.onPost('/auth/login').replyOnce(500)
    this.adapter.onPost('/auth/login').reply((config) => {
      const data = JSON.parse(config.data)
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i]
        if (
          data.email == user.email &&
          data.password == this.usersPasswords[i]
        ) {
          return this.login(user)
        }
      }
      return [
        404,
        {
          status: 'error',
          message: 'User not found',
        },
      ]
    })
    this.adapter.onPost('/auth/register').reply((config) => {
      const data = JSON.parse(config.data)
      if (this.users.findIndex((e) => e.email == data.email) !== -1) {
        return [
          409,
          {
            status: 'error',
            message: 'Email is taken',
          },
        ]
      }
      this.usersPasswords.push(data.password)
      const lastId = this.users.at(-1)?.id || 0
      const user = {
        id: lastId + 1,
        name: data.name,
        email: data.email,
      }
      this.users.push(user)
      return this.login(user)
    })
    this.adapter.onPost('/auth/password-reset').reply((config) => {
      const data = JSON.parse(config.data)
      if (this.users.findIndex((e) => e.email == data.email) === -1) {
        return [
          404,
          {
            status: 'error',
            message: 'Account not found',
          },
        ]
      }

      return [200]
    })
    this.adapter.onPatch('/auth/user').reply((config) => {
      const data = JSON.parse(config.data)
      const token: string = config.headers.Authorization.replace('Bearer ', '')
      const userIndex = this.getLoggedUser(token)
      if (userIndex == -1) {
        return [
          401,
          {
            status: 'error',
            message: 'Unauthorized',
          },
        ]
      }
      this.users[userIndex].name = data.name
      this.users[userIndex].email = data.email
      if (data.password) {
        this.usersPasswords[userIndex] = data.password
      }
      return [200, this.users[userIndex]]
    })
  }

  private getLoggedUser(token: string): number {
    const userIndex = this.users.findIndex(
      (e) => e.id == this.usersTokens[token]
    )
    return userIndex
  }

  private login(user: AuthUserInteface) {
    const token: string = (Math.random() + 1).toString(36)
    this.usersTokens[token] = user.id
    return [
      200,
      {
        access_token: token,
        expires_in: 30123,
        user: user,
      },
    ]
  }
}
