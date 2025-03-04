<script setup lang="ts">
import Container from './Container.vue';

</script>

<template>
  <section class="py-12">
    <Container class="flex flex-col gap-12">
      <header>
        <h2 class="text-text-primary font-semibold text-3xl mb-3">
          <slot name="title">Title</slot>
        </h2>
        <p class="text-text-primary">
          <slot name="subtitle">Subtitle</slot>
        </p>
      </header>
      <slot name="content" />
    </Container>
  </section>
</template>
