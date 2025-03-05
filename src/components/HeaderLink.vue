<script lang="ts" setup>
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to" active-class="font-bold text-primary! underline decoration-2"
    class="text-sm bg-transparent text-secondary hover:underline underline-offset-3 flex items-center gap-4 active:scale-95 cursor-pointer transition-all">
    <slot />
  </RouterLink>
</template>
