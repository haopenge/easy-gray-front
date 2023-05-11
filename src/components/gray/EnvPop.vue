<template>
  <Form ref="formCustom" :model="grayEnv" :label-width="80">
    <FormItem label="名称:" prop="name">
      <Input type="text" v-model="grayEnv.name"/>
    </FormItem>
    <FormItem label="描述:" prop="description">
      <Input type="text" v-model="grayEnv.description"/>
    </FormItem>
  </Form>
</template>
<script>
export default {
  props: {
    grayEnv: {
      type: Object,
      default: {}
    }
  },
  methods: {

  }
}
</script>
