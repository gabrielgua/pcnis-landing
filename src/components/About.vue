<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AboutSubSection from './AboutSubSection.vue';
import AboutSubSectionContent from './AboutSubSectionContent.vue';
import BulletPointItem from './BulletPointItem.vue';
import Card from './Card.vue';
import Section from './Section.vue';
import Icon from './Icon.vue';
import BulletPointList from './BulletPointList.vue';

const { t } = useI18n();

const bulletPoints = computed(() => [
  { title: t('whyChooseUsHighQualityProductsTitle'), content: t('whyChooseUsHighQualityProductsContent'), icon: 'martini-glass' },
  { title: t('whyChooseUsHighExpertiseTitle'), content: t('whyChooseUsHighExpertiseContent'), icon: 'handshake' },
  { title: t('whyChooseUsHighTrustedTitle'), content: t('whyChooseUsHighTrustedContent'), icon: 'shield-halved' },
  { title: t('whyChooseUsHighCanadaTitle'), content: t('whyChooseUsHighCanadaContent'), icon: 'location-dot' },

]);

</script>

<template>
  <Section>
    <template #title>{{ $t('aboutTitle') }}</template>
    <template #subtitle>
      <p class="text-text-primary" v-html="$t('aboutSubtitle')"></p>
    </template>
    <template #content>
      <section class="flex flex-col gap-44">


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

          <TransitionGroup tag="ul" class="flex flex-col gap-6" name="bullet-point-list">
            <BulletPointItem v-for="(item, index) in bulletPoints" :key="index">
              <template #title>
                <p class="font-semibold">{{ item.title }}</p>
              </template>
              <template #icon>
                <Icon :icon="item.icon" class="text-primary" size="lg" />
              </template>
              <p class="font-light text-start">{{ item.content }}</p>
            </BulletPointItem>
          </TransitionGroup>
        </AboutSubSection>
      </section>
    </template>
  </Section>
</template>
