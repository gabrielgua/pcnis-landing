<script lang="ts" setup>
import Button from './Button.vue';

defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to">
    <Button variant="primary-link">
      <slot />
    </Button>
  </RouterLink>
</template>
