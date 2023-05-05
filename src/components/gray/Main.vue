<template>
  <div class="demo-split">
    <Split v-model="split">
      <template #left>
        <div class="demo-split-pane">
          <Left :gray-env-list="grayEnvList" @change='changeGrayEnv'/>
        </div>
      </template>
      <template #right>
        <div class="demo-split-pane">
          <Right :gray-project-list="grayProjectList"/>
        </div>
      </template>
    </Split>
  </div>
</template>
<script>
import Left from '@/components/gray/Left.vue'
import Right from '@/components/gray/Right.vue'
import axios from 'axios'

export default {
  components: {
    Left,
    Right
  },
  created() {
    this.init()
  },
  data() {
    return {
      split: 0.4,
      grayEnvList: [],
      grayProjectList: []
    }
  },
  methods: {
    async init() {
      console.log('invoke init()')
      this.grayEnvList = this.findGrayEnvList()
      const grayEnv = this.grayEnvList[0]
      this.changeGrayEnv(grayEnv.id)
      console.log('grayProjectList: ', this.grayProjectList[0])
    },
    /**
     * 查询灰度列表
     * @returns {[{name: string, description: string, id: number},{name: string, description: string, id: number}]}
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
    },

    /**
     * 查看灰度项目
     * @param grayId
     */
    changeGrayEnv(grayId) {
      console.log('.... changeGrayEnv', grayId)
      this.grayProjectList = [
        {
          name: 'easy-gray-admin-api',
          branch: grayId,
          status: 1,
        }
      ]
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
