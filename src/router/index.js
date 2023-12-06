 import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Manager.vue'
 import LoginComponent from '../components/LoginComponent.vue';
 import ForgotPasswordComponent from '../components/ForgotPasswordComponent.vue';
 import RegisterComponent from '../components/RegisterComponent.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' }, //默认重定向到登录页
  { path: '/login', component: LoginComponent },
  { path: '/forgot', component: ForgotPasswordComponent },
  { path: '/register', component: RegisterComponent },
  {
    path: '/kecheng',
    name: 'Manger',
    component: () => import('../views/Manager.vue'),
    children:[
      {path: '/user', name: 'User', component: () => import('../views/User.vue')},
      {path: '/kechengjieshao', name: 'kechengjieshao', component: () => import('../views/Kechengjieshao.vue')},
      {path: '/lab', name: 'lab', component: () => import('../views/lab.vue')},
      {path: '/lecture', name: 'lecture', component: () => import('../views/lecture.vue')},
      {path: '/nidechengji', name: 'nidechengji', component: () => import('../views/nidechengji.vue')},
      {path: '/project1', name: 'project1', component: () => import('../views/project1.vue')},
      {path: '/project2', name: 'project2', component: () => import('../views/project2.vue')},
      {path: '/tongzhi', name: 'tongzhi', component: () => import('../views/tongzhi.vue')},
      {path: '/xiaozuxinxi', name: 'xiaozuxinxi', component: () => import('../views/xiaozuxinxi.vue')},
      {path: '/zuoyetijiao', name: 'zuoyetijiao', component: () => import('../views/zuoyetijiao.vue')}
    ]
  },
  {
    path:'/home/:username',
    name:'mainpage',
    component:()=>import('../views/Mainpage.vue'),
    children: [
      {path: '/gerenxinxi/:username', name: 'gerenxinxi', component: () => import('../views/gerenxinxi.vue')},
      {path: '/pingtaitongzhi', name: 'pingtaitongzhi', component: () => import('../views/pingtaitongzhi.vue')},
      {path: '/kechengliebiao', name: 'kechengliebiao', component: () => import('../views/kechengliebiao.vue')},
      {path: '/xuankejiemian', name: 'xuankejiemian', component: () => import('../views/xuankejiemian.vue')},
      {path: '/liaotianshi', name: 'liaotianshi', component: () => import('../views/liaotianshi.vue')},
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
