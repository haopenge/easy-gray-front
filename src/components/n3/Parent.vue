<template>
  <div>
    <h2>Parent Component</h2>
    <p>{{ message }}</p>
    <ChildA />
  </div>
</template>

<script>
import ChildA from './ChildA.vue'

export default {
  components: {
    ChildA
  },
  data() {
    return {
      message: 'Hello from parent!'
    }
  },
  methods: {
    /* ev1(){
      console.log("........ev1......")
    } */
  }
}
</script>
