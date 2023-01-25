<template>
  <ShooppingHeader />
  <ShoppingContent :items="(items as  Array<ShoppingListInterface>)" />
</template>

<script lang="ts">
import ShoppingListService from '@/services/ShoppingListService'
import type ShoppingListInterface from '@/interfaces/ShoppingListInterface'
import ShoppingContent from '@/components/modules/shopping/organisms/ShoppingContent.vue'
import ShooppingHeader from '@/components/modules/shopping/organisms/ShoppingHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ShoppingContent, ShooppingHeader },
  data() {
    return {
      items: [] as Array<ShoppingListInterface>,
    }
  },
  created() {
    this.getShoppingLists()
  },
  methods: {
    getShoppingLists() {
      ShoppingListService.getAllShoppingLists().then(
        (data: Array<ShoppingListInterface>) => {
          this.items = data
        }
      )
    },
  },
})
</script>
