<script setup lang="ts">
import AboutSubSectionTitle from './AboutSubSectionTitle.vue';

defineProps<{ icon: string }>();

</script>

<template>
  <section class="flex flex-col gap-3 items-start">
    <AboutSubSectionTitle :icon="icon">
      <slot name="title">Title</slot>
    </AboutSubSectionTitle>
    <p class="text-base font-light text-text-primary">
      <slot name="content">Content</slot>
    </p>
  </section>
</template>
