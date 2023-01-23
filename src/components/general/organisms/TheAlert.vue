<template>
  <div>
    <v-alert
      class="c-alert"
      :class="`c-alert--${alertStore.show ? 'active' : 'disable'}`"
      :value="true"
      :color="type.color"
      border="left"
      elevation="2"
      dense
      prominent
      colored-border
      :icon="type.icon"
    >
      <div class="c-alert__content">
        <div class="c-alert__info">
          <b>{{ alertStore.title }}</b>
          {{ alertStore.content }}
        </div>
        <img
          class="c-alert__img"
          src="/img/logo-64x64.png"
        />
      </div>
    </v-alert>
  </div>
</template>

<script>
import { useAlertStore } from '@/stores/alert'

export default {
  data() {
    return {
      alertStore: useAlertStore(),
      types: {
        success: {
          icon: 'mdi-check',
          color: 'success',
        },
        info: {
          icon: 'mdi-information',
          color: 'info',
        },
        warning: {
          icon: 'mdi-alert',
          color: 'warning',
        },
        error: {
          icon: 'mdi-alert-octagon',
          color: 'error',
        },
      },
    }
  },
  computed: {
    type() {
      return this.types[this.alertStore.type] || {}
    },
  },
}
</script>

<style lang="scss" scoped>
.c-alert {
  width: 100%;
  position: fixed;
  z-index: 100;
}
.c-alert__content {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.c-alert__img {
  width: 40px;
  height: 40px;
}

.c-alert__info {
  display: flex;
  flex-direction: column;
}

.c-alert--active {
  top: 0;
  transition: 1s;
}

.c-alert--disable {
  opacity: 0;
  top: -100px;
  transition: 1s;
}
</style>
