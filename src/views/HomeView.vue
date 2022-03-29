<template>
  <div class="home">
    <el-container>
      <el-aside width="250px">
        <div class="home-header">
          ElementUi管理后台
        </div>
        <el-menu default-active="2"
                 background-color="rgb(34,45,50)"
                 text-color="#fff"
                 active-text-color="blue"
                 :router="true"
                 class="aside">
          <el-menu-item class="item"
                        index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 结束 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章列表</el-menu-item>
              <el-menu-item index="2-2">多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 结束 -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="right-div">
            <el-breadcrumb>
              <div class="top">

              </div>
            </el-breadcrumb>
            <el-breadcrumb separator="/">

            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>
          <div class="bottom">
            <el-breadcrumb-item v-for="(item,index) in this.$route.meta"
                                :key="index">{{item}}</el-breadcrumb-item>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  },
  methods: {
    fn_quit () {
      localStorage.clear()
      this.$router.push({ name: "login" })
    }
  }
}
</script>
<style scoped>
.home-header {
  background: rgb(0, 121, 217);
  height: 60px;
  color: #fff;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
}
.aside {
  height: 100vh;
}
.header {
  background: rgb(0, 134, 241);
}
.bottom {
  /* margin-top: 10px; */
  height: 20px;
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
