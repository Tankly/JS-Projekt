<template>
  <ShoppingListAddHeader
    @addList="addList"
    :loading="loading"
  />
  <ShoppingListAddContent v-model:data="data" />
</template>

<script lang="ts">
import ShoppingListAddContent from '@/components/modules/shopping/organisms/ShoppingListAddContent.vue'
import ShoppingListAddHeader from '@/components/modules/shopping/organisms/ShoppingListAddHeader.vue'
import ShoppingListService from '@/services/ShoppingListService'
import { useAlertStore } from '@/stores/alert'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ShoppingListAddHeader, ShoppingListAddContent },
  data() {
    return {
      data: {
        name: null,
        color: '#000000',
        icon: 'mdi-food',
      },
      alertStore: useAlertStore(),
      loading: false as boolean,
    }
  },
  methods: {
    addList() {
      if (this.data.name && this.data.color && this.data.icon) {
        this.loading = true
        ShoppingListService.addList(this.data)
          .then(() => {
            this.alertStore.fire('List added!')
            this.$router.push('/lists')
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
  },
})
</script>

<style scoped lang="scss"></style>
