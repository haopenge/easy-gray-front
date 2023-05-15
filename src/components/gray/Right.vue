<template>
  <Button type="primary" size="small" style="margin-right: 5px" @click.stop="showProjectPop">新增</Button>

  <Table border :columns="columns" :data="grayProjectList">
    <template #name="{ row }">
      <strong>{{ row.name }}</strong>
    </template>
    <template #action="{row,index}">
      <Button type="success" size="small" style="margin-right: 5px" @click="runProject(row.id)">
        运行
      </Button>
      <Button type="info" size="small" style="margin-right: 5px" @click="showProjectPop(row)">
        编辑
      </Button>
      <Button type="warning" size="small" @click="remove(row)">删除</Button>
    </template>
  </Table>
</template>
<script>
export default {
  name: 'GrayTable',
  props: {
    grayProjectList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      columns: [
        {
          title: '名称',
          slot: 'name',
          width: 200
        },
        {
          title: '分支',
          key: 'branch',
          width: 100
        },
        {
          title: '运行状态',
          key: 'status',
          width: 100
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ]
    }
  },
  methods: {
    /**
     * 运行项目
     * @param projectId 项目id
     */
    runProject(projectId) {
      // TODO 待补充
      console.log('项目启动中：', projectId)
      this.$emit('run-project', projectId)
    },
    remove(row) {
      this.$emit('delete-project', row.id)
    },
    showProjectPop(row) {
      this.$emit('show-project-pop', row)
    },
  }
}
</script>
