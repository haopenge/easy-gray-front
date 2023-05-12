<template>
  <div class="demo-split">
    <Split v-model="split">
      <template #left>
        <div class="demo-split-pane">
          <Left :gray-env-list="grayEnvList" @refresh-project='refreshProject' @show-pop="showEnvPop"/>
        </div>
      </template>
      <template #right>
        <div class="demo-split-pane">
          <Right :gray-project-list="grayProjectList"/>
        </div>
      </template>
    </Split>
  </div>

  <div>
    <EnvPop :gray-env="grayEnv" :visible="visible" @env-edit="envEdit"/>
  </div>

</template>
<script>
import Left from '@/components/gray/Left.vue'
import Right from '@/components/gray/Right.vue'
import EnvPop from '@/components/gray/EnvPop.vue'
import axios from 'axios'

export default {
  components: {
    Left,
    Right,
    EnvPop
  },
  created() {
    this.init()
  },
  data() {
    return {
      split: 0.4,
      grayEnvList: [],
      grayProjectList: [],
      grayEnv: {
        id: '1',
        name: '2',
        description: '3',
        expireTime: new Date('2023-01-01')
      },
      visible: false
    }
  },
  methods: {
    async init() {
      console.log('invoke init()')
      this.findGrayEnvList()
    },

    /**
     * 刷新项目列表
     * @returns {[{name: string, description: string, id: number},{name: string, description: string, id: number}]}
     */
    findGrayEnvList() {
      axios
          .get('/env/findAll')
          .then((response) => {
            console.log(response)
            if (response && response.data) {
              const result = response.data
              this.grayEnvList = result.data || []
              this.grayEnvList.forEach((item) => {
                item.description = item.description ? item.description : '未填写环境描述'
              })
              this.refreshProject(this.grayEnvList[0].id)
            }
          })
          .catch((error) => { // 请求失败处理
            console.log(error)
          })
    },

    /**
     * 查看灰度项目
     * @param envId 环境id
     */
    refreshProject(envId) {
      console.log('.... findProject', envId)
      axios
          .get('/project/findByEnvId?envId=' + envId)
          .then((response) => {
            console.log(response)
            if (response && response.data) {
              const result = response.data
              this.grayProjectList = result.data || []
              this.grayProjectList.forEach((item) => {
                item.description = item.description ? item.description : '未填写项目描述'
              })
            }
            console.log(`grayProjectList : ${this.grayProjectList}`)
          })
          .catch((error) => { // 请求失败处理
            console.log(error)
          })
    },

    /**
     * 展示环境弹窗
     */
    showEnvPop(row) {
      this.grayEnv = {
        id: row.id,
        name: row.name,
        description: row.description,
        expireTime: row.expireTime
      }
      console.log(this.grayEnv.name)
      this.visible = true
    },

    /**
     * 修改环境信息
     * @param grayEnv
     */
    envEdit(grayEnv) {
      const payload = {
        id: grayEnv.id,
        name: grayEnv.name,
        description: grayEnv.description,
        expireTime: grayEnv.expireTime
      }
      axios.post('/env/edit', payload)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
     this.findGrayEnvList();
    }
  }
}
</script>
<style>
.demo-split {
  height: 1000px;
  border: 1px solid #dcdee2;
}

.demo-split-pane {
  padding: 10px;
}
</style>
