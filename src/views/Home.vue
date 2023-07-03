<script setup lang="ts">

import NavBar from "../components/NavBar.vue";
</script>

<template>
  <body>
    <div class="container flex-column">
      <div class="placeholder-v1350"></div>
      <div>
        <NavBar/>
        <div class="block text-center">
          <el-carousel height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
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

  .placeholder-v1350 {
    width: 1350px;
    height: 20px;
  }

  .container {
  }
</style>
