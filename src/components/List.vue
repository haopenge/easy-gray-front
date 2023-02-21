<template>
  <List>
    <ListItem v-for="item in data" :key="item.title">
      <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
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
  findGrayEnvList() {
    console.log('hello wtf')
    return axios
      .get('/gray/findAll')
      .then((response) => console.log(response.data))
      .catch((error) => { // 请求失败处理
        console.log(error)
      })
  },
  data() {
    return {
      data: this.findGrayEnvList.data
    }
  },
}

</script>
