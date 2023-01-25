import type AuthUserInteface from '@/interfaces/AuthUserInteface'
import type LoginResponseInterface from '@/interfaces/Responses/LoginResponseInterface'
import type JSONRequestInterface from '@/interfaces/JSONRequestInterface'
import axios from '@/plugins/axios'
import type { AxiosError, AxiosResponse } from 'axios'

class AuthService {
  logout(): Promise<boolean> {
    return new Promise((resolve) => {
      axios
        .get('/auth/logout')
        .then(() => {
          resolve(true)
        })
        .catch(() => {
          resolve(false)
        })
    })
  }
  loggedUser(): Promise<AuthUserInteface> {
    return new Promise((resolve, reject) => {
      axios
        .get('/auth/user')
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((e: AxiosError) => {
          reject(e)
        })
    })
  }

  login(email: string, password: string): Promise<LoginResponseInterface> {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/login', {
          email,
          password,
        })
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((e: AxiosError) => {
          reject(e)
        })
    })
  }

  updateUser(
    name: string,
    email: string,
    password: string | null = null
  ): Promise<AuthUserInteface> {
    const data = {
      name,
      email,
    } as JSONRequestInterface
    if (password) {
      data.password = password
    }
    return new Promise((resolve, reject) => {
      axios
        .patch('/auth/user', data)
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((e: AxiosError) => {
          reject(e)
        })
    })
  }
}

export default new AuthService()
