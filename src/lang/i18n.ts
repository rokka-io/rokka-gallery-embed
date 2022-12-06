import en from '@/lang/en.json';
import de from '@/lang/de.json';
import { createI18n } from 'vue-i18n';

// Export function not object, so that every
// instance of app has its own instance of i18n
export default (lang: string) => createI18n({
  locale: lang,
  fallbackLocale: 'en',
  legacy: false,
  inheritLocale: false,
  messages: {
    en: en,
    de: de,
  },
});
