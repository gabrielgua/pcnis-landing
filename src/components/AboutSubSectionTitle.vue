<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

defineProps<{ icon: string }>();

</script>

<template>
  <header>
    <Card class="size-12 grid place-items-center p-0! mb-6">
      <Icon :icon="icon" class="text-primary" size="lg" />
    </Card>
    <h2 class="text-text-primary font-semibold text-3xl">
      <slot />
    </h2>
  </header>

</template>
