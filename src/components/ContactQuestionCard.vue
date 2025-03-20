<script setup lang="ts">
import { Constants } from '@/utils/constants';
import Card from './Card.vue';
import Icon from './Icon.vue';

</script>

<template>
  <Card class="text-text-primary flex flex-col max-h-max">
    <Card class="grid place-items-center p-0! size-12 mb-6">
      <Icon icon="question" size="lg" class="text-primary" />
    </Card>

    <h2 class="text-xl font-semibold mb-6">Have a question?</h2>
    <p class="text-sm mb-4">
      We're here to help! Fill out the form or reach us via email or phone.
      We are available to help you get the best experience possible.
    </p>

    <ul class="text-sm flex flex-col gap-2 mt-6">
      <li class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
        <Icon icon="fa-regular fa-clock" class="text-primary" />
        <p>9am - 5pm EST</p>
      </li>
      <li class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
        <Icon icon="fa-regular fa-envelope" class="text-primary" />
        <p>{{ Constants.supportEmail }}</p>
      </li>
      <li class="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
        <Icon icon="phone" class="text-primary" />
        <p>{{ Constants.contactPhone }}</p>
      </li>
    </ul>
  </Card>
</template>
