<template>
  <!--  <div class="home" style="height: 100%">-->
  <el-container style="height: 100vh">
    <el-aside width="sidewidth + 'px'" style="background-color: rgb(238, 241, 246);height: 100% ;">
      <MainAside :iscollapse="iscollapse" :logoTextShow = "logoTextShow" :username="this.username"/><!--将当前组件属性传给子组件，子组件通过props来接收-->
    </el-aside>
    <el-container>
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
import {saveScrollPosition} from "vue";
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
import MainAside from "@/components/main-aside.vue";
import gerenxinxi from "@/views/gerenxinxi.vue";
export default {
  name: 'HomeView',
  data(){
    return{
      username:this.$route.params.username,
      iscollapse:false,
      sidewidth:200,
      logoTextShow:true,
      collapseBtnClass:'el-icon-s-fold'
    }
  },
  created() {

    // this.username = this.$route.params.username
  },
  components:{
    MainAside,
    Header,
    gerenxinxi
  },
  methods:{
    saveScrollPosition,// 帮助你录当前页面的滚动位置，以便在页面转换后返回该页面时能够还原到之前的滚动位置
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

