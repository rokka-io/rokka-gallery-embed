import { createI18n } from 'vue-i18n';
import en from '@/lang/en.json';
import de from '@/lang/de.json';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    de: de,
  },
});
