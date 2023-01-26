<template>
  <v-list-item
    v-for="product in products"
    :key="product.id"
    :title="product.name"
    :subtitle="`Category: ${product.category}`"
  >
    <template #prepend>
      <v-icon
        color="primary"
        @click="handleProduct(product)"
      >
        {{
          selectedProducts[product.id]
            ? 'mdi-plus-circle'
            : 'mdi-plus-circle-outline'
        }}
      </v-icon>
    </template>
    <template #append>
      <div
        v-if="selectedProducts[product.id]"
        class="c-product-quantity-modify"
      >
        <v-icon @click="increaseQuantity(product.id)">mdi-plus</v-icon>
        <span class="c-product-quantity-modify__quantity">
          {{ selectedProducts[product.id].quantity }}
        </span>
        <v-icon @click="decreaseQuantity(product.id)">mdi-minus</v-icon>
      </div>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type SearchProductInterface from '@/interfaces/Responses/SearchProductInterface'
import type ProductSelectorInterface from '@/interfaces/ProductSelectorInterface'

export default defineComponent({
  props: {
    products: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      require: true,
    },
  },
  computed: {
    selectedProducts: {
      set(value: number) {
        this.$emit('update:modelValue', value)
      },
      get(): ProductSelectorInterface {
        return this.modelValue
      },
    },
  },
  methods: {
    handleProduct(product: SearchProductInterface) {
      if (!this.selectedProducts[product.id]) {
        this.selectedProducts[product.id] = {
          product,
          quantity: 1,
        }
      } else {
        delete this.selectedProducts[product.id]
      }
    },
    increaseQuantity(id: number) {
      this.selectedProducts[id].quantity++
    },
    decreaseQuantity(id: number) {
      if (this.selectedProducts[id].quantity <= 1) {
        delete this.selectedProducts[id]
      }
      this.selectedProducts[id].quantity--
    },
  },
})
</script>

<style scoped lang="scss">
.c-product-quantity-modify {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap);
  font-weight: bold;
  font-size: var(--font-size--xl);
}
.c-product-quantity-modify__quantity {
  width: 2rem;
  text-align: center;
}
</style>
