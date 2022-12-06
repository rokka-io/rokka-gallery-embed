import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import langs from '@/lang/langs';
import Export from './Export.vue';

export default {
  mount: (selector: string, props: any) => {
    const app = createApp(Export, props);
    app.use(
      // Create in entrypoint to have a different
      // copy in each instance of the embed
      createI18n({
        ...langs,
        locale: 'en',
        legacy: false,
        inheritLocale: false,
      })
    );
    app.mount(selector);
  },
};
