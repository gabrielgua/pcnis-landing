<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language.store'
import { watch } from 'vue'

const { locale } = useI18n()
const langStore = useLanguageStore()

locale.value = langStore.language;
watch(() => langStore.language, (newLang) => {
  locale.value = newLang;
})

const languageOptions = [
  { value: 'en', text: 'EN' },
  { value: 'fr', text: 'FR' },
  { value: 'br', text: 'BR' },
]

const languages = new Map<string, string>([
  ['en', 'https://flagsapi.com/GB/shiny/16.png'],
  ['fr', 'https://flagsapi.com/FR/shiny/16.png'],
  ['br', 'https://flagsapi.com/BR/shiny/16.png']
]);

</script>

<template>
  <main class="flex items-center px-2 border border-zinc-100 divide-x divide-zinc-200 rounded-xl">
    <div class="p-2 ps-0">
      <img :src="languages.get(langStore.language)">
    </div>

    <select v-model="langStore.language" @change="langStore.changeLanguage(langStore.language)"
      class="text-sm w-full md:w-max ps-1" name="lang" id="lang">
      <option v-for="option in languageOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
  </main>
</template>
