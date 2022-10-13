import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import langs from '@/lang/langs';

// TODO: Remove
import './assets/main.css';

const app = createApp(App);
app.use(langs);
app.mount('#app');
