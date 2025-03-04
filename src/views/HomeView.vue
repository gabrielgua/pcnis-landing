<script setup lang="ts">
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Categories from '@/components/Categories.vue';
import About from '@/components/About.vue';

</script>

<template>
  <Header />
  <main class="flex flex-col gap-12">
    <Hero />
    <Categories />
    <About id="about" />
  </main>
  <Footer />
</template>
