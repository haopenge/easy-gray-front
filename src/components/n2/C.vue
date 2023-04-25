<template>
  <div>
    <div>C-A : {{ aMessage }}</div>
    <div>C-B : {{ bMessage }}</div>
  </div>
</template>
<script>
import { inject } from 'vue'

export default {
  setup() {
    const aMessage = inject('aMessage')
    const bMessage = inject('bMessage')
    return {
      aMessage,
      bMessage
    }
  },
}
</script>
<style scoped>
div {
  margin-bottom: 20px;
}
</style>
