import type ShoppingListItem from './ShoppingListItemInterface'

export default interface ShoppingList {
  name: String
  color: String
  icon: String
  items: Array<ShoppingListItem>
}
