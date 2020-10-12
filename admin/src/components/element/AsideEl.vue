<template>
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="collapse"
    >
      <nav-item
        v-for="(item, i) in routes"
        :key="item.name"
        :data="item"
        :index="i + 1"
        :children="item.children && item.children != 0"
      ></nav-item>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import NavItem from '@/components/element//NavItem';
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    routes: {
      type: [Object, Array],
      default: []
    }
  },
  components: {
    NavItem
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>