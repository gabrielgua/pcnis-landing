import { useLanguageStore } from '@/stores/language.store'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    hero: 'Welcome to our site! yippee',
    support: 'Contact our support at support.help@pcnis.com',
  },
  fr: {
    hero: 'Bienvenue sur notre site! yippee',
    support: "Contactez notre service d'assistance à l'adresse suivante : support.help@pcnis.com",
  },
  br: {
    hero: 'Bem-vindo ao nosso site! yippee',
    support: 'Contate o nosso suporte pelo e-mail support.help@pcnis.com',
  },
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
