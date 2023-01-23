<template>
  <Teleport to="#app-bar">
    <div
      class="o-flex o-flex--space-between u-width--full u-flex__vertical--center"
    >
      <span class="c-large-title--01 u-padding__horizontal">Lists</span>
      <BaseButton variant="text">
        <span class="c-body--02">Add list</span>
      </BaseButton>
    </div>
  </Teleport>
</template>

<script lang="ts">
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BaseButton },
})
</script>
