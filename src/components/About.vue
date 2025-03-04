<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AboutSubSection from './AboutSubSection.vue';
import AboutSubSectionContent from './AboutSubSectionContent.vue';
import BulletPointItem from './BulletPointItem.vue';
import Card from './Card.vue';
import Section from './Section.vue';

const { t } = useI18n();

const bulletPoints = computed(() => [
  { title: t('whyChooseUsHighQualityProductsTitle'), content: t('whyChooseUsHighQualityProductsContent') },
  { title: t('whyChooseUsHighExpertiseTitle'), content: t('whyChooseUsHighExpertiseContent') },
  { title: t('whyChooseUsHighTrustedTitle'), content: t('whyChooseUsHighTrustedContent') },
  { title: t('whyChooseUsHighCanadaTitle'), content: t('whyChooseUsHighCanadaContent') },
]);

</script>

<template>
  <Section class="bg-sky-50">
    <template #title>{{ $t('aboutTitle') }}</template>
    <template #subtitle>
      <p class="text-text-primary" v-html="$t('aboutSubtitle')"></p>
    </template>
    <template #content>
      <AboutSubSection class="grid-cols-[auto_1fr]">
        <Card>
          <img src="../assets/images/about.png" alt="About image" class="rounded-2xl max-h-[400px]">
        </Card>
        <AboutSubSectionContent icon="circle-question">
          <template #title>{{ $t('whoWeAreTitle') }}</template>
          <template #content>
            <p class="text-base font-light text-text-primary" v-html="$t('whoWeAreContent')"></p>
          </template>
        </AboutSubSectionContent>
      </AboutSubSection>
      <AboutSubSection class="grid-cols-[1fr_2fr]">
        <AboutSubSectionContent icon="bullseye">
          <template #title>{{ $t('whyChooseUsTitle') }}</template>
          <template #content>
            {{ $t('whyChooseUsContentHeader') }}
            <br /><br />
            {{ $t('whyChooseUsContentFooter') }}
          </template>
        </AboutSubSectionContent>

        <ul class="flex flex-col gap-6 font-light text-text-primary">
          <BulletPointItem v-for="(item, index) in bulletPoints" :key="index">
            <p class="font-semibold">{{ item.title }} - <span class="font-light">{{ item.content }}</span></p>
          </BulletPointItem>
        </ul>
      </AboutSubSection>
    </template>

  </Section>
</template>
