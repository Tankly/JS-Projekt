<template>
  <v-btn
    v-bind="$attrs"
    :dense="dense"
    :outlined="outlined"
    :hideDetails="hideDetails"
    :color="color"
    :singleLine="singleLine"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    hideDetails: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    dense: {
      type: Boolean,
      default: true,
    },
    singleLine: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
})
</script>
