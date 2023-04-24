<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import { inject } from 'vue'

export default {
  setup() {
    const message = inject('message')
    return {
      message,
    }
  },
}
</script>
