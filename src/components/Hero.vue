<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <main class="py-[5rem] ">
    <Container class="flex items-center justify-between gap-6">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-6">
          <h1 v-html="$t('heroHeader')" class="text-4xl font-bold text-text-primary"></h1>
          <p v-html="$t('heroSubHeadline')" class="text-text-secondary text-sm"></p>
        </div>

        <div class="flex items-center gap-4">
          <Button variant="primary" size="lg">
            {{ $t('heroProductButton') }}
            <Icon icon="arrow-right" size="sm" />
          </Button>
        </div>
      </div>

      <img class="rounded-2xl" src="https://placehold.co/600x400" alt="">
    </Container>
  </main>
</template>
