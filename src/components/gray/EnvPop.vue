<template>
  <Modal v-model="visible" title="编辑" @on-ok="ok()" @on-cancel="cancel()">
    <Form ref="grayEnv" :model="grayEnv" :label-width="80">
      <FormItem label="名称:" prop="name">
        <Input type="text" v-model="grayEnv.name" disabled="true"/>
      </FormItem>
      <FormItem label="描述:" prop="description">
        <Input type="text" v-model="grayEnv.description"/>
      </FormItem>
      <FormItem label="有效期至:">
        <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date" :model-value="grayEnv.expireTime" @on-change="expireTimeChange"/>
      </FormItem>
    </Form>
  </Modal>
</template>
<script>

export default {
  props: {
    visible: false,
    grayEnv: {
      type: Object,
      default: {

      }
    }
  },
  data() {
    return {
      grayEnvExpireTime: this.grayEnv.expireTime
    }
  },
  methods: {
    ok () {
      console.log("--------ok-------" + this.grayEnv.expireTime)
      this.$emit('env-edit', this.grayEnv)
    },
    cancel () {
      console.log("-----cancel------" + this.grayEnv.name)
    },
    expireTimeChange(){

    }
  }
}
</script>
