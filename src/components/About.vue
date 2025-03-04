<script setup lang="ts">
import Card from './Card.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <section class="py-12 bg-sky-50">
    <Container class="flex flex-col gap-12">
      <header>
        <h2 class="text-text-primary font-semibold text-3xl mb-3">{{ $t('aboutTitle') }}</h2>
        <p class="text-text-primary" v-html="$t('aboutSubtitle')"></p>
      </header>
      <div class="grid grid-cols-[auto_1fr] gap-12">
        <Card>
          <img src="../assets/images/about.png" alt="About image" class="rounded-2xl max-h-[400px]">
        </Card>
        <div class="flex flex-col gap-3 items-start">
          <header>
            <Card class="size-10 grid place-items-center p-0! mb-6">
              <Icon icon="circle-question" class="text-primary" size="lg" />
            </Card>
            <h2 class="text-text-primary font-semibold text-3xl">{{ $t('whoWeAreTitle') }}</h2>
          </header>
          <p class="text-base font-light text-text-primary" v-html="$t('whoWeAreContent')"></p>
        </div>
      </div>
      <div class="grid grid-cols-[1fr_auto] gap-12 ">
        <div class="flex flex-col gap-3 items-start">
          <header>
            <Card class="size-10 grid place-items-center p-0! mb-6">
              <Icon icon="bullseye" class="text-primary" size="lg" />
            </Card>
            <h2 class="text-text-primary font-semibold text-3xl">{{ $t('whyChooseUsTitle') }}</h2>
          </header>
          <p class="font-light text-text-primary">{{ $t('whyChooseUsContentHeader') }}</p>
          <ul class="list-disc font-light text-text-primary ms-4">
            <li v-html="$t('whyChooseUsHighQualityProducts')"></li>
            <li v-html="$t('whyChooseUsHighExpertise')"></li>
            <li v-html="$t('whyChooseUsHighTrusted')"></li>
            <li v-html="$t('whyChooseUsHighCanada')"></li>
          </ul>
          <p class="font-light text-text-primary">{{ $t('whyChooseUsContentFooter') }}</p>
        </div>
        <Card>
          <img src="../assets/images/hand_shake.jpg" alt="About image" class="rounded-2xl max-h-[400px]">
        </Card>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.dotted-bg {
  background-image: radial-gradient(var(--color-primary) 1px, transparent 0);
  background-size: 2.5rem 2.5rem;
  background-position: -19px -10px;
}
</style>
