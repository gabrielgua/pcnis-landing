<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';
</script>

<template>
  <Card class="grid gap-6 max-w-max border-dashed border-amber-200!">
    <Card class="w-max p-0! size-14! border-dashed border-amber-200! rounded-xl grid place-items-center ">
      <Icon icon="person-digging" size="lg" class="text-amber-500" />
    </Card>
    <div class="flex flex-col rounded-xl gap-2">
      <h1 class="text-2xl">Under Construction</h1>
      <p class="text-sm text-text-primary font-light">
        Something great is coming! We're working behind the scenes to bring you an amazing experience. Stay tuned!
      </p>
    </div>
  </Card>
</template>
