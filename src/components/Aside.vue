<script setup>

</script>
<template>
  <el-menu :default-openeds="['1', '3']"style="min-height: 100%;overflow-x: hidden"
           background-color="#317184"
           text-color="#fff"
           active-text-color="pink"
           :collapse-transition="false"
           :collapse="iscollapse"

           router
  >
    <div style="height: 60px;line-height: 60px;text-align: center">
      <img src="../assets/sustech.png" alt=""style="width:35px;
                      position: relative ;top: 13px;margin-right: 5px">
      <b style="color: white" v-show="logoTextShow"> 课程管理系统</b>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span slot="title">课程信息 </span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/kechengjieshao >课程介绍</el-menu-item>
        <el-menu-item index=/tongzhi>通知</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-folder-opened"></i>
        <span slot="title">课程资料</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/lab>Lab</el-menu-item>
        <el-menu-item index=/lecture>Lecture</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-edit"></i>
        <span slot="title">作业</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/zuoyetijiao>作业提交</el-menu-item>
        <el-menu-item index=/nidechengji>你的成绩</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span slot="title">Project</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index=/project1>project1</el-menu-item>
        <el-menu-item index=/project2>project2</el-menu-item>
        <el-menu-item index="/user">project3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span slot="title">Group</span>
      </template>
      <el-menu-item index=/xiaozuxinxi>小组信息</el-menu-item>
    </el-submenu>



  </el-menu>
</template>


<script>
export default {
  props:{
    iscollapse:Boolean,
    logoTextShow:Boolean
  }
}
</script>
<style scoped>

</style>