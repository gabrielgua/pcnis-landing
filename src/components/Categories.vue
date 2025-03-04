<script setup lang="ts">
import CategoryList from './CategoryList.vue';
import Section from './Section.vue';

</script>

<template>
  <Section>
    <template #title>
      {{ $t('categoriesTitle') }}
    </template>
    <template #subtitle>
      <p class="text-text-primary" v-html="$t('categoriesSubtitle')"></p>
    </template>
    <template #content>
      <CategoryList />
    </template>
  </Section>
</template>
