<template>
  <v-main
    class="c-login-layout c-login-layout-background"
    :style="`background-image: url(${publicPath}${$route.meta.backgroundImage});`"
  >
    <div class="c-login-layout-background__opacity">
      <slot />
    </div>
  </v-main>
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
