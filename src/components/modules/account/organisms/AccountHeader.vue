<template>
  <div class="c-account-header">
    <img
      src="/img/avatar.png"
      class="c-account-header__img"
    />
    <div class="c-account-header__data">
      <p class="c-body--02">{{ user.name }}</p>
      <p class="c-subhead--01">{{ user.email }}</p>
    </div>
    <div @click="$emit('click')">
      <v-icon>mdi-chevron-right</v-icon>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.c-account-header {
  display: flex;
  align-items: center;
  gap: var(--gap);
}
.c-account-header__img {
  height: 90px;
}
.c-account-header__data {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
