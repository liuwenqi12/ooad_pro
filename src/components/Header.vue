<script setup>

</script>

<template>
<div style="font-size: 12px; line-height: 60px ;display: flex;">
  <div style="flex: 1;font-size: 18px">
    <span :class="collapseBtnClass" style="cursor: pointer "@click="collapse"></span>
  </div>
  <el-dropdown style="width: 100px">
    <span>Eddie</span><i class="el-icon-arrow-down" style="margin-left: 10px"></i>
    <el-dropdown-menu slot="dropdown" style="width: 100px;text-align: center">
      <el-dropdown-item>查看信息</el-dropdown-item>
      <el-dropdown-item>更改信息</el-dropdown-item>
      <el-dropdown-item>注销</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</div>
</template>
<script>
export default {
  props:{
    collapseBtnClass:String,
    collapse:Function,
  }
  // methods:{
  //   collapse() {//点击收缩按触发，收缩左边的菜单栏
  //     this.iscollapse = !this.iscollapse
  //     if (this.iscollapse){
  //       this.sidewidth=64
  //       this.collapseBtnClass = 'el-icon-s-unfold'
  //       this.logoTextShow =false
  //     }else{
  //       this.sidewidth = 200
  //       this.collapseBtnClass = 'el-icon-s-fold'
  //       this.logoTextShow =true
  //     }
  //   }
  // }
}

</script>
<style scoped>

</style>