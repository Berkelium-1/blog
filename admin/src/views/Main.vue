<template>
  <div>
    <el-container>
      <el-aside width="500">
        <!-- 侧边导航 -->
        <aside-el :collapse="isCollapse" :routes="routesData"></aside-el>
        <!-- <nav-menu :collapse="isCollapse"></nav-menu> -->
      </el-aside>
      <el-container>
        <el-header>
          <el-radio-group>
            <el-button @click="isCollapse = !isCollapse">展开/收起</el-button>
          </el-radio-group></el-header
        >
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideEl from '@/components/element/AsideEl'; // 引入基于element重新封装的菜单组件
import routes from '@/router/routes'; // 引入路由

export default {
  components: {
    AsideEl
  },
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: '/Home',
          name: 'Home',
          title: '主界面'
        },
        // 主界面
        {
          path: '/Main',
          name: 'Main',
          title: 'Main',
          redirect: { name: 'Home' },
          children: [
            // 首页
            { path: 'Home', name: 'Home', title: '首页' },
            { path: 'Home', name: 'A', title: '首页' },
            { path: 'Home', name: 'V', title: '首页' }
          ]
        }
      ]
    };
  },
  computed: {
    routesData() {
      let menu = [];
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].name == 'Main') {
          menu = routes[i].children;
          break;
        }
      }
      return menu;
    }
  }
};
</script>

<style lang="less" scoped>
</style>