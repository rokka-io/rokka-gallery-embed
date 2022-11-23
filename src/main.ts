import { createApp } from 'vue';
import App from './App.vue';
import './base.scss';
import langs from '@/lang/langs';

// TODO: Remove
import './assets/base.css';

const app = createApp(App);
app.use(langs);
app.mount('#app');
