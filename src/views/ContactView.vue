<script setup lang="ts">
import ContactErrorCard from '@/components/ContactErrorCard.vue';
import ContactFormCard from '@/components/ContactFormCard.vue';
import ContactQuestionCard from '@/components/ContactQuestionCard.vue';
import ContactSuccessCard from '@/components/ContactSuccessCard.vue';
import Section from '@/components/Section.vue';
import FadeTransition from '@/components/transitions/FadeTransition.vue';
import { useFormspreeStore } from '@/stores/formspree.store';
import type { ContactForm } from '@/types/contact-form.type';

import { onMounted } from 'vue';

onMounted(() => {
  formspreeStore.resetState();
})

const formspreeStore = useFormspreeStore();

const handleSubmit = async (form: ContactForm) => {
  await formspreeStore.send(form);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<template>
  <Section>
    <template #title>{{ $t('contactPageTitle') }}</template>
    <template #subtitle>{{ $t('contactPageSubtitle') }}</template>
    <template #content>
      <FadeTransition>
        <ContactSuccessCard v-if="formspreeStore.state.success" />
        <ContactErrorCard v-else-if="formspreeStore.state.error" />
        <div class="grid md:grid-cols-[1fr_3fr] gap-6" v-else>
          <ContactQuestionCard />
          <ContactFormCard @submit="handleSubmit" :loading="formspreeStore.state.loading" />
        </div>
      </FadeTransition>
    </template>
  </Section>
</template>
