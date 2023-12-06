<script setup>

</script>
<template>
  <el-menu :default-openeds="['1', '3']"style="min-height: 100%;overflow-x: hidden"
           background-color="#317184"
           text-color="#fff"
           active-text-color="pink"
           :collapse-transition="false"
           :collapse="iscollapse"
           router>
    <div style="height: 60px;line-height: 60px;text-align: center">
      <img src="../assets/sustech.png" alt=""style="width:35px;
                      position: relative ;top: 13px;margin-right: 5px">
      <b style="color: white" v-show="logoTextShow"> 主页面</b>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span slot="title">个人信息 </span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="goToGerenxinxi">个人信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index=“2”>
      <template slot="title">
        <i class="el-icon-folder-opened"></i>
        <span slot="title">平台通知</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/pingtaitongzhi>平台通知</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-edit"></i>
        <span slot="title">课程</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/kechengliebiao>课程列表</el-menu-item>
        <el-menu-item index=/xuankejiemian>选课界面</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index=“4”>
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span slot="title">聊天室</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/liaotianshi>聊天室</el-menu-item>
      </el-menu-item-group>
    </el-submenu>


  </el-menu>
</template>


<script>
export default {
  props:{
    iscollapse:Boolean,
    logoTextShow:Boolean,
    username:String
  },
  created() {
    // this.username = this.$route.params.username
    console.log("ok")
    console.log(this.username)
  },
  methods:{
    goToGerenxinxi(){
      this.$router.push({name:'gerenxinxi',params:{username:this.username}})
    }
  }
}
</script>
<style scoped>

</style>