<template>
  <div
    class="c-login-layout-background"
    :style="
      $route.meta.backgroundImage
        ? `background-image: url(${publicPath}${$route.meta.backgroundImage});`
        : ''
    "
  >
    <div
      class="c-login-layout-background__opacity"
      :class="{
        'c-login-layout-background__opacity--hidden':
          !$route.meta.backgroundImage,
      }"
    >
      <v-main class="o-login-layout">
        <slot />
      </v-main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
    }
  },
})
</script>
<style lang="scss" scoped>
.c-login-layout-background {
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.28) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.c-login-layout-background__opacity {
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  &--hidden {
    background: unset;
  }
}

.o-login-layout {
  height: 100%;
  color: white;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .c-login-layout-background {
    background-image: unset !important;
  }
}
</style>
