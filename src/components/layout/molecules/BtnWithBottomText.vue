<template>
  <div class="o-flex o-flex__grow--3 o-flex--center">
    <BaseButton
      class="u-width--full"
      v-bind="$attrs"
    >
      <v-icon>{{ icon }}</v-icon>
      {{ label }}
    </BaseButton>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  components: { BaseButton },
})
</script>
