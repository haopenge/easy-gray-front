<template>
  <div>
    商品名称：{{ goods.name }}
    <br>
    商品价格：{{ goods.price }}
    <button @click='changePrice()'>点击</button>

  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default: null
    }
  },
  methods: {
    changePrice() {
      this.$emit('change', '子组件向父组件传的值')
    }
  }
}
</script>
