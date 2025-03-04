<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

</script>

<template>
  <li>
    <Card class="flex items-center gap-4">
      <Icon icon="check-circle" class="text-primary ring ring-offset-2 rounded-full" />
      <slot />
    </Card>
  </li>
</template>
