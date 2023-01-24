export default function (v: string): string | true {
  return !!v || 'The field is required'
}
