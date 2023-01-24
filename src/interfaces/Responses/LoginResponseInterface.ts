import type AuthUserInteface from '../AuthUserInteface'

export default interface LoginResponseInterface {
  access_token: string
  expires_in: string
  user: AuthUserInteface
}
