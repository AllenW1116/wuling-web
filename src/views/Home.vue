<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
// import { ref } from 'vue';

const getImageUrl = (item) => {
  // 根据不同的item返回对应的图片路径或URL
  switch (item) {
    case 1:
      return '/images/product/electricGolfCar/T200.jpg';
    case 2:
      return '/images/product/electricGolfCar/T300 Lifted.png';
    case 3:
      return '/images/product/electricGolfCar/WLDT2.png';
    case 4:
      return '/images/product/electricGolfCar/WLDT24.png';
    default:
      return ''; // 如果没有对应的图片，可以返回空字符串或默认图片路径
  }
};

</script>

<template>
  <body>
    <div class="container flex-column">
      <!-- 轮播图区域 -->
      <div class="placeholder-v1350"></div>
      <div>
        <!-- 最上方的一条选项，如product range -->
        <NavBar/>

        <div class="block text-center">
          <el-carousel height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="carousel-item-content">
                <img :src="getImageUrl(item)" alt="Slide Image"/>
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home <br>
        Home
        Home
      </div>

    </div>

  </body>
  <Footer/>
</template>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  /* 主页轮播图 */
  .placeholder-v1350 {
    width: 1350px;
    height: 20px;
  }

  .container {
  }
</style>
