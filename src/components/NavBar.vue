<template>
  <!-- 顶部bar的具体设置 - Done -->
  <div id="overlay"></div>
  <div class="place-holder-100" />
  <div class="menu-container">
    <el-menu mode="horizontal" background-color="transparent" text-color="#333" active-text-color="#333" :ellipsis="false">
      <div class="submenu-container">
        <div class="logo-container">
          <a href="/">
            <img src="/images/wuling_logo.jpg" class="logo nav-logo" alt="wuling logo" />
          </a>
        </div>
        <div class="flex-grow"></div>
        <div class="nav-container">

          <el-menu-item class="hover-overlay hover-red" index="product-range">{{ $t('menu.productRange') }}</el-menu-item>

          <el-menu-item index="buying" class="hover-red">{{ $t('menu.buying') }}</el-menu-item>
          <el-menu-item index="ownership" class="hover-red">{{ $t('menu.ownership') }}</el-menu-item>
          <el-menu-item index="discover" class="hover-red">{{ $t('menu.discover') }}</el-menu-item>
          <el-menu-item index="about" class="hover-red">{{ $t('menu.about') }}</el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>

  <!-- Product Range 具体设置 -->
  <div id="product-menu" class="products-container hover-overlay">
    <el-menu mode="horizontal" background-color="transparent" text-color="#333" active-text-color="#333" :ellipsis="false" >
      <div class="submenu-container" >
        <el-menu-item class="flex-column product-type-container hover-red" v-for="(value, key) in menuData" :key="key" :id="key" >
          <!-- 以第一个型号的图片作为默认展示 -->
          <img :src="Object.values(value.types)[0].img" class="product-type-img" alt="wuling logo"/>
          <span>{{ $t(value['i18n name'] as unknown as string) }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>

  <!-- Product Range - Electric Golf Car 的具体设置 -->
  <!-- 遍历产品类别 -->
  <div v-for="(category, key) in menuData" :id="'category-'+key" class="category-container hover-overlay">
    <el-menu mode="vertical" background-color="transparent" text-color="#333" active-text-color="#333" :ellipsis="false" >
      <div class="flex-row">
        <!-- 遍历该类别下的全部产品型号 -->
        <div class="flex-column category-items" >
          <el-menu-item class="hover-background-red" v-for="(type, typeKey) in category['types']" :key="typeKey" @mouseover="selectedType = type" @mouseleave="selectedType = null" @click="goToPage(key, typeKey)">
            <!-- <img :src="type.img" class="product-type-img" alt="wuling logo" @click="goToPage(key, typeKey)"/>
            <span @click="goToPage(key, typeKey)"> {{ type.name }} </span> -->
            <img :src="type.img" class="product-type-img" alt="wuling logo" />
            <span> {{ type.name }} </span>
          </el-menu-item>
        </div>
        <!-- 遍历每个产品型号的细节 大图、价格、大小、功率-->
        <div class="flex-row category-detail" v-if="selectedType" >
          <img :src="selectedType.img" class="product-category-img" alt="wuling logo"/>
            <div class="flex-column">
              <div>
                <span class="product-name">{{ selectedType.name }}</span>
              </div>
              <div class="product-detail-data">
                <div>
                  <span class="red-background">The official guide price</span>  <span> {{ selectedType.price }}</span>
                </div>
                <div>
                  <span class="red-background">Dimension Length/width/height</span>  <span> {{ selectedType.dimension }}</span>
                </div>
                <div>
                  <span class="red-background">Power</span>  <span> {{ selectedType.power }}</span>
                </div>
              </div> 
            </div> 
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// 鼠标悬停
import { ref } from 'vue';
const selectedType = ref(null);

// 鼠标点击跳转页面
import { useRouter } from 'vue-router';
const router = useRouter();
const goToPage = (category, type) => {
  // router.push({ name: 'ProductDetails', params: { id: id } })
  // router.push({ path: '/ProductDetails/' + name })
  router.push({ path: '/ProductDetails/' + category + '/' + type });
};


// 导入 JSON 数据
import jsonData from '../config/product.json';

// 定义 JSON 数据的类型
/*
interface MenuData {
  [category: string]: {
    [product: string]: {
      img: string;
    };
  };
}
*/

interface MenuData {
  [category: string]: {
    name: string;
    "i18n name": string;
    id?: number;
    types: {
      [typeName: string]: {
        name: string;
        img: string;
        price?: string;
        dimension?: string;
        power?: string;
      }
    };
  };
}


// 读取并打印 JSON 数据
const menuData: MenuData = jsonData;
console.log(menuData);
// 声明 i18nNameList 数组
const i18nNameList: string[] = [];

// 遍历 menuData 属性
for (const category in menuData) {
  const products = menuData[category];
  const i18nName = products['i18n name'] as unknown as string;
  console.log(i18nName);
  i18nNameList.push(i18nName);
}

console.log(i18nNameList)


document.addEventListener('DOMContentLoaded', function() {
  const overlay: HTMLElement | null = document.getElementById('overlay');
  const productMenu: HTMLElement | null = document.getElementById('product-menu');
  const hoverDarkElements: NodeListOf<HTMLElement> = document.querySelectorAll('.hover-overlay');
  const productTypes: NodeListOf<HTMLElement> = document.querySelectorAll('.product-type-container');
  let currentProduct: HTMLElement | null = document.getElementById('category-T200');

  let hideTimer: ReturnType<typeof setTimeout> | null = null;

  function handleMouseEnter() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    if (overlay && productMenu) {
      overlay.style.display = 'block'; // 显示遮罩
      productMenu.style.display = 'block';
    }
  }

  function handleMouseLeave() {
    hideTimer = setTimeout(() => {
      if (overlay && productMenu) {
        overlay.style.display = 'none'; // 隐藏遮罩
        productMenu.style.display = 'none';
        if (currentProduct) {
          currentProduct.style.display = 'none';
          currentProduct = null;
        }
      }
    }, 200); // 根据实际需求调整延迟时间
  }

  hoverDarkElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      handleMouseEnter()
    });

    element.addEventListener('mouseleave', () => {
      handleMouseLeave()
    });
  });

  productTypes.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      let categoryElement: HTMLElement | null = document.getElementById('category-'+element.id);
      if (categoryElement) {
        if (categoryElement == currentProduct) return;
        categoryElement.style.display = 'block';
        if (currentProduct) {
          currentProduct.style.display = 'none';
        }
        currentProduct = categoryElement;
      }
    });
  });
});
</script>

