<template>
  <Modal v-model="projectBuildPopVisible" title="编辑" @on-ok="ok()" @on-cancel="cancel()">
    <Form ref="repository"  :label-width="80">
      <FormItem label="名称:" prop="name">
        <Input type="text" />
      </FormItem>

    </Form>
  </Modal>
</template>


<script>

export default {
  props: {
    project: {
      type: Object,
      default: {}
    },
    projectBuildPopVisible: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    ok() {
      this.$emit('project-build-save')
    },
    cancel() {
      this.$emit('project-build-cancel')
    },
  }
}
</script>
