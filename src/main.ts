import { createApp } from 'vue';
import App from './App.vue';
import langs from '@/lang/langs';
import './assets/base.css';

const app = createApp(App);
app.use(langs);
app.mount('#app');
