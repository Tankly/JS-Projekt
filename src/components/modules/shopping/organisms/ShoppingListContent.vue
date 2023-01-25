<template>
  <div class="u-height--full u-margin__top">
    <div
      v-if="productsGroupedByCategory"
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
    <div
      v-else
      class="o-flex o-flex--center u-height--full"
    >
      <span class="c-body--02">List empty</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShoppingCategoryWithItems from './ShoppingCategoryWithItems.vue'

export default defineComponent({
  props: {
    productsGroupedByCategory: {
      type: Object,
      default: null,
    },
  },
  components: { ShoppingCategoryWithItems },
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
