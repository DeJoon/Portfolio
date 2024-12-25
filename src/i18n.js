import { createI18n } from 'vue-i18n';
import de from './translations/de.json';
import en from './translations/en.json';

const dateTimeFormats = {
  'de': {
    long: {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }
  },
  'en': {
    long: {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }
  },
}

const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: 'de',
  fallbackLocale: 'de',
  messages: {
    de: de,
    en: en,
  },
  globalInjection: true,
  datetimeFormats: dateTimeFormats,
});

export default i18n;