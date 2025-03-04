<script setup lang="ts">
import Container from './Container.vue';
import CategoryList from './CategoryList.vue';

</script>

<template>
  <section class="py-12">
    <Container class="flex flex-col gap-12">
      <header>
        <h2 class="text-text-primary font-semibold text-3xl mb-3">{{ $t('categoriesTitle') }}</h2>
        <p class="text-text-primary" v-html="$t('categoriesSubtitle')"></p>
      </header>
      <CategoryList />
    </Container>
  </section>
</template>
