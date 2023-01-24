<template>
  <ShoppingListHeader :name="(list.name as string)" />
  <div></div>
</template>

<script lang="ts">
import ShoppingListService from '@/services/ShoppingListService'
import type ShoppingListInterface from '@/interfaces/ShoppingListInterface'
import { defineComponent } from 'vue'
import ShoppingListHeader from '@/components/modules/shopping/organisms/ShoppingListHeader.vue'

export default defineComponent({
  components: {
    ShoppingListHeader,
  },
  data() {
    return {
      list: {} as ShoppingListInterface,
    }
  },
  created() {
    this.getShoppingList(this.$route.params.id)
    console.log(this.list)
  },
  methods: {
    async getShoppingList(id: String | String[]) {
      await ShoppingListService.getShoppingListById(id).then(
        (data: ShoppingListInterface) => {
          this.list = data
        }
      )
    },
  },
})
</script>

<style scoped></style>
