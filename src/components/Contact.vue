<script setup lang="ts">
import { Constants } from '@/utils/constants';
import Section from './Section.vue';
import Icon from './Icon.vue';
import Card from './Card.vue';
import Button from './Button.vue';

</script>

<template>
  <Section class="bg-primary py-24">
    <template #title>
      <h2 class="text-text-primary-light font-semibold text-3xl mb-3">{{ $t('contactTitle') }}</h2>
    </template>
    <template #subtitle>
      <p class="text-text-primary-light">{{ $t('contactSubtitle') }}</p>
    </template>
    <template #content>
      <section class="grid grid-cols-2">
        <div class="text-text-primary-light">
          <div class="flex items-center gap-6 mb-3">
            <Card class="size-10 grid place-items-center p-0! shadow-2xl! shadow-black/10">
              <Icon icon="phone" class="text-primary" />
            </Card>
            <h2 class="font-semibold">{{ $t('contactPhone') }}</h2>
          </div>
          <p class="font-light text-6xl">{{ Constants.contactPhone }}</p>
        </div>
        <div class="text-text-primary-light">
          <div class="flex items-center gap-6 mb-3">
            <Card class="size-10 grid place-items-center p-0! shadow-2xl! shadow-black/10">
              <Icon icon="envelope" class="text-primary" />
            </Card>
            <h2 class="font-semibold">{{ $t('contactEmail') }}</h2>
          </div>
          <p class="font-light text-6xl">{{ Constants.supportEmail }}</p>
        </div>
      </section>
      <Button variant="neutral" class="max-w-max" size="lg">
        {{ $t('contactButton') }}
        <Icon icon="arrow-right" size="sm" />
      </Button>

    </template>
  </Section>

</template>
