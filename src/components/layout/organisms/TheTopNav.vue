<template>
  <v-app-bar>
    <v-app-bar-title class="o-flex__grow--3">
      <span class="c-large-title--01">{{ $route.name }}</span>
    </v-app-bar-title>
    <img :src="`${publicPath}img/logo-64x64.png`" />
    <template
      v-if="$route?.meta?.extension"
      v-slot:extension
    >
      <div
        id="app-bar"
        class="u-width--full"
      ></div>
    </template>
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
