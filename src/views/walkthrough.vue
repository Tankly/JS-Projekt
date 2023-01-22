<template>
  <div class="c-walkthrough">
    <section>
      <p class="c-headline--01">Welcome to Shopifylist</p>
      <p class="c-subhead--01">The Right Way to Make Your Shopping Easier</p>
    </section>
    <section class="c-walkthrough-bottom">
      <div>
        <p class="c-title--02">Save Your Time & Energy</p>
        <p class="c-body--01">
          Make shopping smarter, avoid extra trips to the supermarkets & mails
          and get more organized usign Shopifylist.
        </p>
      </div>
      <div class="c-walkthrough-bottom__buttons">
        <BaseButtonShadow
          to="login"
          size="large"
          >Sign in</BaseButtonShadow
        >
        <BaseButtonShadow
          to="register"
          size="large"
          >Sign up</BaseButtonShadow
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import BaseButtonShadow from '@/components/general/molecules/BaseButtonShadow.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BaseButtonShadow },
})
</script>
