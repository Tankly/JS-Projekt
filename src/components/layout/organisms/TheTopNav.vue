<template>
  <v-app-bar id="app-bar">
    <v-app-bar-title class="u-flex__grow--3">
      {{ $route.name }}
    </v-app-bar-title>
    <img :src="`${publicPath}img/logo-64x64.png`" />
  </v-app-bar>
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
