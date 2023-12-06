<!-- gerenxinxi.vue -->

<template>
  <div>
    <h1>User Information for {{ username }}</h1>
    <!-- 显示从数据库中获取的用户信息 -->
<!--    <p>{{ userInfo }}</p>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.username,
      userInfo: null
    };
  },
  created() {

    // 发送请求到数据库，获取用户信息
    // this.fetchUserInfo(this.username);
  },
  methods: {
    fetchUserInfo(username) {
      // 假设这里使用了 axios 发送请求
      // 请确保你的项目中安装了 axios：npm install axios
      // 请替换下面的示例请求为你实际的数据请求方式
      axios.get(`/api/user/${username}`)
          .then(response => {
            // 处理获取的用户信息
            this.userInfo = response.data;
          })
          .catch(error => {
            console.error('Error fetching user information:', error);
          });
    }
  }
};
</script>
