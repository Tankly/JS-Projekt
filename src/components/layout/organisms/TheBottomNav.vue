<template>
  <v-bottom-navigation color="primary">
    <BtnWithBottomText
      className="u-width--50"
      to="/lists"
      icon="mdi-list-status"
      label="Lists"
    />
    <BtnWithBottomText
      className="u-width--50"
      to="/settings"
      icon="mdi-cog"
      label="Settings"
    />
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnWithBottomText from '@/components/layout/molecules/BtnWithBottomText.vue'

export default defineComponent({
  components: {
    BtnWithBottomText,
  },
})
</script>
