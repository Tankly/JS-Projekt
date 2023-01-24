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
        label="Name"
        bg-color="rgba(255,255,255,0.4)"
        :rules="[validation.required]"
        color="#fff"
        v-model="name"
      />
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
      <BaseButton
        color="secondary"
        size="large"
        :loading="loading"
        :disabled="!validForm"
        type="submit"
        block
      >
        Create an account
      </BaseButton>
    </v-form>
    <p class="u-text-align--center">
      <span class="c-body--01">Already a member?</span>
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
import validation from '@/lib/validation/validation'
import { useAlertStore } from '@/stores/alert'
import AuthService from '@/services/AuthService'
import type LoginResponseInterface from '@/interfaces/Responses/LoginResponseInterface'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
  components: { BaseInput, BaseButton },
  data() {
    return {
      validation,
      alertStore: useAlertStore(),
      authStore: useAuthStore(),
      loading: false as boolean,
      validForm: false as boolean,
      name: null as string | null,
      email: null as string | null,
      password: null as string | null,
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        this.loading = true
        AuthService.register(
          this.name as string,
          this.email as string,
          this.password as string
        )
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
