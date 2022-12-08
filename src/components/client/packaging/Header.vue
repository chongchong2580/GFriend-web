<!--封装导航栏-->
<template>
  <!--导航栏-->
  <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <img src="../../../assets/title_logo.png" class="logo">
          <el-menu-item class="title" @click="$router.push('/main')">信飞软件工程研发中心</el-menu-item>
          <el-menu-item index="6" class="tab" @click="$router.push('/login')">登录</el-menu-item>
          <el-menu-item index="5" class="tab">加入我们</el-menu-item>
          <el-menu-item index="4" class="tab" @click="iflytek(0)">科大讯飞</el-menu-item>
          <el-submenu index="3" class="tab">
            <template slot="title">关于我们</template>
<!--            <el-menu-item index="3-1" @click="$router.push('/gfriend')">-->
            <el-menu-item index="3-1" @click="drawer = true" type="primary">
              信飞简介
            </el-menu-item>
            <el-menu-item index="3-2" @click="$router.push('/gfriend')">
              成员介绍
            </el-menu-item>
            <el-menu-item index="3-3">
              成果展示
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2" class="tab">信飞动态</el-menu-item>
          <el-menu-item index="1" class="tab" @click="$router.push('/main')">首页</el-menu-item>
        </el-menu>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>

</template>

<script>


export default {
  name: "Header",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    iflytek(index) {
      // window.location.href = '../../../../index.html';
      window.open("http://www.iflytek.com/index.html","_blank")
    }
  }
}

</script>

<style scoped>
.title {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;

}
.logo {
  width: 50px;
  height: 50px;
  float: left;

  border: 1px solid #DCDFE6;
  border-radius: 5px;
}
.tab {
  float: right;
}

</style>

