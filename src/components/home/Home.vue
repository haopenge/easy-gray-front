<style scoped>


.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 50px;
  height: 50px;
  top: 10px;
  float: left;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat
}

.switch-layout-logo {
  width: 50px;
  height: 50px;
  top: 10px;
  float: left;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
}

.layout-footer-center {
  text-align: center;
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}

.layout-footer-center {
  text-align: center;
}

.top-menu {
  height: 60px;
  line-height: 60px;
  left: 96px;
}

</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <div @click="collapsedSider" class="layout-logo"
             :style="{ backgroundImage: 'url(' + require('@/assets/logo.png') + ')' }">
        </div>
<!--        <div class="switch-layout-logo">
          <Icon @click="collapsedSider" type="md-menu"
                size="24"></Icon>
        </div>-->


        <Menu mode="horizontal" theme="dark" active-name="1" class="top-menu">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            <span>吃</span>
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            <span>喝</span>
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            <span>玩</span>
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            <span>乐</span>
          </MenuItem>
        </Menu>
      </Header>
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu :open-names="openNames" :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses"
                @on-open-change="menuOpenChange" @on-select="switchPageContent">
            <template v-for="(item,index) in menus" :key="index">
              <Submenu :name=item.id>
                <template #title>
                  <Icon type="ios-navigate"></Icon>
                  <span>{{ item.name }}</span>
                </template>
                <template v-for="(cellRow, cellIndex) in item.menus" :key="cellIndex">
                  <MenuItem :name=cellRow.id>
                    <span> {{ cellRow.name }}</span>
                  </MenuItem>
                </template>
              </Submenu>
            </template>
          </Menu>
        </Sider>
        <Layout>
          <Main v-if="activeName === 11"/>
          <Content v-if="activeName !== 11" style="  height: 1000px;border: 1px solid #dcdee2;">
            敬请期待
          </Content>
        </Layout>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; xiaoyuxxx</Footer>
    </Layout>

  </div>
</template>
<script>

import Main from '@/components/gray/Main.vue'
import { Content } from 'view-ui-plus'

export default {
  components: {
    Content,
    Main
  },
  data() {
    return {
      isCollapsed: false,
      menus: [
        {
          id: 1,
          name: '版本管理',
          menus: [
            {
              id: 11,
              name: '灰度管理',
            },
            {
              id: 12,
              name: '仓库管理',
            }
          ]
        },
      ],
      openNames: [
        1
      ],
      activeName: 11
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse()
      console.log('开关状态 ： ' + this.isCollapsed)

    },
    switchPageContent(id) {
      console.log(id)
      this.activeName = id
    },
    menuOpenChange(name) {
      console.log('menuOpenChange name = ' + name)
    }
  }
}
</script>

