<template>
  <div>
    <item :goods="goods" @change='changePrice'>
    </item>
  </div>
</template>
<script>

import item from '@/components/n1/Item.vue'

export default {
  name: 'App',
  data() {
    return {
      goods: {
        name: 'iPhone XS Max',
        price: 10000
      }
    }
  },
  methods: {
    changePrice(val) {
      console.log(val)
      this.goods.price = val
    }
  },
  components: {
    Item: item
  }
}
</script>
