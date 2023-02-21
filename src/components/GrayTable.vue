<template>
  <Table border :columns="columns" :data="data">
    <template #name="{ row }">
      <strong>{{ row.name }}</strong>
    </template>
    <template #action="{index}">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">
        编辑
      </Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
    </template>
  </Table>
</template>
<script>
export default {
  name: 'GrayTable',
  data() {
    return {
      columns: [
        {
          title: '名称',
          slot: 'name'
        },
        {
          title: '分支',
          key: 'branch'
        },
        {
          title: '运行状态',
          key: 'status'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data: [
        {
          name: 'easy-gray-gateway-api',
          branch: 'main',
          status: '运行中',
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
      })
    },
    remove(index) {
      this.data.splice(index, 1)
    }
  }
}
</script>
