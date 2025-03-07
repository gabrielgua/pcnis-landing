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
      <section class="flex flex-col gap-24 lg:gap-44">


        <div class="grid md:grid-cols-2 xl:grid-cols-[auto_1fr] gap-16">
          <Card class="order-2 md:order-1">
            <img src="../assets/images/about.png" alt="About image" class="rounded-2xl w-full h-full object-cover">
          </Card>
          <AboutSubSectionContent class="order-1 md:order-2" icon="circle-question">
            <template #title>{{ $t('whoWeAreTitle') }}</template>
            <template #content>
              <p class="text-base font-light text-text-primary">{{ $t('whoWeAreFirstParagraph') }}</p><br />
              <p class="text-base font-light text-text-primary">{{ $t('whoWeAreSecondParagraph') }}</p><br />
              <p class="text-base font-light text-text-primary">{{ $t('whoWeAreThirdParagraph') }}</p>
            </template>
          </AboutSubSectionContent>
        </div>
        <div class="grid lg:grid-cols-[1fr_2fr] gap-16">
          <AboutSubSectionContent icon="bullseye">
            <template #title>{{ $t('whyChooseUsTitle') }}</template>
            <template #content>
              {{ $t('whyChooseUsFirstParagraph') }}
              <br /><br />
              {{ $t('whyChooseUsSecondParagraph') }}
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
        </div>
      </section>
    </template>
  </Section>
</template>
