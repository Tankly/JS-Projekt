<template>
  <div class="c-container">
    <v-form
      v-model="validForm"
      @submit.prevent="onSubmit"
    >
      <BaseInput
        label="Name"
        variant="underlined"
        :rules="[validation.required]"
        v-model="name"
      />
      <BaseInput
        label="Email"
        type="email"
        variant="underlined"
        :rules="[validation.required, validation.email]"
        v-model="email"
      />

      <BaseInput
        label="New password"
        type="password"
        variant="underlined"
        v-model="password"
      />

      <BaseButton
        type="submit"
        block
        color="secondary"
        size="large"
        :loading="loading"
        :disabled="!validForm"
      >
        Update
      </BaseButton>
    </v-form>
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
import type AuthUserInteface from '@/interfaces/AuthUserInteface'

export default defineComponent({
  components: { BaseInput, BaseButton },
  data() {
    return {
      validation,
      authStore: useAuthStore(),
      alertStore: useAlertStore(),
      loading: false as boolean,
      validForm: false as boolean,
      name: null as string | null,
      password: null as string | null,
      email: null as string | null,
    }
  },
  computed: {
    user() {
      return this.authStore.user || {}
    },
  },
  mounted() {
    this.name = this.user.name
    this.email = this.user.email
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        this.loading = true
        AuthService.updateUser(
          this.name as string,
          this.email as string,
          this.password as string
        )
          .then((user: AuthUserInteface) => {
            this.authStore.setUser(user)
            this.alertStore.fire('Updated successfully!')
            this.$router.push({
              name: 'Settings',
            })
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
  },
})
</script>
