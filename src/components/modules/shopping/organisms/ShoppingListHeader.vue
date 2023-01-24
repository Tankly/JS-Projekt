<template>
  <Teleport to="#app-bar">
    <div
      class="o-flex o-flex--space-between u-width--full u-flex__vertical--center"
    >
      <span class="c-large-title--01 u-padding__horizontal">{{ name }}</span>
      <BaseButton variant="text">
        <span class="c-body--02">Add product</span>
      </BaseButton>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped></style>
