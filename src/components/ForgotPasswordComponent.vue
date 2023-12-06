<!-- ForgotPasswordComponent.vue -->
<template>
  <div class="page-container">
  <div class="forget-container">
    <h2 class="section-title">忘记密码</h2>
    <form @submit.prevent="resetPassword" class="form-container">
      <input type="text"  v-model="newPassword.username" placeholder="用户名" required>
      <input type="password"  v-model="newPassword.password" placeholder="新用户名" required>
      <div class="button-container">
        <button type="submit" :disabled="isResetButtonDisabled">重置密码</button>
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
      newPassword: {
        username: '',
        password: ''
      }
    };
  },
  computed: {
    isResetButtonDisabled() {
      return (
          ((!this.newPassword.username || !this.newPassword.password))
      );
    }
  },
  methods: {
    resetPassword() {
      // 处理重置密码逻辑，像后端发送重新设置的账户密码
      console.log('Password Reset:', this.newPassword);
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
.forget-container{
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
