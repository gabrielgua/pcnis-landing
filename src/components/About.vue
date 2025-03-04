<script setup lang="ts">
import Card from './Card.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <section class="py-12 bg-sky-50">
    <Container class="flex flex-col gap-16">
      <header>
        <h2 class="text-text-primary font-semibold text-3xl mb-3">{{ $t('aboutTitle') }}</h2>
        <p class="text-text-primary" v-html="$t('aboutSubtitle')"></p>
      </header>
      <div class="grid grid-cols-[auto_1fr] gap-16">
        <Card>
          <img src="../assets/images/about.png" alt="About image" class="rounded-2xl max-h-[400px]">
        </Card>
        <div class="flex flex-col gap-3 items-start">
          <header>
            <Card class="size-12 grid place-items-center p-0! mb-6">
              <Icon icon="circle-question" class="text-primary" size="lg" />
            </Card>
            <h2 class="text-text-primary font-semibold text-3xl">{{ $t('whoWeAreTitle') }}</h2>
          </header>
          <p class="text-base font-light text-text-primary" v-html="$t('whoWeAreContent')"></p>
        </div>
      </div>
      <div class="grid grid-cols-[1fr_2fr] gap-16 mt-6">
        <div class="flex flex-col gap-3 items-start">
          <header>
            <Card class="size-12 grid place-items-center p-0! mb-6">
              <Icon icon="bullseye" class="text-primary" size="lg" />
            </Card>
            <h2 class="text-text-primary font-semibold text-3xl">{{ $t('whyChooseUsTitle') }}</h2>
          </header>
          <p class="font-light text-text-primary">{{ $t('whyChooseUsContentHeader') }}</p>

          <p class="font-light text-text-primary">{{ $t('whyChooseUsContentFooter') }}</p>

        </div>
        <ul class="flex flex-col gap-6 font-light text-text-primary">
          <li>
            <Card class="flex items-center gap-4">
              <Icon icon="check-circle" class="text-primary ring ring-offset-2 rounded-full" />
              <p v-html="$t('whyChooseUsHighQualityProducts')"></p>
            </Card>
          </li>
          <li>
            <Card class="flex items-center gap-4">
              <Icon icon="check-circle" class="text-primary ring ring-offset-2 rounded-full" />
              <p v-html="$t('whyChooseUsHighExpertise')"></p>
            </Card>
          </li>
          <li>
            <Card class="flex items-center gap-4">
              <Icon icon="check-circle" class="text-primary ring ring-offset-2 rounded-full" />
              <p v-html="$t('whyChooseUsHighTrusted')"></p>
            </Card>
          </li>
          <li>
            <Card class="flex items-center gap-4">
              <Icon icon="check-circle" class="text-primary ring ring-offset-2 rounded-full" />
              <p v-html="$t('whyChooseUsHighCanada')"></p>
            </Card>
          </li>
        </ul>
      </div>
    </Container>
  </section>
</template>
