<script setup lang="ts">
import HeaderLink from './HeaderLink.vue';
const emit = defineEmits(['clicked'])
const clicked = () => emit('clicked');


</script>

<template>
  <ul class="flex items-center gap-6">
    <li>
      <HeaderLink to="/home" @click="clicked">{{ $t('headerHomeLink') }}</HeaderLink>
    </li>
    <li>
      <HeaderLink to="/products" @click="clicked">{{ $t('headerProductsLink') }}</HeaderLink>
    </li>
    <li>
      <HeaderLink to="/about" @click="clicked">{{ $t('headerAboutUsLink') }}</HeaderLink>
    </li>
    <li>
      <HeaderLink to="/contact" @click="clicked">{{ $t('headerContactLink') }}</HeaderLink>
    </li>
  </ul>
</template>
