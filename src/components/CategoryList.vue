<script setup lang="ts">
import Card from './Card.vue';
import pharmacyImg from '@/assets/images/pharmacy.jpeg';
import clothingImg from '@/assets/images/clothing.jpeg';
import towelsImg from '@/assets/images/towels.jpeg';
import jewelryImg from '@/assets/images/jewelry.jpg';
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import Button from './Button.vue';
import Icon from './Icon.vue';

const { t } = useI18n();

const categories = computed(() => [
  { title: t('categoriesPharmacyTitle'), description: t('categoriesPharmacyDescription'), img: pharmacyImg },
  { title: t('categoriesClothingTitle'), description: t('categoriesClothingDescription'), img: clothingImg },
  { title: t('categoriesTowelsTitle'), description: t('categoriesTowelsDescription'), img: towelsImg },
  { title: t('categoriesJewelryTitle'), description: t('categoriesJewelryDescription'), img: jewelryImg },
]);

</script>

<template>
  <ul class="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

    <Card v-for="(categorie, index) in categories" :key="index" class="flex flex-col hover:scale-105 transition-all">
      <img class="rounded-2xl w-full aspect-video max-h-[220px] object-cover" :src="categorie.img" alt="product">
      <h2 class="font-semibold text-xl text-text-primary my-4">{{ categorie.title }}</h2>
      <p class="text-text-secondary text-sm mb-4">{{ categorie.description }}</p>

      <div class="mt-auto">
        <Button size="sm" class="w-full justify-center">
          {{ $t('categoryButton') }}
          <Icon icon="arrow-right" size="sm" />
        </Button>
      </div>
    </Card>
  </ul>
</template>
