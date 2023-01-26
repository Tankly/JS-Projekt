<template>
  <Teleport to="#app-bar">
    <div
      class="o-flex o-flex--space-between u-width--full o-flex__vertical--center"
    >
      <BaseButton
        variant="text"
        :to="`/lists/${listId}`"
      >
        <span class="c-body--02">Back</span>
      </BaseButton>
      <BaseButton
        variant="text"
        @click="$emit('save')"
      >
        <span class="c-body--02">Edit</span>
      </BaseButton>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '@/components/general/atoms/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton,
  },
  props: {
    listId: {
      type: [Number, String],
      required: true,
    },
  },
})
</script>
