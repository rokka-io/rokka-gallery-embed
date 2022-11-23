import { createApp } from 'vue';
import './style.css';
import langs from '@/lang/langs';
import Export from './Export.vue';

export default {
  mount: (selector: string, props: any) => {
    const app = createApp(Export, props);
    app.use(langs);
    app.mount(selector);
  },
};
