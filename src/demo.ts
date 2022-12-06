import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import Demo from './Demo.vue';
import langs from '@/lang/langs';
import './assets/base.css';

const app = createApp(Demo);
app.use(
  createI18n({
    ...langs,
    locale: 'en',
    legacy: false,
    inheritLocale: false,
  })
);
app.mount('#app');
