<template>
  <Teleport to="#app-bar">
    <div class="o-flex o-flex--flex-end u-width--full o-flex__vertical--center">
      <BaseButton
        variant="text"
        to="lists-add"
      >
        <span class="c-body--02">Add list</span>
      </BaseButton>
    </div>
  </Teleport>
</template>

<script lang="ts">
import BaseButton from '@/components/general/atoms/BaseButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BaseButton },
})
</script>
