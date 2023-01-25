<template>
  <Teleport to="#app-bar">
    <div
      class="o-flex o-flex--space-between u-width--full o-flex__vertical--center"
    >
      <BaseButton
        variant="text"
        to="/lists"
      >
        <span class="c-body--02">Cancle</span>
      </BaseButton>
      <BaseButton
        variant="text"
        :loading="loading"
        @click="$emit('addList')"
      >
        <span class="c-body--02">Done</span>
      </BaseButton>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/general/atoms/BaseButton.vue'

export default defineComponent({
  components: { BaseButton },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped></style>
