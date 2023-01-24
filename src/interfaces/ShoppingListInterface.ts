import type ShoppingListItem from './ShoppingListItemInterface'

export default interface ShoppingList {
  id: Number
  name: String
  color: String
  icon: String
  items: Array<ShoppingListItem>
}
