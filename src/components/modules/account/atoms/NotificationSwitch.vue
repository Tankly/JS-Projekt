<template>
  <v-switch
    v-model="notificationPerm"
    @change="requestNotification"
    :disabled="notificationPerm"
    class="u-padding u-padding__vertical--none"
  >
    <template v-slot:label> <slot /> </template>
  </v-switch>
</template>

<script lang="ts">
import { useAlertStore } from '@/stores/alert'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      alertStore: useAlertStore(),
      notificationPerm: false,
    }
  },
  mounted() {
    this.notificationPerm = Notification.permission == 'granted'
  },
  methods: {
    requestNotification() {
      Notification.requestPermission((status) => {
        if (status == 'granted') {
          this.alertStore.fire('Notification enable')
          this.notificationPerm = true
        }
      })
    },
  },
})
</script>

<style scoped></style>
