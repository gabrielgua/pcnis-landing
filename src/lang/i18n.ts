import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    heroHeader:
      'Innovative <span class="text-primary">Medical solutions</span> <br/> for a <span class="text-primary">Healthier Tomorrow</span>',
    heroSubHeadline:
      'We provide high-quality medical products designed to enhance patient care, <br/> ensuring safety, reliability, and innovation in every solution.',
    heroProductButton: 'Explore our product catalog',
    aboutTitle: 'About us',

    support: 'Contact our support at {email}',
  },
  fr: {
    heroHeader:
      'Des <span class="text-primary">Solutions médicales</span> innovantes <br/> pour un <span class="text-primary">Avenir plus sain</span>',
    heroSubHeadline:
      "Nous fournissons des produits médicaux de haute qualité conçus pour améliorer les soins aux patients, <br/> en garantissant la sécurité, la fiabilité et l'innovation dans chaque solution.",
    heroProductButton: 'Découvrez notre catalogue de produits',
    aboutTitle: 'À propos de nous',
    support: "Contactez notre service d'assistance à l'adresse suivante: {email}",
  },
  br: {
    heroHeader:
      '<span class="text-primary">Soluções médicas</span> inovadoras <br/> para um <span class="text-primary">Futuro mais saudável</span>',
    heroSubHeadline:
      'Fornecemos produtos médicos de alta qualidade projetados para aprimorar o atendimento ao paciente, <br/> garantindo segurança, confiabilidade e inovação em cada solução.',
    heroProductButton: 'Explore nosso catálogo de produtos',
    aboutTitle: 'Sobre nós',
    support: 'Contate o nosso suporte pelo e-mail {email}',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
})

export default i18n
