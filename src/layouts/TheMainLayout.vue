<template>
  <v-main>
    <TheTopNav />
    <v-navigation-drawer>drawer</v-navigation-drawer>
    <slot v-if="mounted"></slot>
    <TheBottomNav />
  </v-main>
</template>

<script lang="ts">
import TheBottomNav from '@/components/layout/organisms/TheBottomNav.vue'
import TheTopNav from '@/components/layout/organisms/TheTopNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { TheBottomNav, TheTopNav },
  data() {
    return {
      mounted: false,
    }
  },
  mounted() {
    this.mounted = true
  },
})
</script>
