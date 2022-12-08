<template>
  <div id="app">
    <el-container v-if="$route.meta.keepAlive">
      <header-nav></header-nav>
      <el-header>
        <keep-alive>

        </keep-alive>
      </el-header>

      <el-container>
        <router-view> </router-view>
      </el-container>

    </el-container>


    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
//导入封装的导航栏
import Header from "@/components/client/packaging/Header";

export default {
  name: 'App' ,
  components: {
    headerNav: Header,
  }
}
</script>

<style>

</style>
