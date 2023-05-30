<template>
    <Button type="primary" style="width: 70px;" @click="showRepositoryAddPop">新增</Button>

    <Table border :columns="columns" :data="repositoryList">
        <template #name="{ row }">
            <strong>{{ row.name }}</strong>
        </template>
        <template #action="{ row, index }">
            <Button type="info" size="small" style="margin-right: 5px" @click.stop="showRepositoryEditPop(row)">编辑
            </Button>
            <Button type="warning" size="small">删除</Button>
        </template>
    </Table>

    <RepositoryPop :repository="repository"
                   :repository-pop-visible="repositoryPopVisible"/>
</template>
<script>

import RepositoryPop from '@/components/repository/RepositoryPop.vue'

export default {
  components: {
    RepositoryPop
  },
  data() {
    return {
      columns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: 'git克隆地址',
          key: 'cloneUrl'
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
      repository: {
        id: 1,
        name: 'easy-gray',
        cloneUrl: 'git@gitee.com:xiaoyuxxx/easy-gray.git',
        description: '灰度发布项目',
        easyAuthenticateId: 1
      },
      repositoryList: [
        {
          id: 1,
          name: 'easy-gray',
          cloneUrl: 'git@gitee.com:xiaoyuxxx/easy-gray.git',
          description: '灰度发布项目',
          easyAuthenticateId: 1,
        }
      ],
      repositoryPopVisible: false,

    }
  },
  methods: {
    showRepositoryAddPop() {
        this.repository = {
            id: 1,
            name: 'easy-gray',
            cloneUrl: 'git@gitee.com:xiaoyuxxx/easy-gray.git',
            description: '灰度发布项目',
            easyAuthenticateId: 1
        }
      this.repositoryPopVisible = true
    },
    showRepositoryEditPop(row) {
      this.repositoryPopVisible = true
    },
    remove(row) {
    }
  }
}
</script>
