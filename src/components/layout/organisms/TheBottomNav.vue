<template>
  <v-bottom-navigation color="primary">
    <BtnWithBottomText
      to="/lists"
      size="x-large"
      icon="mdi-list-status"
      label="Listy"
    />
    <BtnWithBottomText
      to="/thrash"
      size="x-large"
      icon="mdi-trash-can"
      label="Kosz"
    />
    <BtnWithBottomText
      to="settings"
      size="x-large"
      icon="mdi-cog"
      label="Ustawienia"
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
