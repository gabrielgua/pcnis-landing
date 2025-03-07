<script setup lang="ts">
import { Constants } from '@/utils/constants';
import Button from './Button.vue';
import Card from './Card.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';
import RouterButton from './HeaderLink.vue';
import FooterSection from './FooterSection.vue';
import FooterLink from './FooterLink.vue';

const socials = [
  { icon: 'fa-brands fa-instagram', link: '#' },
  { icon: 'fa-brands fa-twitter', link: '#' },
  { icon: 'fa-brands fa-whatsapp', link: '#' },
  { icon: 'fa-brands fa-telegram', link: '#' },
]

</script>

<template>
  <footer class="bg-slate-950 text-text-primary-light pt-12 pb-6 ">
    <Container class="flex flex-wrap *:grow gap-12">
      <section class="flex flex-col gap-6">
        <Logo inverted />
        <p class="font-light text-sm text-text-secondary-light">
          {{ $t('footerWelcome') }}
          <br />
          {{ $t('footerWelcomeText') }}
        </p>
      </section>
      <FooterSection>
        <template #title>{{ $t('footerSocialsTitle') }}</template>
        <ul class="flex items-center gap-3">
          <li v-for="(social, index) in socials" :key="index">
            <a :href="social.link" target="_blank">
              <Button variant="neutral" class="size-10 rounded-xl grid place-items-center p-0!">
                <Icon :icon="social.icon" class="text-2xl!" />
              </Button>
            </a>
          </li>
        </ul>
      </FooterSection>

      <FooterSection>
        <template #title>{{ $t('footerQuickLinksTitle') }}</template>
        <ul class="flex flex-col gap-3">
          <li>
            <FooterLink to="/">{{ $t('headerHomeLink') }}</FooterLink>
          </li>
          <li>
            <FooterLink to="/contact">{{ $t('headerContactLink') }}</FooterLink>
          </li>
          <li>
            <FooterLink to="/about">{{ $t('headerAboutUsLink') }}</FooterLink>
          </li>
          <li>
            <FooterLink to="/products">{{ $t('headerProductsLink') }}</FooterLink>
          </li>
        </ul>
      </FooterSection>

      <FooterSection>
        <template #title>{{ $t('footerContactTitle') }}</template>
        <p class="text-sm font-light">{{ Constants.contactPhone }}</p>
        <p class="text-sm font-light">{{ Constants.supportEmail }}</p>
      </FooterSection>

      <FooterSection>
        <template #title>{{ $t('footerLocationTitle') }}</template>
        <p class="text-sm font-light">Quebec QC, Canada.</p>
      </FooterSection>

      <section
        class="w-full  pt-6 text-text-secondary-light font-light text-xs flex gap-12 items-center justify-between border-t border-t-primary/10">
        <p>&copy; {{ $t('footerCopyright') }}</p>
        <p>
          {{ $t('footerDevelopedBy') }}
          <a href="https://github.com/gabrielgua" target="_blank" class="text-primary font-semibold hover:underline">
            @gabrielgua</a>
        </p>

      </section>
    </Container>
  </footer>
</template>
