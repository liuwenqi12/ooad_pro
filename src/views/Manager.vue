<template>
  <!--  <div class="home" style="height: 100%">-->
  <el-container style="height: 100vh">
    <el-aside width="sidewidth + 'px'" style="background-color: rgb(238, 241, 246);height: 100% ;">
    <Aside :iscollapse="iscollapse" :logoTextShow = "logoTextShow"/>
    </el-aside>

    <el-container>

      <!--        style="text-align: right; font-size: 12px;border-bottom:1px solid #ccc;line-height: 60px;display: flex"-->

      <el-header style="border-bottom: 1px solid #ccc;">
      <Header :collapseBtnClass = "collapseBtnClass" :collapse = "collapse"/>

      </el-header>

      <el-main>
<!--        表示当前页面的子路由会在router—view中展示-->
      <router-view />

      </el-main>

    </el-container>
  </el-container>
  <!--  </div>-->
</template>

<script>
// @ is an alias to /src

import {Collapse} from "element-ui";
import request from "@/utils/request";
//这行代码很奇怪，自己莫名奇妙出现的，但是不引入这个包整个vue就崩掉了，引入时又说找不到
import {saveScrollPosition} from "vue";
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
export default {
  name: 'HomeView',
  // computed: {
  //   Collapse() {
  //     return Collapse
  //   }
  // },
  data(){

    return{
      iscollapse:false,
      sidewidth:200,
      logoTextShow:true,
      collapseBtnClass:'el-icon-s-fold'
    }
  },
  // created() {
  //   //请求分页查询数据
  //   this.load()
  // },
  components:{
    Aside,
    Header
  },
  methods:{
    saveScrollPosition,
    collapse() {//点击收缩按触发，收缩左边的菜单栏
      this.iscollapse = !this.iscollapse
      if (this.iscollapse){
        this.sidewidth=64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow =false
      }else{
        this.sidewidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.logoTextShow =true
      }
    }

  }
}
</script>

