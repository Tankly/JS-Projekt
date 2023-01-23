<template>
  <v-app>
    <component :is="$route.meta.layout || 'TheMainLayout'">
      <router-view />
    </component>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheMainLayout from '@/layouts/TheMainLayout.vue'
import TheLoginLayout from '@/layouts/TheLoginLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheMainLayout,
    TheLoginLayout,
  },
  data() {
    return {
      //
    }
  },
})
</script>
