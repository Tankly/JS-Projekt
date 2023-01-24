import email from './rules/email'
import required from './rules/required'

export default {
  email: email as Function,
  required: required as Function,
}
