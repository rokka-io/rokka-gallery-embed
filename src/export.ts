import { createApp } from 'vue';
import i18n from '@/lang/i18n';
import Export from './Export.vue';

export default {
  mount: (selector: string, props: any) => {
    const app = createApp(Export, props);
    app.use(i18n(props.lang));
    app.mount(selector);
  },
};
