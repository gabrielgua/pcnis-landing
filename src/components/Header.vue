<script setup lang="ts">
import Container from './Container.vue';
import LanguageSelect from './languageSelect.vue';
import Logo from './Logo.vue';
import RouterButton from './RouterButton.vue';

</script>

<template template>
  <header class="sticky top-0 py-6 z-20 bg-white shadow-xl shadow-accent/5">
    <Container class="flex items-center justify-between">
      <Logo />
      <ul class="flex items-center gap-2">
        <li>
          <RouterButton to="">{{ $t('headerLinkProducts') }}</RouterButton>
        </li>
        <li>
          <RouterButton to="">{{ $t('headerLinkAbout') }}</RouterButton>
        </li>
        <li>
          <RouterButton to="">{{ $t('headerLinkContact') }}</RouterButton>
        </li>
      </ul>
      <LanguageSelect />
    </Container>
  </header>
</template>
