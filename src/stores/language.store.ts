import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
  const language = ref<string>(localStorage.getItem('lang') || 'en')

  const changeLanguage = (lang: string) => {
    localStorage.setItem('lang', lang)
  }

  return { language, changeLanguage }
})
