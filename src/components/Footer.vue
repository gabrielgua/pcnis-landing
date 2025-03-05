<script setup lang="ts">
import { Constants } from '@/utils/constants';
import Button from './Button.vue';
import Card from './Card.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';
import RouterButton from './RouterButton.vue';

const socials = [
  { icon: 'fa-brands fa-instagram', link: '#' },
  { icon: 'fa-brands fa-twitter', link: '#' },
  { icon: 'fa-brands fa-whatsapp', link: '#' },
  { icon: 'fa-brands fa-telegram', link: '#' },
]

</script>

<template>
  <footer class="bg-slate-950 text-text-primary-light p-6 ">
    <Container class="grid grid-cols-5 content-center">
      <section class="flex flex-col gap-6">
        <Card class="bg-white max-w-max">
          <Logo />
        </Card>
        <p class="font-light text-sm text-text-secondary-light">
          {{ $t('footerWelcome') }}
          <br />
          {{ $t('footerWelcomeText') }}
        </p>

      </section>
      <section>
        <h5 class="text-sm font-semibold mb-2">{{ $t('footerSocialsTitle') }}</h5>
        <ul class="flex items-center gap-3">
          <li v-for="(social, index) in socials" :key="index">
            <a :href="social.link" target="_blank">
              <Button variant="neutral" class="size-10 rounded-xl grid place-items-center p-0!">
                <Icon :icon="social.icon" class="text-2xl!" />
              </Button>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h5 class="text-sm font-semibold mb-2">{{ $t('footerQuickLinksTitle') }}</h5>
        <ul class="flex flex-col gap-3">
          <li>
            <RouterButton to="/">{{ $t('footerHomeLink') }}</RouterButton>
          </li>
          <li>
            <RouterButton to="">{{ $t('footerProductsLink') }}</RouterButton>
          </li>
          <li>
            <RouterButton to="">{{ $t('footerAboutUsLink') }}</RouterButton>
          </li>
          <li>
            <RouterButton to="">{{ $t('footerContactLink') }}</RouterButton>
          </li>
        </ul>
      </section>

      <section>
        <h5 class="text-sm font-semibold mb-2">{{ $t('footerContactTitle') }}</h5>
        <p class="text-sm font-light">{{ Constants.contactPhone }}</p>
        <p class="text-sm font-light">{{ Constants.supportEmail }}</p>
      </section>

      <section>
        <h5 class="text-sm font-semibold mb-2">{{ $t('footerLocationTitle') }}</h5>
        <p class="text-sm font-light">Quebec QC, Canada.</p>
      </section>
      <section
        class="col-span-5 mt-6 pt-6 text-text-secondary-light font-light text-xs flex items-center justify-between border-t border-t-primary/10">
        <p>&copy; {{ $t('footerCopyright') }}</p>
        <p>
          {{ $t('footerDevelopedBy') }}
          <a href="https://github.com/gabrielgua" target="_blank" class="text-primary font-semibold"> @gabrielgua</a>
        </p>

      </section>

    </Container>
  </footer>

</template>
