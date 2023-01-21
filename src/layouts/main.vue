<template>
  <v-app-bar>
    <v-app-bar-title class="u-flex__grow--3">Lista zakupów </v-app-bar-title>
    <img :src="`${publicPath}img/logo64.png`" />
  </v-app-bar>
  <v-navigation-drawer>drawer</v-navigation-drawer>
  <slot></slot>
  <v-bottom-navigation>bot nav</v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
    }
  },
})
</script>
