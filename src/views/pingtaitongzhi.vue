<!-- pingtaitongzhi.vue -->

<template>
  <div>
    <h1>Platform Notifications</h1>
    <!-- 显示从数据库中获取的通知列表 -->
    <ul>
      <li v-for="notification in notifications" :key="notification.id">
        {{ notification.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: []
    };
  },
  created() {
    // 发送请求到数据库，获取平台通知列表
    // 请替换下面的示例请求为你实际的数据请求方式
    this.fetchNotifications();
  },
  methods: {
    fetchNotifications() {
      // 假设这里使用了 axios 发送请求
      // 请确保你的项目中安装了 axios：npm install axios
      // 请替换下面的示例请求为你实际的数据请求方式
      axios.get('/api/notifications')
          .then(response => {
            // 处理获取的通知列表
            this.notifications = response.data;
          })
          .catch(error => {
            console.error('Error fetching notifications:', error);
          });
    }
  }
};
</script>
