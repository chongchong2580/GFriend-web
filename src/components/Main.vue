<template>
  <!--导航栏-->
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <img src="../assets/title_logo.png" class="logo">
      <el-menu-item class="title" @click="$router.push('/main')">信飞软件工程研发中心</el-menu-item>
      <el-menu-item index="6" class="tab" @click="$router.push('/login')">登录</el-menu-item>
      <el-menu-item index="5" class="tab">加入我们</el-menu-item>
      <el-menu-item index="4" class="tab" @click="iflytek(0)">科大讯飞</el-menu-item>
      <el-submenu index="3" class="tab">
        <template slot="title">关于我们</template>
<!--        <el-menu-item index="3-1" @click="$router.push('/gfriend')">-->
        <el-menu-item index="3-1" @click="drawer = true" type="primary">
          信飞简介
        </el-menu-item>
        <el-menu-item index="3-2">
          成员介绍
        </el-menu-item>
        <el-menu-item index="3-3">
          成果展示
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2" class="tab">信飞动态</el-menu-item>
      <el-menu-item index="1" class="tab">首页</el-menu-item>
    </el-menu>


    <!--首页轮播图-->
    <div>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--信飞简介-->
    <el-drawer
      title="信飞简介"
      :visible.sync="drawer"
      :with-header="false">
      <h1 class="h1">信飞软件工程研发中心简介</h1>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信飞软件工程研发中心成立于2014年，是由软件与大数据学院与科大讯飞 联合创办的校企合作平台，
        直属于软件与大数据学院，拥有多名校内老师及企业工程师组成的师资团队，宗旨是培养技能型软件开发人才,
        包括 Web 全栈开发、 Java 开发、Android 移动开发、Python 开发、大数据和人工智能应用开发，并提供专业学习指导、竞赛培训、项目开发指导以及丰富的学习资源。
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工作室秉着引入讯飞的优质资源，专注人工智能，大数据等新技术的开发应用，培养高级软件人才，
        服务企业信息化的宗旨进行发展。工作室成立至今已取得多项成果，如拥有多项软件著作权，获得多项软件类竞技奖项，获得过多届全国大学生软件设计大赛国奖等。
</span>
    </el-drawer>

  </div>




</template>

<script>


export default {
  name: "Main",
  data () {
    return {
      drawer: false,
      activeIndex: '1',
      activeIndex2: '1',
      imgList: [
        {id:0,idView:require('../assets/menhu.jpg')},
        {id:1,idView:require('../assets/menhu.jpg')},
        {id:2,idView:require('../assets/menhu.jpg')},
        {id:3,idView:require('../assets/menhu.jpg')},
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    iflytek(index) {
      window.location.href = 'http://www.iflytek.com/index.html';
      window.open("http://www.iflytek.com/index.html","_blank")
    }
  }
}

</script>

<style scoped>
.h1 {
  padding-left: 20%;
  margin: 0 auto;
}
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .image{
    width: 100%;
    height: 100%;
  }
</style>
