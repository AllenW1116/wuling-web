<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import productData  from '../config/product.json';

    const route = useRoute()
    const category = route.params.category
    const type = route.params.type
    const product = ref(null)

    onMounted(() => {
        if (category && type) {
            const categoryData = productData[category]
            if (categoryData) {
                product.value = categoryData.types[type]
            }
        }
    })
</script>

<template>
    <div>
        <h1>Product Details</h1>
        <div v-if="product">
            <p>Product Name: {{ product.name }}</p>
            <img :src="product.img" alt="Product Image">
            <p>Product Price: {{ product.price }}</p>
            <p>Product Dimension: {{ product.dimension }}</p>
            <p>Product Power: {{ product.power }}</p>
            <!-- 更多产品信息 -->
        </div>
    </div>
</template>

<style scoped>

</style>