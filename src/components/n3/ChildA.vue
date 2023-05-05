<template>
  <div class="wrapper">
    <slot :text="message" />
    <button @click="onClick">点击此处触发一个事件</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    message: String,
  },
  methods: {
    onClick() {
      this.$emit('hello-event')
    },
  },
}
</script>

<style>
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
</style>
