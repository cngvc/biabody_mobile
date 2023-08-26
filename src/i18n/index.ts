import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// https://translate.i18next.com: use this tool
// https://textedit.tools/snakecase

import de from './locales/de/translation.json';
import gb from './locales/gb/translation.json';
import {store} from '@store';

// { key: "gb", name: "English" }
// { key: "de", name: "Germany" }

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    de: {
      translation: de,
    },
    gb: {
      translation: gb,
    },
  },
  lng: store.getState().common.language || 'gb',
  fallbackLng: 'gb',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
