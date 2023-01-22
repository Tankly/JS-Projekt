<template>
  <div class="c-login">
    <section class="c-login__content">
      <p class="c-large-title--01 u-text-align--center">
        Sign in to Your Account
      </p>
      <div>
        <BaseInput
          label="Email"
          type="password"
          bg-color="rgba(255,255,255,0.4)"
          color="#fff"
          v-model="password"
        />
        <BaseInput
          label="Password"
          type="password"
          bg-color="rgba(255,255,255,0.4)"
          color="#fff"
          v-model="password"
        />
      </div>
      <p class="c-subhead--01 u-text-align--right">Forgot your password?</p>
      <BaseButton
        color="secondary"
        size="large"
        block
      >
        Sign in
      </BaseButton>
      <p class="u-text-align--center">
        <span class="c-body--01">Not yet a member?</span>
        <router-link
          to="/register"
          class="c-body--02"
        >
          Sign up
        </router-link>
      </p>
    </section>
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
<style lang="scss" scoped>
.c-login {
  height: 100%;
  display: flex;
  align-items: center;
}
.c-login__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
