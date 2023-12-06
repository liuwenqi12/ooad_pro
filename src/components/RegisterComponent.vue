<!-- RegisterComponent.vue -->
<template>
  <div class="page-container">
  <div class="register-container">
    <h2 class="section-title">注册</h2>
    <form @submit.prevent="registerUser" class="form-container">
      <input type="text" v-model="newUser.username" placeholder="新用户名" required>
      <input type="password" v-model="newUser.password" placeholder="新密码" required>
      <div class="button-container">
        <button type="submit" :disabled="isRegisterButtonDisabled">注册</button>
        <button class="return" @click="$router.push('/login')">返回登录</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        username: '',
        password: ''
      }
    };
  },
  computed: {
    isRegisterButtonDisabled() {
      return (
          ((!this.newUser.username || !this.newUser.password))
      );
    }
  },
  methods: {
    registerUser() {
      // 处理注册逻辑，向后端发送注册的用户名和密码，创建用户
      console.log('User Registered:', this.newUser);
      // 跳转到登录页面
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 让容器铺满整个视口高度 */
  background: url('@/assets/backgrand.jpg') center center no-repeat; /* 替换为你的图片路径 */
  background-size: cover; /* 使图片充满整个背景 */
}
.register-container {
  width: 80%; /* 适当调整宽度 */
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #cfe5ff;
}


.section-title {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

button {
  flex: 1;
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px; /* 调整按钮之间的垂直间距 */
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
.return{
  background-color: #2196f3;
  margin-left: 10px;
}
.return:hover {
  background-color: #1565c0;
}

</style>