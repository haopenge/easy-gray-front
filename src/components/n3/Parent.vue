<template>
  <div>
    <my-component message="Hello, World!" v-bind="$attrs"/>
    <p>这是父组件中的一些内容</p>
  </div>
</template>

<script>
import MyComponent from './ChildA.vue'

export default {
  components: {
    MyComponent,
  },
}
</script>
