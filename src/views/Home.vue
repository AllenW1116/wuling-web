<script setup lang="ts">

</script>

<template>
  <el-menu mode="horizontal" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="cars">车辆</el-menu-item>
    <el-menu-item index="services">服务</el-menu-item>
    <el-menu-item index="contact">联系我们</el-menu-item>
  </el-menu>
</template>

<style scoped>
/* 导航栏样式 */
.el-menu {
  border: none;
  padding: 0 20px;
}

.el-menu-item {
  line-height: 60px;
  padding: 0 15px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.el-menu-item:hover {
  background-color: #555;
}

.el-menu-item.is-active {
  background-color: #555;
}

/* 全局样式 */
body {
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* 其他样式 */
/* 自定义样式根据需求进行添加 */
</style>
