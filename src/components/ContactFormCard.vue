<script setup lang="ts">
import type { ContactForm } from '@/types/contact-form.type';
import Card from './Card.vue';
import Icon from './Icon.vue';
import { ref } from 'vue';
import FadeTransition from './transitions/FadeTransition.vue';
import Textarea from './Textarea.vue';
import Input from './Input.vue';
import Button from './Button.vue';

defineProps<{ loading: boolean }>();

const emit = defineEmits(['submit'])

const form = ref<ContactForm>({
  name: '',
  lastName: '',
  email: '',
  message: '',
  phone: ''
});

const handleSubmit = () => {
  emit('submit', form.value)
  resetForm();
}

const resetForm = () => {
  form.value = {
    name: '',
    lastName: '',
    email: '',
    message: '',
    phone: ''
  }
}

</script>



<template>
  <Card class="relative">
    <Card class="grid place-items-center p-0! size-12 mb-6">
      <Icon icon="fa-regular fa-paper-plane" size="lg" class="text-primary" />
    </Card>
    <h2 class="text-xl font-semibold mb-6">Send us a message!</h2>

    <form @submit.prevent="handleSubmit" class="grid gap-6">
      <div class="grid md:grid-cols-2 items-end gap-6">
        <Input id="name" v-model="form.name" type="text" label="First Name*" placeholder="Enter your first name"
          required />
        <Input id="lastname" v-model="form.lastName" type="text" label="Last Name*" placeholder="Enter your last name"
          required />
      </div>
      <div class="grid md:grid-cols-2 items-end gap-6">
        <Input id="email" v-model="form.email" type="email" label="Email*" placeholder="Enter your best email"
          required />
        <Input id="phone" v-model="form.phone" type="tel" label="Phone number"
          placeholder="Enter your best phone number" />
      </div>

      <Textarea id="message" v-model="form.message" label="Message*" placeholder="Write us your message" />
      <Button type="submit" class="justify-center">Submit</Button>
    </form>

    <FadeTransition>
      <div v-if="loading" class="absolute top-0 bg-white/80 size-full grid place-items-center">
        <Card>
          <p class="animate-pulse">Sending message...</p>
        </Card>
      </div>
    </FadeTransition>
  </Card>
</template>
