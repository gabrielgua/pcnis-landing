<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{ inverted?: boolean }>();

</script>

<template>
  <RouterLink to="/">
    <div class="flex items-center gap-2">
      <p class="text-sky-600 text-3xl font-extrabold italic">PCNIS</p>
      <Icon icon="circle-nodes" class="text-primary" />
      <p class="text-xl font-normal" :class="[inverted ? 'text-text-primary-light' : 'text-text-primary']">Inc.</p>
    </div>
  </RouterLink>
</template>
<style style lang="css">
header p {
  font-family: "Montserrat", sans-serif
}
</style>
