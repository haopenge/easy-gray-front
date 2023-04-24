<template>
  <div>
    <div>来自A的数据：{{ A }}</div>
    <div>来自B的数据：{{ B }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      A: '',
      B: ''
    }
  },
  mounted() {
    window.Event.$on('data-A', (val) => {
      this.A = val
    })
    window.Event.$on('data-B', (val) => {
      console.log('form')
      this.B = val
    })
  }
}
</script>
<style scoped>
div {
  margin-bottom: 20px;
}
</style>
