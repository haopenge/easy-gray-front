<template>
    <Modal v-model="repositoryPopVisible" title="编辑" @on-ok="ok()" @on-cancel="cancel()">
        <Form ref="repository" :model="repository" :label-width="80">
            <FormItem label="名称:" prop="name">
                <Input type="text" v-model="repository.name"/>
            </FormItem>

            <FormItem label="描述:" prop="description">
                <Input type="text" v-model="repository.description"/>
            </FormItem>
        </Form>
    </Modal>
</template>


<script>
export default {
  props: {
    repository: {
      type: Object,
      default: {
        id: 1,
        type: 1,
        name: 'gitee',
        description: 'gitee 仓库',
        username: 'xiaoyuxxx',
        password: '12138',
        sshPrivateKey: ''
      }
    },
    repositoryPopVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ok() {
    },
    cancel() {
    }
  }
}
</script>
