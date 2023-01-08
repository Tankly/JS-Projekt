<template>
  <div>home page</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExerciseDataServices from '@/services/data-services/ExerciseDataServices'
import type ResponseData from '@/types/ResponseData'

export default defineComponent({
  mounted() {
    ExerciseDataServices.getAll().then((response: ResponseData) => {
      console.log(response)
    })
  },
})
</script>
