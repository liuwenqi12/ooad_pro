<script setup>

</script>

<template>
  <div>
    <div style="margin-bottom: 30px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">用户查询</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="padding: 10px 0">
      <el-input style="width: 200px" placeholder="请输入姓名" suffix-icon="el-icon-user" v-model="username"></el-input>
      <el-input style="width: 200px" placeholder="请输入学号" suffix-icon="el-icon-search" v-model="number"></el-input>
      <el-input style="width: 200px" placeholder="请输入技术栈" suffix-icon="el-icon-cpu" v-model = "skill"></el-input>
      <el-button class="ml-5" type="primary" @click="load">搜索</el-button>
      <el-button type="warning" @click="reset">重置</el-button>
    </div>

    <div style="margin: 10px 0">
      <el-button type="primary" @click="handleAdd">新增<i class="el-icon-circle-plus-outline"></i></el-button>
      <el-button type="danger">批量删除<i class="el-icon-remove-outline"></i></el-button>
      <el-button type="primary">导入<i class="el-icon-bottom"></i></el-button>
      <el-button type="primary">导出<i class="el-icon-top"></i></el-button>
    </div>

    <el-table :data="tableData" border stripe >
      <el-table-column prop="number" label="学号" width="140">
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="skill" label="技术栈">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="handeleEdit(scope.row)">编辑<i class="el-icon-edit"></i></el-button>
          <el-button type="danger" @click="handeledel(scope.row.id)">删除<i class="el-icon-delete"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[2, 5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="30%" >
      <el-form label-width="80px"size="small">
        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="技术栈">
          <el-input v-model="form.skill" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import request from "@/utils/request";

export default {
  data(){
    return{
      tableData: [],
      total:0,
      pageNum:1,
      username:"",
      pageSize:2,
      skill:"",
      number:"",
      dialogFormVisible:false,
      form:{}
    }
  },
  created() {
    this.load()
  },
  methods:{
    reset(){
      this.username="", this.skill="",this.number=""
      this.load()
    },
    load(){//向后端请求数据
      //方式二：集成了mybatis-plus后，可以使用axios，在src文件目录下有一个request.js的文件
      request.get("http://localhost:9090/user/page",{
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          username:this.username,
          skill:this.skill,
          number:this.number
        }
      }).then(res =>{
        console.log(res)
        this.tableData = res.records
        this.total = res.total
      })
      //方法一：使用fetch+mybatis
      // fetch("http://localhost:9090/user/page?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"&username="+this.username).then(res => res.json()).then(res =>{
      //   console.log(res)
      //   this.tableData = res.data
      //   this.total  =res.total
      // })
    },
    handleSizeChange(pagesize){
      this.pageSize = pagesize
      this.load()
    },
    handleCurrentChange(pageNum){
      this.pageNum = pageNum
      this.load()
    },
    handleAdd() {
      this.dialogFormVisible = true
      this.form = {}
    },
    save(){
      request.post("http://localhost:9090/user",this.form).then(res =>{
        if(res){
          this.$message.success("保存成功")
          this.dialogFormVisible = false
          this.load()
        }else{
          this.$message.error("保存失败")
        }
      })
    },
    handeleEdit(row){
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogFormVisible =true
    },
    handeledel(id){
      request.delete("/user/"+id).then(res =>{
        if(res){
          this.$message.success("删除成功")
          // this.dialogFormVisible = false
          // this.load()
        }else{
          this.$message.error("删除失败")
        }
      })
    }
  }
}
</script>
<style scoped>
</style>