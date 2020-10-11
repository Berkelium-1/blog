<template>
  <div>
    <el-container>
      <el-aside width="500">
        <aside-el :collapse="isCollapse"></aside-el>
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
export default {
  components: {
    AsideEl
  },
  data() {
    return {
      isCollapse: true
    };
  }
};
</script>

<style lang="less" scoped>
</style>