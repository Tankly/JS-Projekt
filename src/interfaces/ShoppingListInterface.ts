import type ShoppingListItem from './ShoppingListItemInterface'

export default interface ShoppingListInterface {
  id: number
  name: string
  color: string
  icon: string
  items: Array<ShoppingListItem>
}
