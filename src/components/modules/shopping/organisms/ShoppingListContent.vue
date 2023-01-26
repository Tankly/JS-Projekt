<template>
  <div class="u-height--full u-margin__top">
    <div
      v-if="hasProducts"
      class="c-shopping-list"
    >
      <ShoppingCategoryWithItems
        v-for="(categoryItems, key) in productsGroupedByCategory"
        :key="key"
        :data="categoryItems"
        :name="key"
        color="purple"
      />
    </div>
    <BaseNoData v-else />
  </div>
</template>

<script lang="ts">
import BaseNoData from '@/components/general/atoms/BaseNoData.vue'
import { defineComponent } from 'vue'
import ShoppingCategoryWithItems from './ShoppingCategoryWithItems.vue'

export default defineComponent({
  props: {
    productsGroupedByCategory: {
      type: Object,
      default: null,
    },
  },
  components: { ShoppingCategoryWithItems, BaseNoData },
  computed: {
    hasProducts(): boolean {
      return !!(
        this.productsGroupedByCategory &&
        Object.keys(this.productsGroupedByCategory).length
      )
    },
  },
})
</script>

<style scoped lang="scss">
.c-shopping-list {
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
}
</style>
