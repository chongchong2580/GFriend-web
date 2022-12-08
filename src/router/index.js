import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/client/views/Login';
import Gfriend from '@/components/client/views/Gfriend';
import Main from '@/components/Main';
import Header from '@/components/client/packaging/Header';
import VueRouter from "vue-router";
import ElementUI from "element-ui";


Vue.use(Router);
Vue.use(VueRouter);
Vue.use(ElementUI);

export default new Router({
  routes: [{
    //首页
    path: '/main',
    name: 'Main',
    component: Main,
    meta: {
      keepAlive: false
    }
  },{
    //登录页
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      keepAlive: false
    }
  },{
    //信飞简介
    path: '/gfriend',
    name: 'Gfriend',
    component: Gfriend,
    meta:{
      keepAlive: true
    }
  }
  ]
})
