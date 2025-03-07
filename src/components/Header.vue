<script setup lang="ts">
import Container from './Container.vue';
import LanguageSelect from './languageSelect.vue';
import Logo from './Logo.vue';
import HeaderList from './HeaderList.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';
import { ref } from 'vue';

const mobileHeaderOpen = ref<boolean>(false);
const toggleMobileHeader = () => mobileHeaderOpen.value = !mobileHeaderOpen.value;

</script>

<template template>
  <header class="flex flex-col gap-6 sticky top-0 py-6 z-20 bg-white shadow-xl shadow-accent/5">
    <Container class="flex items-center gap-12 justify-between">
      <Logo />
      <nav class="hidden md:flex items-center gap-6">
        <HeaderList />
        <LanguageSelect />
      </nav>
      <div class="md:hidden">
        <Button @click="toggleMobileHeader" variant="neutral" class="grid place-items-center">
          <Icon icon="bars" size="lg" />
        </Button>
      </div>
    </Container>
    <Transition name="slide-from-top" mode="out-in">
      <Container class="md:hidden" v-if="mobileHeaderOpen">
        <nav class="grid gap-6">
          <HeaderList class="flex-col items-start" @clicked="toggleMobileHeader" />
          <LanguageSelect />
        </nav>
      </Container>
    </Transition>
  </header>
</template>



<style>
.slide-from-top-enter-active,
.slide-from-top-leave-actve {
  transition: all 250ms ease 100ms;
}

.slide-from-top-enter-from,
.slide-from-top-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
