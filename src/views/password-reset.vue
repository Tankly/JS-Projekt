<template>
  <div class="c-login-layout-elements-arrangement">
    <p class="c-large-title--01 u-text-align--center">Type your email</p>
    <v-form
      v-model="validForm"
      @submit.prevent="onSubmit"
    >
      <BaseInput
        label="Email"
        type="email"
        :rules="[validation.required, validation.email]"
        bg-color="rgba(255,255,255,0.4)"
        color="#fff"
        v-model="email"
      />
      <BaseButton
        color="secondary"
        size="large"
        type="submit"
        :loading="loading"
        :disabled="!validForm"
        block
      >
        Reset password
      </BaseButton>
    </v-form>
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
import AuthService from '@/services/AuthService'
import { useAlertStore } from '@/stores/alert'
import { defineComponent } from 'vue'
import validation from '@/lib/validation/validation'

export default defineComponent({
  components: { BaseInput, BaseButton },
  data() {
    return {
      validation,
      email: null as string | null,
      alertStore: useAlertStore(),
      loading: false as boolean,
      validForm: false as boolean,
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        this.loading = true
        AuthService.resetPassword(this.email as string)
          .then(() => {
            this.alertStore.fire('Email sent!')
            this.$router.push('/login')
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
  },
})
</script>
