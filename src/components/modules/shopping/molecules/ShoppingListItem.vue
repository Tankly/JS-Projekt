<template>
  <div class="o-flex o-flex__vertical--center c-shopping-list-item">
    <div class="o-flex o-flex--direction-column o-flex__grow--2">
      <span class="c-body--01">{{ data.name }}</span>
      <span class="c-footnote--footnote">{{ data.note }}</span>
    </div>
    <div>
      <span class="c-body--01 u-margin__horizontal"
        >{{ data.price }} {{ data.currencyCode }}</span
      >
    </div>
    <div>
      <span class="c-body--01 u-margin__horizontal">
        {{ data.quantity }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
.c-shopping-list-item {
  border-bottom: 1px solid lightgray;
}
</style>
