import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
/*
import axios from 'axios'
*/
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// import './mock'

const app = createApp(App)

/* axios
  .get('/gray/findAll')
  // eslint-disable-next-line no-return-assign
  .then((response) => console.log(response.data))
  .catch((error) => { // 请求失败处理
    console.log(error)
  }) */

app.use(store)
  .use(router)
  .use(ViewUIPlus)
  .mount('#app')