<style scoped>
/* 导航栏样式 */
.el-menu {
  border: none;
  padding: 0 20px;
  position: relative; /* 创建新的层叠上下文 */
  background-color: white;
  font-weight: bold;
}

.el-menu:hover {
  background-color: #FFF;
}

.el-menu-item {
  line-height: 100px;
  padding: 0 15px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.el-menu-item:hover {
}

.el-menu-item.is-active {
}

/* 全局样式 */
body {
  font-family: Arial, sans-serif;
}

.submenu-container {
  width: 1350px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.nav-logo {
  width: 65px;
  height: 55px;
}

.product-type-img {
  width: 50px;
  height: 50px;
}

.product-category-img {
  width: 100%;
  /* width: 350px; */
  height: 350px;
}

.flex-grow {
  flex-grow: 1;
}

.nav-container {
  display: flex;
  flex-direction: row;
}




/* 自定义样式根据需求进行添加 */
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明灰色背景 */
  pointer-events: none; /* 允许鼠标事件穿透到下方的元素 */
  z-index: 5000; /* 确保遮罩层位于其他元素之上 */
  display: none;
}

#product-menu {
  display: none;
  height: 100px;
  background-color: white;
}

#product-menu:hover {
  display: block;
}

.hover-overlay {

}

.menu-container {
  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100px;
  background-color: white;
  z-index: 10000; /* 设置较高的 z-index 值 */
}

.products-container {
  position: fixed;
  z-index: 10000;
  top: 100px;
  left: 0;
  width: 100%;
  border-top: 1px solid #D3D3D3;
}

.category-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  top: 200px;
  width: 1350px;
  border-top: 1px solid #D3D3D3;
  display: none;
}

.hover-overlay:hover #product-menu{
  display: block;
}

.hover-red:hover {
  background-color: white !important;
  color: red !important;
}

.hover-background-red:hover {
  background-color: #B01515 !important;
  color: white !important;
}

.product-type-container {
  align-items: center;
  line-height: 20px;
  background-color: transparent !important;
}

.place-holder-100 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100px;
}

.product-detail-data {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 主轴为垂直方向，所以使得元素在垂直方向上居中 */
  text-align: left;
  width: 1000px;
  height: 100%; /* 确保元素占据全部高度，可以根据你的需求调整 */
}

.category-items {
  width: 350px;
}

.category-detail{
  width: 550px;
}

.product-name {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 主轴为垂直方向，所以使得元素在垂直方向上居中 */
  text-align: center; /* 文本居中对齐 */
  width: 300px;
  height: 600%; /* 确保元素占据全部高度，可以根据你的需求调整 */
}

.red-background {
  background-color: red;
  color: white;
  margin-right: 15px;
}
</style>
