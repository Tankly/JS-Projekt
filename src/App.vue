<template>
  <v-app>
    <component :is="$route.meta.layout || 'mainLayout'">
      <v-main>
        <router-view />
      </v-main>
    </component>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mainLayout from '@/layouts/main.vue'

export default defineComponent({
  name: 'App',
  components: {
    mainLayout,
  },
  data() {
    return {
      //
    }
  },
})
</script>
