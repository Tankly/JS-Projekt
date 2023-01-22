<template>
  <TheTopNav />
  <v-navigation-drawer>drawer</v-navigation-drawer>
  <slot></slot>
  <TheBottomNav />
</template>

<script lang="ts">
import TheBottomNav from '@/components/layout/organisms/TheBottomNav.vue'
import TheTopNav from '@/components/layout/organisms/TheTopNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { TheBottomNav, TheTopNav },
})
</script>
