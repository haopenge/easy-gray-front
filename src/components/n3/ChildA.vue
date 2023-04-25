<template>
  <div>
    <button v-bind="$attrs"
            @click="$emit('update:message', 'Hello from child!')"

    >
      Send message to parent
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  mounted() {
    console.log(this.$attrs.message)
  },
}
</script>
