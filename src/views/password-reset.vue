<template>
  <div class="c-login-layout-elements-arrangement">
    <p class="c-large-title--01 u-text-align--center">Type your email</p>
    <div>
      <BaseInput
        label="Email"
        type="email"
        bg-color="rgba(255,255,255,0.4)"
        color="#fff"
        v-model="password"
      />
    </div>
    <BaseButton
      color="secondary"
      size="large"
      block
    >
      Reset password
    </BaseButton>
    <p class="u-text-align--center">
      <span class="c-body--01">Are you lost?</span>
      <router-link
        to="/login"
        class="c-body--02"
      >
        Sign in
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import BaseInput from '@/components/general/atoms/BaseInput.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BaseInput, BaseButton },
  data() {
    return {
      email: null,
      password: null,
    }
  },
})
</script>
