<template>
  <div class="c-login-layout-elements-arrangement">
    <p class="c-large-title--01 u-text-align--center">
      Sign in to Your Account
    </p>
    <v-form
      v-model="validForm"
      @submit.prevent="onSubmit"
    >
      <BaseInput
        label="Email"
        type="email"
        bg-color="rgba(255,255,255,0.4)"
        :rules="[validation.required, validation.email]"
        color="#fff"
        v-model="email"
      />
      <BaseInput
        label="Password"
        type="password"
        :rules="[validation.required]"
        bg-color="rgba(255,255,255,0.4)"
        color="#fff"
        v-model="password"
      />

      <router-link
        to="password-reset"
        class="c-subhead--01 u-text-align--right"
      >
        Forgot your password?
      </router-link>

      <BaseButton
        type="submit"
        block
        color="secondary"
        size="large"
        :loading="loading"
        :disabled="!validForm"
      >
        Sign in
      </BaseButton>
    </v-form>

    <p class="u-text-align--center">
      <span class="c-body--01">Not yet a member?</span>
      <router-link
        to="/register"
        class="c-body--02"
      >
        Sign up
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import BaseInput from '@/components/general/atoms/BaseInput.vue'
import AuthService from '@/services/AuthService'
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type LoginResponseInterface from '@/interfaces/Responses/LoginResponseInterface'
import validation from '@/lib/validation/validation'
import { useAlertStore } from '@/stores/alert'

export default defineComponent({
  components: { BaseInput, BaseButton },
  data() {
    return {
      validation,
      authStore: useAuthStore(),
      alertStore: useAlertStore(),
      loading: false as boolean,
      validForm: false as boolean,
      email: null as string | null,
      password: null as string | null,
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        this.loading = true
        console.log('xd')
        AuthService.login(this.email as string, this.password as string)
          .then((data: LoginResponseInterface) => {
            this.authStore.authorize(data)
            this.alertStore.fire('Welcome!')
            this.$router.push('/lists')
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
  },
})
</script>
