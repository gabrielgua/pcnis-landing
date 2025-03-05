<script setup lang="ts">
import Container from './Container.vue';
import LanguageSelect from './languageSelect.vue';
import Logo from './Logo.vue';
import HeaderLink from './HeaderLink.vue';

</script>

<template template>
  <header class="sticky top-0 py-6 z-20 bg-white shadow-xl shadow-accent/5">
    <Container class="flex items-center gap-12 justify-between">
      <Logo />
      <ul class="flex items-center gap-6 ms-auto">

        <li>
          <HeaderLink to="/">{{ $t('headerHomeLink') }}</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/products">{{ $t('headerProductsLink') }}</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/about">{{ $t('headerAboutUsLink') }}</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/contact">{{ $t('headerContactLink') }}</HeaderLink>
        </li>
      </ul>
      <LanguageSelect />
    </Container>
  </header>
</template>
