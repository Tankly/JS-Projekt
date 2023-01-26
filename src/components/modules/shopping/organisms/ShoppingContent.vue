<template>
  <div class="u-height--full u-margin__top">
    <div
      v-if="items.length"
      class="c-shopping-list"
    >
      <ShoppingList
        v-for="(item, index) in items"
        :key="index"
        :data="(item as Object)"
        @delList="(id) => $emit('delList', id)"
      />
    </div>
    <div
      v-else
      class="o-flex o-flex--center u-height--full"
    >
      <span class="c-body--02">No lists</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShoppingList from './ShoppingList.vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: { ShoppingList },
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
