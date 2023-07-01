import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n';
import router from './router/index.ts'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(i18n); // 使用i18n实例
app.use(router); // 使用vue-router实例
app.use(pinia); // 使用pinia实例

app.mount('#app');
