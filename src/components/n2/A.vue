<template>
  <div>
    <B></B>
  </div>
</template>
<script>
import { reactive, provide } from 'vue'
import B from './B.vue'

export default {
  components: {
    B,
  },
  setup() {
    const state = reactive({
      message: 'Hello from parent component!'
    })
    provide('message', state.message)
    return {
      state,
    }
  },
}
</script>
