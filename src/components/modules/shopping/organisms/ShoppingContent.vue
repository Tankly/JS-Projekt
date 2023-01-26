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
    <BaseNoData v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShoppingList from './ShoppingList.vue'
import BaseNoData from '@/components/general/atoms/BaseNoData.vue'

export default defineComponent({
  components: { BaseNoData },
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
