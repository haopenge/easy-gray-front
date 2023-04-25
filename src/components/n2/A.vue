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
    B
  },
  setup() {
    const data = reactive({
      aMessage: 'I am from A'
    })
    provide('aMessage', data.aMessage)
    return {
      data,
    }
  },
}
</script>
