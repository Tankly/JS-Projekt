<template>
  <div
    class="o-flex o-flex--direction-column u-width--full c-shopping-category-with-items"
  >
    <div class="u-width--full">
      <span class="c-body--02 text-color">{{ name }}</span>
    </div>
    <ShoppingListItem
      v-for="(item, index) in data"
      :key="index"
      :data="(item as Object)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShoppingListItem from '../molecules/ShoppingListItem.vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  components: { ShoppingListItem },
})
</script>

<style scoped lang="scss">
.c-shopping-category-with-items {
  padding-left: 1rem;
}
.text-color {
  color: v-bind(color);
}
</style>
