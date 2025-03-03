<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue';

</script>

<template>
  <main class="py-[5rem] ">
    <Container class="flex items-center justify-between gap-6">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-6">
          <h1 v-html="$t('heroHeader')" class="text-4xl font-bold text-sky-600"></h1>
          <p class="text-zinc-700 text-sm">{{ $t('heroSubHeadline') }}</p>
        </div>

        <div class="flex items-center gap-4">
          <Button size="lg">{{ $t('heroProductButton') }}</Button>
        </div>
      </div>

      <img class="rounded-2xl" src="https://placehold.co/600x400" alt="">
    </Container>
  </main>
</template>
