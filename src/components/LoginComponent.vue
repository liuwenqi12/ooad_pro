<!-- LoginComponent.vue -->
<template>
  <div class="page-container">
    <div class="login-container">
      <div v-if="loginMethod === 'account'" class="login-section">
        <h2 class="section-title">账号密码登录</h2>
        <form @submit.prevent="loginWithAccount" class="form-container">
          <input type="text" v-model="account.username" placeholder="用户名" required>
          <input type="password" v-model="account.password" placeholder="密码" required>
          <div class="button-container">
            <button type="submit" :disabled="isLoginButtonDisabled">登录</button>
            <button @click="switchLoginMethod" class="switch-button">切换登录方式</button>
          </div>
        </form>
      </div>

      <div v-else-if="loginMethod === 'phone'" class="login-section">
        <h2 class="section-title">手机号验证码登录</h2>
        <form @submit.prevent="loginWithPhone" class="form-container">
          <input type="tel" v-model="phone.phone" placeholder="手机号" required>
          <input type="text" v-model="phone.verificationCode" placeholder="验证码" required>
          <div>
            <button @click.prevent="sendVerificationCode" :disabled="isSendButtonDisabled">
              {{ phone.codeSending ? '发送中...' : '发送验证码' }}
            </button>
          </div>
          <div class="button-container">
            <button type="submit" :disabled="isLoginButtonDisabled">登录</button>
            <button @click="switchLoginMethod" class="switch-button">切换登录方式</button>
          </div>
        </form>
      </div>

      <div class="additional-links">
        <p><router-link to="/register">注册</router-link> | <router-link to="/forgot">忘记密码</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginMethod: 'account',
      account: {
        username: '',
        password: ''
      },
      phone: {
        phone: '',
        verificationCode: '',
        codeSending: false
      }
    };
  },
  computed: {
    isLoginButtonDisabled() {
      return (
          (this.loginMethod === 'account' && (!this.account.username || !this.account.password)) ||
          (this.loginMethod === 'phone' && (!this.phone.phone || !this.phone.verificationCode || this.phone.codeSending))
      );
    },
    isSendButtonDisabled(){
      return (
          (this.loginMethod === 'phone' && (!this.phone.phone || this.phone.codeSending))
      );
    }
  },
  methods: {
    loginWithAccount() {
      // 处理账号密码登录逻辑，需要向后端验证账户密码是否正确

      console.log('Account Login:', this.account);
      // 跳转到Home页面
      this.$router.push({name: 'mainpage', params: {username: this.account.username}});
    },
    loginWithPhone() {
      // 处理手机号验证码登录逻辑，验证手机号和验证码是否正确，成功则跳转到首页
      console.log('Phone Login:', this.phone);
      // 跳转到Home页面
      this.$router.push('/home');
    },
    sendVerificationCode() {
      // 调用后端接口发送验证码
      this.phone.codeSending = true;
      setTimeout(() => {
        this.phone.codeSending = false;
        // 实际应该在这里调用发送验证码的接口
        console.log('Verification code sent');
      }, 2000);
    },
    switchLoginMethod() {
      this.loginMethod = (this.loginMethod === 'account') ? 'phone' : 'account';
    }
  }
};
</script>
  <!-- LoginComponent.vue -->
<style scoped>

.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 让容器铺满整个视口高度 */
  background: url('@/assets/backgrand.jpg') center center no-repeat; /* 替换为你的图片路径 */
  background-size: cover; /* 使图片充满整个背景 */
}

.login-container {
  width: 80%; /* 适当调整宽度 */
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #e1f0ff;
}

.login-section {
  margin-bottom: 20px;
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

.switch-button {
  background-color: #2196f3;
  margin-left: 10px;
}

.switch-button:hover {
  background-color: #1565c0;
}

.additional-links {
  text-align: center;
  font-size: 14px;
  color: #333;
  margin-top: 20px;
}

</style>

