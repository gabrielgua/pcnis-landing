<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

</script>

<template>
  <Card class="max-h-max">
    <Card class="grid place-items-center p-0! shadow-rose-500/20  size-12 mb-6">
      <Icon icon="xmark" size="lg" class="text-rose-500" />
    </Card>
    <h2 class="text-xl font-semibold text-rose-500 mb-2">{{ $t("contactPageErrorHeading") }}</h2>
    <p class="text-sm text-text-secondary">
      {{ $t("contactPageErrorBody") }}
    </p>
  </Card>
</template>
