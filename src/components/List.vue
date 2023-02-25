<template>
  <List>
    <ListItem v-for="item in grayEnvList" :key="item.id" onclick="hello()">
        <ListItemMeta :title="item.name" :description="item.description" />
        <template #action>
          <li>
            <a href="">编辑</a>
          </li>
          <li>
            <a href="">移除</a>
          </li>
        </template>
    </ListItem>
  </List>
</template>
<script>

import axios from 'axios'

export default {
  created() {
    /* this.init() */
  },
  data() {
    return {
      grayEnvList: [
        {
          id: 2,
          name: 'QQ-12138',
          description: 'qq测试环境'
        },
        {
          id: 1,
          name: 'QA',
          description: '公共环境'
        }

      ]
    }
  },

  methods: {
    async init() {
      await this.findGrayEnvList()
    },
    /**
     * 查询灰度列表
     * @returns {Promise<void>}
     */
    findGrayEnvList() {
      axios
        .get('/gray/findAll')
        .then((response) => {
          console.log(response)
          if (response && response.data) {
            const result = response.data
            this.grayEnvList = result.data || []
            this.grayEnvList.forEach((item) => {
              item.description = item.description ? item.description : '未填写环境描述'
            })
          }
          console.log(`grayEnvList : ${this.grayEnvList}`)
        })
        .catch((error) => { // 请求失败处理
          console.log(error)
        })
    }
  }
}

</script>
