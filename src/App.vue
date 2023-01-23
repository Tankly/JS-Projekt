<template>
  <v-app>
    <component :is="$route.meta.layout || 'TheMainLayout'">
      <router-view />
    </component>
    <TheAlert />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheMainLayout from '@/layouts/TheMainLayout.vue'
import TheLoginLayout from '@/layouts/TheLoginLayout.vue'
import TheAlert from './components/general/organisms/TheAlert.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheMainLayout,
    TheLoginLayout,
    TheAlert,
  },
  data() {
    return {
      //
    }
  },
})
</script>
