<template>
  <v-list-item
    :key="data.name"
    :title="data.name"
    rounded
    class="c-shopping-list-item"
  >
    <template v-slot:prepend>
      <v-avatar :color="data.color">
        <v-icon color="secondary">{{ data.icon }}</v-icon>
      </v-avatar>
    </template>

    <template v-slot:append>
      <v-btn
        color="grey-lighten-1"
        icon="mdi-information"
        variant="text"
      ></v-btn>
    </template>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.c-shopping-list-item {
  background-color: #e5e5e5;
  width: 90%;
}
</style>
