<script setup lang="ts">
import { TransitionGroup } from 'vue';

</script>

<template>
  <TransitionGroup tag="ul" class="flex flex-col gap-6" name="bullet-point-list">
    <slot />
  </TransitionGroup>
</template>

<style>
.bullet-point-list-move {
  transition: all .250 ease;
}
</style>
