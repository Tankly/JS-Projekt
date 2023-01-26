<template>
  <TheProductAddHeader
    :list-id="listId"
    @save="editProducts"
  />
  <section class="c-settings">
    <BaseInput
      class="c-settings__search"
      clearable
      solo
      placeholder="Search product"
      v-model="search"
    />
    <ProductSelector
      v-if="products.length"
      :products="products"
      v-model="selectedProducts"
    />
    <BaseNoData v-else />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'
import fireNotification from '@/lib/fireNotification'
import BaseInput from '@/components/general/atoms/BaseInput.vue'
import type SearchProductInterface from '@/interfaces/Responses/SearchProductInterface'
import type ShoppingListInterface from '@/interfaces/ShoppingListInterface'
import type ProductSelectorInterface from '@/interfaces/ProductSelectorInterface'
import ProductService from '@/services/ProductService'
import ProductSelector from '@/components/modules/product/molecules/ProductSelector.vue'
import ShoppingListService from '@/services/ShoppingListService'
import { useAlertStore } from '@/stores/alert'
import TheProductAddHeader from '@/components/modules/product/organisms/TheProductsEditHeader.vue'
import BaseNoData from '@/components/general/atoms/BaseNoData.vue'

export default defineComponent({
  components: { BaseInput, ProductSelector, TheProductAddHeader, BaseNoData },
  data() {
    return {
      auth: useAuthStore(),
      alertStore: useAlertStore(),
      selectedProducts: {} as ProductSelectorInterface,
      search: null as string | null,
      products: [] as Array<SearchProductInterface>,
    }
  },
  mounted() {
    this.getListProducts()
  },
  computed: {
    listId(): string {
      return this.$route.params.id as string
    },
  },
  watch: {
    search() {
      this.searchProducts()
    },
  },
  methods: {
    searchProducts() {
      ProductService.search(this.search as string).then(
        (products: Array<SearchProductInterface>) => {
          this.products = products
        }
      )
    },
    getListProducts() {
      ShoppingListService.getShoppingListById(this.listId).then(
        (shoppingList: ShoppingListInterface) => {
          const selectedProducts: ProductSelectorInterface = {}
          const products: Array<SearchProductInterface> = []
          for (const item of shoppingList.items) {
            const product: SearchProductInterface = {
              id: item.id,
              name: item.name,
              category: item.category,
            }
            selectedProducts[item.id] = {
              quantity: item.quantity,
              product,
            }
            products.push(product)
          }
          if (!products.length) {
            this.searchProducts()
          } else {
            this.products = products
            this.selectedProducts = selectedProducts
          }
        }
      )
    },
    editProducts() {
      ShoppingListService.editProducts(this.listId, this.selectedProducts).then(
        () => {
          this.alertStore.fire('List modified!')
          this.$router.push(`/lists/${this.listId}`)
        }
      )
    },
    logout() {
      this.auth.clear()
      fireNotification('Logout success')
      this.$router.push('/login')
    },
    goToEditAccount() {
      this.$router.push('/account-edit')
    },
  },
})
</script>
<style lang="scss" scoped>
.c-settings {
  height: 100%;
  position: relative;
}
.c-settings__logout {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.c-settings__search {
  top: 0;
  position: sticky;
}
</style>
