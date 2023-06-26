import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n';

const app = createApp(App);

app.use(i18n); // 使用i18n实例

app.mount('#app');
