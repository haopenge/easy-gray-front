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
//import axios from 'axios'

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
      return [
        {
          id: 1,
          name: 'John Brown',
          description: 'New York No. 1 Lake Park'
        },
        {
          id: 2,
          name: 'Jim Green',
          description: 'London No. 1 Lake Park'
        }
      ]
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
