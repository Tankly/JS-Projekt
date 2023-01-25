<template>
  <div class="u-width--full o-flex o-flex--direction-column u-padding">
    <BaseInput
      label="Name"
      variant="underlined"
      :rules="[validation.required]"
      v-model="values.name"
    />
    <span class="c-body--01">Color</span>
    <v-divider></v-divider>
    <div class="c-color-picker u-margin__vertical">
      <div
        v-for="color in colors"
        :key="color"
        :style="
          color == values.color
            ? `border: 1px solid ${color}; border-radius: 100%;`
            : ''
        "
        class="u-padding--xxs"
      >
        <v-avatar
          :color="color"
          size="33"
          @click="values.color = color"
        ></v-avatar>
      </div>
    </div>
    <span class="c-body--01">Icon</span>
    <v-divider></v-divider>
    <div class="c-color-picker u-margin__vertical">
      <div
        v-for="icon in icons"
        :key="icon"
        :style="
          icon == values.icon
            ? `border: 1px solid grey; border-radius: 100%;`
            : ''
        "
      >
        <v-avatar
          color="grey"
          size="34"
          @click="values.icon = icon"
          ><v-icon>{{ icon }}</v-icon></v-avatar
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseInput from '@/components/general/atoms/BaseInput.vue'
import validation from '@/lib/validation/validation'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      validation,
      colors: [
        '#000000',
        '#00ffff',
        '#7fffd4',
        '#FF0000',
        '#0000ff',
        '#8a2be2',
        '#a52a2a',
        '#deb887',
        '#5f9ea0',
        '#7fff00',
        '#d2691e',
        '#ff7f50',
      ],
      icons: [
        'mdi-food',
        'mdi-food-apple',
        'mdi-food-drumstick-off',
        'mdi-food-drumstick',
        'mdi-food-off',
        'mdi-cookie',
        'mdi-dumbbell',
        'mdi-account',
        'mdi-alert-circle-outline',
        'mdi-alarm-panel',
        'mdi-star',
        'mdi-star-four-points',
        'mdi-bell-outline',
        'mdi-arm-flex',
      ],
    }
  },
  components: { BaseInput },
  computed: {
    values: {
      get() {
        return this.data
      },
      set(value: any) {
        this.$emit('update:data', value)
      },
    },
  },
})
</script>

<style scoped>
.c-color-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
