<template>
  <template v-if="loaded">
    <ShoppingListHeader :name="(list.name as string)" />
    <ShoppingListContent
      :productsGroupedByCategory="(productsGroupedByCategory as Object)"
    />
  </template>
</template>

<script lang="ts">
import ShoppingListService from '@/services/ShoppingListService'
import type ShoppingListInterface from '@/interfaces/ShoppingListInterface'
import { defineComponent } from 'vue'
import ShoppingListHeader from '@/components/modules/shopping/organisms/ShoppingListHeader.vue'
import ShoppingListContent from '@/components/modules/shopping/organisms/ShoppingListContent.vue'

export default defineComponent({
  components: {
    ShoppingListHeader,
    ShoppingListContent,
  },
  data() {
    return {
      list: {} as ShoppingListInterface,
      loaded: false as boolean,
      productsGroupedByCategory: {} as Object,
    }
  },
  created() {
    this.getShoppingList(this.$route.params.id)
  },
  methods: {
    groupByProductsByCategory(data: ShoppingListInterface) {
      const groupedByCategory: { [k: string]: any } = {}
      for (const product in data.items) {
        if (!groupedByCategory[data.items[product].category]) {
          groupedByCategory[data.items[product].category] = []
        }
        groupedByCategory[data.items[product].category].push(
          data.items[product]
        )
      }
      return groupedByCategory
    },
    async getShoppingList(id: string) {
      ShoppingListService.getShoppingListById(id)
        .then((data: ShoppingListInterface) => {
          this.list = data
          this.productsGroupedByCategory = this.groupByProductsByCategory(data)
        })
        .finally(() => {
          this.loaded = true
        })
    },
  },
})
</script>

<style scoped></style>
