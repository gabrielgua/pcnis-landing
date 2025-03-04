import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    headerLinkContact: 'Contact',
    headerLinkAbout: 'About us',
    headerLinkProducts: 'Products',

    heroHeader:
      '<span class="text-primary">Welcome</span> to PCNIS Inc, <br/> here you will get to <span class="text-primary">know us better!</span>',
    heroSubHeadline:
      'We provide high-quality products designed to enhance customer satisfaction, <br/> ensuring safety, reliability, and innovation in every solution.',
    heroCardButton: 'More information',
    categoriesTitle: 'Our Selection',
    categoriesSubtitle:
      'Explore our range of high-quality products designed for comfort and well-being. <br/> We offer carefully selected categories to meet various needs.',
    categoriesPharmacyTitle: 'Pharmacy',
    categoriesPharmacyDescription: 'Reliable medical supplies and health essentials.',

    categoriesClothingTitle: 'Clothing',
    categoriesClothingDescription: 'Comfortable and adaptive wear for daily use.',

    categoriesTowelsTitle: 'Bath Linen',
    categoriesTowelsDescription: 'Essential products for hygiene and assisted care.',

    categoriesJewelryTitle: 'Jewelry ',
    categoriesJewelrysDescription:
      'Specialized accessories designed for both style and functionality.',
  },
  fr: {
    headerLinkContact: 'Contact',
    headerLinkAbout: 'À propos de nous',
    headerLinkProducts: 'Produits',
    heroHeader:
      '<span class="text-primary">Bienvenue</span> sur le site de PCNIS Inc, <br /> où vous <span class="text-primary">apprendrez à mieux nous connaître!</span>',
    heroSubHeadline:
      "Nous fournissons des produits médicaux de haute qualité conçus pour améliorer les soins aux patients, <br/> en garantissant la sécurité, la fiabilité et l'innovation dans chaque solution.",
    heroCardButton: "Plus d'informations",
    categoriesTitle: 'Notre Sélection',
    categoriesSubtitle:
      'Découvrez notre gamme de produits de haute qualité, conçus pour le confort et le bien-être. <br/> Nous proposons des catégories soigneusement sélectionnées pour répondre à divers besoins.',
    categoriesPharmacyTitle: 'Pharmacie',
    categoriesPharmacyDescription: 'Fournitures médicales fiables et essentiels pour la santé.',

    categoriesClothingTitle: 'Vêtements',
    categoriesClothingDescription: 'Vêtements confortables et adaptatifs pour un usage quotidien.',

    categoriesTowelsTitle: 'Linge de bain',
    categoriesTowelsDescription: 'Produits essentiels pour l’hygiène et les soins assistés.',

    categoriesJewelryTitle: 'Bijoux',
    categoriesJewelryDescription:
      'Accessoires spécialisés conçus pour allier style et fonctionnalité.',
  },
  br: {
    headerLinkContact: 'Contato',
    headerLinkAbout: 'Sobre nós',
    headerLinkProducts: 'Produtos',

    heroHeader:
      '<span class="text-primary">Bem-vindo</span> à PCNIS Inc, <br /> aqui você nos <span class="text-primary">conhecerá melhor!</span>',
    heroSubHeadline:
      'Fornecemos produtos médicos de alta qualidade projetados para aprimorar o atendimento ao paciente, <br/> garantindo segurança, confiabilidade e inovação em cada solução.',
    heroCardButton: 'Mais informações',

    categoriesTitle: 'Nossa Seleção',
    categoriesSubtitle:
      'Explore nossa linha de produtos de alta qualidade, desenvolvidos para conforto e bem-estar. <br/> Oferecemos categorias cuidadosamente selecionadas para atender a diversas necessidades.',
    categoriesPharmacyTitle: 'Farmácia',
    categoriesPharmacyDescription:
      'Suprimentos médicos confiáveis e itens essenciais para a saúde.',

    categoriesClothingTitle: 'Vestuário',
    categoriesClothingDescription: 'Roupas confortáveis e adaptáveis para o uso diário.',

    categoriesTowelsTitle: 'Roupas de Banho',
    categoriesTowelsDescription: 'Produtos essenciais para higiene e cuidados assistidos.',

    categoriesJewelryTitle: 'Joias',
    categoriesJewelryDescription:
      'Acessórios especializados, projetados para estilo e funcionalidade.',
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
