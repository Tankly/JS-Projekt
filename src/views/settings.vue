<template>
  <div><BaseButton @click="logout">Wyloguj</BaseButton></div>
</template>

<script lang="ts">
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAlertStore } from '@/stores/alert'

export default defineComponent({
  components: { BaseButton },
  data() {
    return {
      auth: useAuthStore(),
      alert: useAlertStore(),
    }
  },
  methods: {
    logout() {
      this.auth.clear()
      this.$router.push({
        name: 'login',
      })
      this.alert.fire('Logout success')
    },
  },
})
</script>
