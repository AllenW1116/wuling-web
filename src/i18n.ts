import { createI18n } from 'vue-i18n';
import zh_CN from './locales/zh_CN.json';
import en_US from './locales/en_US.json';


const messages = {
  'zh-CN': zh_CN,
  'en-US': en_US,
}

const i18n = createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
});

export default i18n;
