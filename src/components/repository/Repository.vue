<template>
  <Button type="primary" style="width: 70px;" @click="showRepositoryAddPop">新增</Button>

  <Table border :columns="columns" :data="repositoryList" @on-row-click="showDetail">
    <template #name="{ row }">
      <strong>{{ row.name }}</strong>
    </template>
    <template #action="{ row, index }">
      <Button type="info" size="small" style="margin-right: 5px" @click.stop="showRepositoryEditPop(row)">编辑</Button>
      <Button type="warning" size="small" @click.stop="remove(row)">删除</Button>
    </template>
  </Table>
</template>
<script>

export default {
  props: {
    repositoryList: {
      type: Array,
      default: [
        {
          id: 1,
          name: 'easy-gray',
          description: '灰度发布项目',
          easyAuthenticateId: 1,
        }
      ]
    }
  },
  data() {
    return {
      columns: [
        {
          title: '名称',
          slot: 'name'
        },
        {
          title: '详情',
          key: 'description'
        },
        {
          title: '认证id',
          key: 'easyAuthenticateId'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
    }
  },
  methods: {
    showRepositoryAddPop(row) {
    },
    showRepositoryEditPop(row) {
    },
    remove(row) {
      this.$emit('delete-env', row.id)
    }
  }
}
</script>
