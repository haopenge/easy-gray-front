<template>
  <div class="demo-split">
    <Split v-model="split">
      <template #left>
        <div class="demo-split-pane">
          <List/>
        </div>
      </template>
      <template #right>
        <div class="demo-split-pane">
          <GrayTable/>
        </div>
      </template>
    </Split>
  </div>
</template>
<script>
import GrayTable from '@/components/GrayTable.vue'
import List from '@/components/List.vue'

export default {
  components: { List, GrayTable },
  data() {
    return {
      split: 0.4
    }
  },
}
</script>
<style>
.demo-split{
  height: 1000px;
  border: 1px solid #dcdee2;
}
.demo-split-pane{
  padding: 10px;
}
</style>
