<template>
  <div class="c-shopping-row">
    <v-list-item
      lines="two"
      :key="data.name"
      rounded
      @click="active = !active"
      class="c-shopping-list-item transform"
      :class="{ sildeLeft: active }"
    >
      <template v-slot:title
        ><span class="c-body--02">{{ data.name }}</span></template
      >
      <template v-slot:prepend>
        <v-avatar :color="data.color">
          <v-icon color="secondary">{{ data.icon }}</v-icon>
        </v-avatar>
      </template>
    </v-list-item>
    <div
      class="c-shopping-list-actions transform"
      :class="{ slideRight: active }"
    >
      <BtnWithBottomText
        stacked
        :to="`/lists/${data.id}`"
        max-height="64"
        icon="mdi-open-in-new"
        label="Open"
      />
      <BtnWithBottomText
        stacked
        color="info"
        max-height="64"
        icon="mdi-pencil"
        label="Edit"
      />
      <BtnWithBottomText
        stacked
        color="error"
        max-height="64"
        icon="mdi-trash-can"
        label="Delete"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnWithBottomText from '@/components/layout/molecules/BtnWithBottomText.vue'

export default defineComponent({
  components: {
    BtnWithBottomText,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
})
</script>

<style scoped lang="scss">
.c-shopping-row {
  width: 100%;
  display: flex;
  justify-content: center;
}
.c-shopping-list-item {
  background-color: #e5e5e5;
  width: 95%;
  left: 0px;
}
.c-shopping-list-actions {
  display: flex;
  gap: 3px;
  position: absolute;
  right: -75%;
}
.transform {
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  -ms-transition: all 2s ease;
  transition: all 2s ease;
}
.sildeLeft {
  left: -260px;
}
.slideRight {
  right: 1%;
}
</style>
