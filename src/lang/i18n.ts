import { createI18n } from 'vue-i18n';
import en from '@/lang/en.json';
import de from '@/lang/de.json';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  inheritLocale: false,
  messages: {
    en: en,
    de: de,
  },
});
