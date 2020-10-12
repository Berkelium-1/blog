<template>
  <!-- 有子级 -->
  <el-submenu :index="`${index}`" v-if="children">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{ data.title }}</span>
    </template>
    <!-- 子级 -->
    <el-menu-item-group>
      <el-menu-item
        v-for="(item, i) in data.children"
        :key="item.name"
        :index="`${index + '-' + (i + 1)}`"
      >
        {{ item.title }}
      </el-menu-item>
    </el-menu-item-group>
  </el-submenu>

  <!-- 无子级 -->
  <el-menu-item index="1" v-else>
    <i class="el-icon-setting"></i>
    <span slot="title">{{ data.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    children: {
      type: Boolean,
      default: false
    },
    index: {
      type: [Number, String],
      default: 1
    }
  }
};
</script>