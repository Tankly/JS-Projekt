import type SearchProductInterface from './Responses/SearchProductInterface'

export default interface ProductSelectorInterface {
  [key: number]: {
    quantity: number
    product: SearchProductInterface
  }
}
