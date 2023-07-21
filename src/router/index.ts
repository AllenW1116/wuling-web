// src/router/useLayoutStore.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import ProductDetails from '../views/ProductDetails.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/ProductDetails/:category/:type', component: ProductDetails }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
