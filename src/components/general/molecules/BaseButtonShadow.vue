<template>
  <div class="c-button-shadow">
    <BaseButton
      class="c-button-shadow__button"
      v-bind="$attrs"
    >
      <slot></slot>
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'

export default defineComponent({
  components: { BaseButton },
})
</script>
<style lang="scss" scoped>
.c-button-shadow {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
}

.c-button-shadow__button {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
</style>
