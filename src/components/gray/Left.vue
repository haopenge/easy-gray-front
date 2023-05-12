<template>
  <!--@on-row-click="showDetail"-->
  <Table border :columns="columns" :data="grayEnvList" @on-row-click="showDetail">
    <template #name="{ row }">
      <strong>{{ row.name }}</strong>
    </template>
    <template #action="{ row, index }">
      <Button type="primary" size="small" style="margin-right: 5px" @click.stop="editPop(row)">编辑</Button>
      <Button type="error" size="small" @click.stop="remove(index)">Delete</Button>
    </template>
  </Table>
</template>
<script>

export default {
  props: {
    grayEnvList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      columns: [
        {
          title: '环境名',
          slot: 'name'
        },
        {
          title: '详情',
          key: 'description'
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
    editPop(row) {
      this.$emit('show-pop', row)
    },
    showDetail(row) {
      console.log(row.id)
      this.$emit('refresh-project', row.id)
    },
    remove(index) {
      this.grayEnvList.splice(index, 1);
    }
  }
}
</script>
