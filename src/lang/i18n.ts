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
    categoriesJewelryDescription:
      'Specialized accessories designed for both style and functionality.',
    categoryButton: 'More info',

    aboutTitle: 'About us',
    aboutSubtitle: 'Learn more about our mission, values, and commitment.',

    whoWeAreTitle: 'Who we are',
    whoWeAreContent:
      'At PCNIS Inc., we are committed to providing high-quality products that enhance comfort and well-being. <br /><br> Based in Québec, Canada, we specialize in pharmacy essentials, clothing, bath linens, and jewelry, offering reliable and practical solutions for everyday needs. Our dedication to quality and customer satisfaction ensures that every product meets the highest standards. <br/><br/> Whether at home or on the go, PCNIS Inc. is here to bring convenience and care to your daily life.',

    whyChooseUsTitle: 'Why choose us?',
    whyChooseUsContentHeader:
      'At PCNIS Inc., we prioritize quality, reliability, and customer satisfaction in everything we do. Here’s why you can trust us:',
    whyChooseUsHighQualityProducts:
      '<span class="font-semibold">High-Quality Products</span> – Carefully selected to meet the highest standards.',
    whyChooseUsHighExpertise:
      '<span class="font-semibold">Expertise & Commitment</span> – A dedicated team ensuring the best solutions for your needs.',
    whyChooseUsHighTrusted:
      '<span class="font-semibold">Trusted & Reliable</span> – Products designed for comfort, safety, and long-term use.',
    whyChooseUsHighCanada:
      '<span class="font-semibold">Based in Québec, Canada</span> – Proudly serving customers with excellence and care.',
    whyChooseUsContentFooter:
      'Choose PCNIS Inc. for products that enhance daily life with comfort and confidence.',
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

    categoryButton: 'Plus d’infos',

    categoriesPharmacyTitle: 'Pharmacie',
    categoriesPharmacyDescription: 'Fournitures médicales fiables et essentiels pour la santé.',

    categoriesClothingTitle: 'Vêtements',
    categoriesClothingDescription: 'Vêtements confortables et adaptatifs pour un usage quotidien.',
    categoriesTowelsTitle: 'Linge de bain',
    categoriesTowelsDescription: 'Produits essentiels pour l’hygiène et les soins assistés.',

    categoriesJewelryTitle: 'Bijoux',
    categoriesJewelryDescription:
      'Accessoires spécialisés conçus pour allier style et fonctionnalité.',

    aboutTitle: 'À propos de nous',
    aboutSubtitle: 'En savoir plus sur notre mission, nos valeurs et notre engagement.',

    whoWeAreTitle: 'Qui nous sommes',
    whoWeAreContent:
      'Chez PCNIS Inc., nous nous engageons à fournir des produits de haute qualité qui améliorent le confort et le bien-être. <br/><br/> Basés à Québec, Canada, nous sommes spécialisés dans les essentiels de pharmacie, les vêtements, le linge de bain et les bijoux, offrant des solutions fiables et pratiques pour les besoins quotidiens. Notre engagement envers la qualité et la satisfaction de nos clients garantit que chaque produit répond aux normes les plus élevées. <br/><br/> Que ce soit à la maison ou en déplacement, PCNIS Inc. est là pour vous apporter commodité et soin au quotidien.',

    whyChooseUsTitle: 'Pourquoi nous choisir ?',
    whyChooseUsContentHeader:
      'Chez PCNIS Inc., nous mettons la qualité, la fiabilité et la satisfaction du client au cœur de tout ce que nous faisons. Voici pourquoi vous pouvez nous faire confiance :',

    whyChooseUsHighQualityProducts:
      '<span class="font-semibold">Produits de haute qualité</span> – Soigneusement sélectionnés pour répondre aux normes les plus élevées.',

    whyChooseUsHighExpertise:
      '<span class="font-semibold">Expertise & Engagement</span> – Une équipe dévouée assurant les meilleures solutions pour vos besoins.',

    whyChooseUsHighTrusted:
      '<span class="font-semibold">Fiable & Digne de confiance</span> – Des produits conçus pour le confort, la sécurité et une utilisation à long terme.',

    whyChooseUsHighCanada:
      '<span class="font-semibold">Basé à Québec, Canada</span> – Fier de servir nos clients avec excellence et attention.',

    whyChooseUsContentFooter:
      'Choisissez PCNIS Inc. pour des produits qui améliorent la vie quotidienne avec confort et confiance.',
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

    categoryButton: 'Mais informações',

    aboutTitle: 'Sobre nós',
    aboutSubtitle: 'Saiba mais sobre nossa missão, valores e compromisso.',

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

    whoWeAreTitle: 'Quem somos',
    whoWeAreContent:
      'Na PCNIS Inc., estamos comprometidos em fornecer produtos de alta qualidade que promovem conforto e bem-estar. <br/><br/> Sediados em Québec, Canadá, somos especializados em itens de farmácia, vestuário, roupas de banho e joias, oferecendo soluções confiáveis e práticas para as necessidades do dia a dia. Nossa dedicação à qualidade e à satisfação do cliente garante que cada produto atenda aos mais altos padrões. <br/><br/> Seja em casa ou em movimento, a PCNIS Inc. está aqui para trazer praticidade e cuidado para sua vida diária.',

    whyChooseUsTitle: 'Por que escolher-nos?',
    whyChooseUsContentHeader:
      'Na PCNIS Inc., priorizamos qualidade, confiabilidade e satisfação do cliente em tudo o que fazemos. Aqui está o porquê você pode confiar em nós:',

    whyChooseUsHighQualityProducts:
      '<span class="font-semibold">Produtos de Alta Qualidade</span> – Cuidadosamente selecionados para atender aos mais altos padrões.',

    whyChooseUsHighExpertise:
      '<span class="font-semibold">Expertise & Compromisso</span> – Uma equipe dedicada garantindo as melhores soluções para suas necessidades.',

    whyChooseUsHighTrusted:
      '<span class="font-semibold">Confiável & Seguro</span> – Produtos projetados para conforto, segurança e uso prolongado.',

    whyChooseUsHighCanada:
      '<span class="font-semibold">Sediada em Québec, Canadá</span> – Atendendo clientes com excelência e dedicação.',

    whyChooseUsContentFooter:
      'Escolha a PCNIS Inc. para produtos que melhoram a vida diária com conforto e confiança.',
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
