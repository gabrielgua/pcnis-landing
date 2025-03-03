<script setup lang="ts">
import Container from './Container.vue';
import LanguageSelect from './languageSelect.vue';
import Logo from './Logo.vue';

</script>

<template template>
  <header class="sticky top-0 py-12 z-20">
    <Container class="flex items-center justify-between ">
      <Logo />
      <LanguageSelect />
    </Container>
  </header>
</template>
