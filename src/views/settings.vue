<template>
  <section class="c-settings">
    <AccountHeader
      v-if="auth.user"
      :user="auth.user"
      class="u-padding"
      @click="goToEditAccount"
    />
    <v-divider></v-divider>
    <v-card prepend-icon="mdi-bell">
      <template v-slot:title
        ><span class="c-subhead--04">notifications</span>
      </template>
    </v-card>
    <NotificationSwitch> Turn on notifications </NotificationSwitch>
    <div class="c-settings__logout">
      <BaseButton
        block
        color="error"
        size="large"
        @click="logout"
      >
        Logout
      </BaseButton>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'
import fireNotification from '@/lib/fireNotification'
import AccountHeader from '@/components/modules/account/organisms/AccountHeader.vue'
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import NotificationSwitch from '@/components/modules/account/atoms/NotificationSwitch.vue'

export default defineComponent({
  components: { AccountHeader, BaseButton, NotificationSwitch },
  data() {
    return {
      auth: useAuthStore(),
    }
  },
  methods: {
    logout() {
      this.auth.clear()
      fireNotification('Logout success')
      this.$router.push('/login')
    },
    goToEditAccount() {
      this.$router.push('/account-edit')
    },
  },
})
</script>
<style lang="scss" scoped>
.c-settings {
  height: 100%;
  position: relative;
}
.c-settings__logout {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
