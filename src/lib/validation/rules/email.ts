import regex from '../regex'
export default function (v: string): string | true {
  return regex.email.test(v) || 'The field must be a valid email'
}
