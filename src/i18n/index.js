import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ko from './locales/ko.json'
import vi from './locales/vi.json'
import zh from './locales/zh.json'
import es from './locales/es.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ko,
    vi,
    zh,
    es,
    fr
  }
})

export default i18n
