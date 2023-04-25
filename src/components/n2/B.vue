<template>
  <div>
    <p>B-A: {{ aMessage }}</p>
    <br>
    <C></C>
  </div>
</template>
<script>
import { reactive, inject, provide } from 'vue'
import C from './C.vue'

export default {
  components: {
    C
  },

  setup() {
    const data = reactive({
      bMessage: 'I am from B'
    })
    provide('bMessage', data.bMessage)

    // 从a中注入数据
    const aMessage = inject('aMessage')
    return {
      data,
      aMessage
    }
  },
}
</script>
