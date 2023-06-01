<style scoped>
.ivu-space-center {
  -webkit-box-align: start;
  align-items: start;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 50px;
}

</style>

<template>
  <Space >
    <div style="top: 100px">
      <Steps :current="buildStepIndex" direction="vertical" class="ivu-space-center">
        <template v-for="(item,index) in buildSteps" :key="index">
          <Step :title=item @click="buildStepClick(index)"/>
        </template>
      </Steps>
    </div>
    <div>
      <div v-if="buildStepIndex === 0">
        <Form style="height: 500px">
          <h1>待补充</h1>
        </Form>
      </div>

      <div v-if="buildStepIndex === 1">
        <Form>
          <div v-for="(item, index) in builds" :key="index">
            <Divider>步骤{{ index + 1 }}</Divider>
            <FormItem label="名称:" prop="name">
              <Input type="text" v-model="item.name"/>
            </FormItem>

            <FormItem label="处理脚本:" prop="name" v-if="item.type === 2">
              <Input type="textarea" v-model="item.name"/>
            </FormItem>
          </div>
          <Space direction="vertical" style="display: flex;justify-content: center;align-items: center">
            <Button type="info" ghost style="width: 500px">新增检出</Button>
            <Button type="success" ghost style="width: 500px">新增脚本</Button>
          </Space>
        </Form>
      </div>

      <div v-if="buildStepIndex === 2">
        <Form style="height: 500px">
          <h1>待补充</h1>
        </Form>
      </div>
    </div>


  </Space>


</template>


<script>

import { Button, Form, Layout } from 'view-ui-plus'

export default {
  name: 'build',
  components: {
    Layout,
    Form,
    Button
  },
  props: {},
  data() {
    return {
      builds: [
        {
          name: '检出代码',
          type: 1,
          content: ''
        },
        {
          name: 'maven打包',
          type: 2,
          content: ''
        }
      ],
      buildSteps: [
        '基础配置',
        '构建配置',
        '发布配置'
      ],
      buildStepIndex: 0
    }
  },
  methods: {
    buildStepClick(index) {
      this.buildStepIndex = index
    }
  }
}
</script>
