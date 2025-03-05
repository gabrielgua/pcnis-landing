<script lang="ts" setup>
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to"
    class="text-sm bg-transparent text-primary hover:underline underline-offset-3 flex items-center gap-4 active:scale-95 cursor-pointer transition-all">
    <slot />
  </RouterLink>
</template>
