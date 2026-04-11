import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'
import ar from '../public/locales/ar/common.json'

const resources = {
  en: {
    common: en,
  },
  fr: {
    common: fr,
  },
  ar: {
    common: ar,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n