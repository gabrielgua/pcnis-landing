<script setup lang="ts">
import { ref, Transition } from 'vue';
import Card from './Card.vue';
import Icon from './Icon.vue';

const showContent = ref<boolean>(false);
const toggleShowContent = () => showContent.value = !showContent.value;

</script>

<template>
  <li>
    <button @click="toggleShowContent" class="cursor-pointer active:scale-95 transition-all w-full">

      <Card class="flex flex-col gap-4 transition-all">
        <div class="flex items-center gap-4 justify-between">
          <slot name="icon">
            <Icon icon="check-circle" class="text-primary ring ring-offset-2 rounded-full" />
          </slot>
          <slot name="title">Title</slot>

          <Icon icon="chevron-down" size="sm" class="ms-auto me-2 transition-all"
            :class="{ 'rotate-180': showContent }" />
        </div>
        <Transition name="slide-from-left" mode="out-in">
          <div v-if="showContent">
            <slot>Hidden Content</slot>
          </div>
        </Transition>

      </Card>
    </button>
  </li>
</template>

<style>
.slide-from-left-enter-active,
.slide-from-left-leave-actve {
  transition: all 250ms ease 100ms;
}

.slide-from-left-enter-from,
.slide-from-left-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
