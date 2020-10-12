<template>
  <div class="menu">
    <div class="menu-item" v-for="item in menu" :key="item.name">
      <!-- 无子级 -->
      <router-link
        tag="div"
        class="item"
        :to="{ name: item.name }"
        v-if="!item.children"
      >
        {{ item.title }}
      </router-link>
      <!-- 有子级 -->
      <div v-else>
        <div class="item">
          {{ item.title }}
        </div>
        <router-link
          tag="div"
          class="children-item"
          :to="{ name: v.name }"
          v-for="v in item.children"
          :key="v.name"
        >
          <i></i>
          <span>{{ v.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  collapse: {
    type: Boolean,
    default: false
  },
  data() {
    return {
      menu: [
        {
          path: '/Main',
          name: 'Main',
          title: '主界面'
        },
        {
          path: '/Main',
          name: 'Main',
          title: '菜单',
          children: [{ path: 'Home', name: 'Home', title: '首页' }]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.menu {
  // width: 100%;
  width: 230px;
  height: 100%;
  .menu-item {
    width: 100%;
    .item {
      height: 8vh;
      background-color: aliceblue;
    }
  }
}
</style>