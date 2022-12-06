import { createApp } from 'vue';
import Demo from './Demo.vue';
import i18n from '@/lang/i18n';
import './assets/base.css';

const app = createApp(Demo);
app.use(i18n('en'));
app.mount('#app');
