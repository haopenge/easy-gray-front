<template>
  <Table border :columns="columns" :data="grayProjects">
    <template #name="{ row }">
      <strong>{{ row.name }}</strong>
    </template>
    <template>
      <Button type="primary" size="small" style="margin-right: 5px">
        编辑
      </Button>
      <Button type="error" size="small">删除</Button>
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
      grayProjects: [
        {
          name: 'easy-gray-gateway-api',
          branch: 'main',
          status: '未启用'
        }
      ]
    }
  }
}
</script>
