<template>
  <v-text-field
    :outlined="outlined"
    :dense="dense"
    :type="type"
    v-bind="$attrs"
    @input="(...e) => $emit('input', ...e)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  outlined: {
    type: Boolean,
    default: true,
  },
  dense: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: 'text',
  },
})
</script>
