<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <main class="py-12 md:py-24 inset-shadow-[-1px_-7px_33px_12px_rgba(255,_255,_255,_0.1)] inset-shadow-white/80">
    <Container class="flex items-center justify-between gap-6">
      <div
        class="max-w-[750px] flex flex-col items-start gap-12 border border-primary/20 rounded-3xl shadow-xl shadow-accent/10 bg-white/80 p-8">
        <Icon icon="info-circle" class="text-primary ring ring-primary ring-offset-2 rounded-full" />
        <div class="flex flex-col gap-6">
          <h1 class="text-4xl font-bold text-text-primary">
            <span class="text-primary">{{ $t('heroWelcome') }}</span>
            {{ $t('heroWelcomeFollowUp') }}
            <br>
            {{ $t('heroSecondLine') }}
            <span class="text-primary">{{ $t('heroSecondLineFollowUp') }}</span>
          </h1>
          <p v-html="$t('heroSubHeadline')" class="text-text-primary font-light text-sm"></p>
        </div>

        <Button variant="primary" size="lg" class="max-w-max">
          {{ $t('heroCardButton') }}
          <Icon icon="arrow-right" size="sm" />
        </Button>
      </div>
    </Container>
  </main>
</template>

<style lang="css" scoped>
main {
  background-image: radial-gradient(var(--color-primary) 1px, transparent 0);
  background-size: 2.5rem 2.5rem;
  background-position: -19px -10px;
}
</style>
