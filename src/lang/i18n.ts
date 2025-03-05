import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    headerHomeLink: 'Home',
    headerContactLink: 'Contact',
    headerAboutUsLink: 'About us',
    headerProductsLink: 'Products',

    heroHeader:
      '<span class="text-primary">Welcome</span> to PCNIS Inc, <br/> here you will get to <span class="text-primary">know us better!</span>',
    heroSubHeadline:
      'We provide high-quality products designed to enhance customer satisfaction, ensuring safety, reliability, and innovation in every solution.',
    heroCardButton: 'More information',
    categoriesTitle: 'Our Selection',
    categoriesSubtitle:
      'Explore our range of high-quality products designed for comfort and well-being.',
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

    whyChooseUsHighQualityProductsTitle: 'High-Quality Products',
    whyChooseUsHighQualityProductsContent: ' Carefully selected to meet the highest standards.',

    whyChooseUsHighExpertiseTitle: 'Expertise & Commitment',
    whyChooseUsHighExpertiseContent:
      ' A dedicated team ensuring the best solutions for your needs.',

    whyChooseUsHighTrustedTitle: 'Trusted & Reliable',
    whyChooseUsHighTrustedContent: 'Products designed for comfort, safety, and long-term use.',

    whyChooseUsHighCanadaTitle: 'Based in Québec, Canada',
    whyChooseUsHighCanadaContent: ' Proudly serving customers with excellence and care.',

    whyChooseUsContentFooter:
      'Choose PCNIS Inc. for products that enhance daily life with comfort and confidence.',

    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with us for inquiries, support, or more information.',

    contactPhone: 'Phone Number',
    contactEmail: 'Email Address',

    contactButton: 'Contact us',

    footerWelcome: 'Welcome to PCNIS Inc,',
    footerWelcomeText: 'here you will get to know us better!',

    footerSocialsTitle: 'Socials',
    footerQuickLinksTitle: 'Quick Links',

    footerContactTitle: 'Contact',
    footerLocationTitle: 'Location',

    footerCopyright: '2025 PCNIS Inc. All rights reserved.',
    footerDevelopedBy: 'Developed by',
  },
  fr: {
    headerHomeLink: 'Accueil',

    headerContactLink: 'Contact',
    headerAboutUsLink: 'À propos de nous',
    headerProductsLink: 'Produits',

    heroHeader:
      '<span class="text-primary">Bienvenue</span> sur le site de PCNIS Inc, <br /> où vous <span class="text-primary">apprendrez à mieux nous connaître !</span>',
    heroSubHeadline:
      'Nous fournissons des produits de haute qualité conçus pour améliorer la satisfaction des clients, garantissant sécurité, fiabilité et innovation dans chaque solution.',
    heroCardButton: "Plus d'informations",
    categoriesTitle: 'Notre Sélection',
    categoriesSubtitle:
      'Découvrez notre gamme de produits de haute qualité, conçus pour le confort et le bien-être.',

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

    whyChooseUsHighQualityProductsTitle: 'Produits de haute qualité',
    whyChooseUsHighQualityProductsContent:
      'Soigneusement sélectionnés pour répondre aux normes les plus élevées.',

    whyChooseUsHighExpertiseTitle: 'Expertise & Engagement',
    whyChooseUsHighExpertiseContent:
      'Une équipe dévouée assurant les meilleures solutions pour vos besoins.',

    whyChooseUsHighTrustedTitle: 'Fiable & Digne de confiance',
    whyChooseUsHighTrustedContent:
      'Des produits conçus pour le confort, la sécurité et une utilisation à long terme.',

    whyChooseUsHighCanadaTitle: 'Basé à Québec, Canada',
    whyChooseUsHighCanadaContent: 'Fier de servir nos clients avec excellence et attention.',

    whyChooseUsContentFooter:
      'Choisissez PCNIS Inc. pour des produits qui améliorent le quotidien avec confort et confiance.',

    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Contactez-nous pour toute demande, support ou plus d’informations.',

    contactPhone: 'Numéro de Téléphone',
    contactEmail: 'Adresse E-mail',

    contactButton: 'Contactez-nous',

    footerWelcome: 'Bienvenue chez PCNIS Inc,',
    footerWelcomeText: 'ici vous pourrez mieux nous connaître !',

    footerSocialsTitle: 'Réseaux Sociaux',
    footerQuickLinksTitle: 'Liens Rapides',

    footerContactTitle: 'Contact',
    footerLocationTitle: 'Emplacement',

    footerCopyright: '2025 PCNIS Inc. Tous droits réservés.',
    footerDevelopedBy: 'Développé par',
  },
  br: {
    headerHomeLink: 'Início',
    headerContactLink: 'Contato',
    headerAboutUsLink: 'Sobre nós',
    headerProductsLink: 'Produtos',

    heroHeader:
      '<span class="text-primary">Bem-vindo</span> à PCNIS Inc, <br /> aqui você nos <span class="text-primary">conhecerá melhor!</span>',
    heroSubHeadline:
      'Fornecemos produtos de alta qualidade projetados para aumentar a satisfação do cliente,garantindo segurança, confiabilidade e inovação em cada solução.',
    heroCardButton: 'Mais informações',

    categoriesTitle: 'Nossa Seleção',
    categoriesSubtitle:
      'Explore nossa linha de produtos de alta qualidade, desenvolvidos para conforto e bem-estar.',

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

    whyChooseUsHighQualityProductsTitle: 'Produtos de Alta Qualidade',
    whyChooseUsHighQualityProductsContent:
      'Cuidadosamente selecionados para atender aos mais altos padrões.',

    whyChooseUsHighExpertiseTitle: 'Expertise & Compromisso',
    whyChooseUsHighExpertiseContent:
      'Uma equipe dedicada garantindo as melhores soluções para suas necessidades.',

    whyChooseUsHighTrustedTitle: 'Confiável & Seguro',
    whyChooseUsHighTrustedContent: 'Produtos projetados para conforto, segurança e uso prolongado.',

    whyChooseUsHighCanadaTitle: 'Sediada em Québec, Canadá',
    whyChooseUsHighCanadaContent: 'Atendendo clientes com excelência e dedicação.',

    whyChooseUsContentFooter:
      'Escolha a PCNIS Inc. para produtos que aprimoram o dia a dia com conforto e confiança.',

    contactTitle: 'Entre em Contato',
    contactSubtitle: 'Fale conosco para dúvidas, suporte ou mais informações.',

    contactPhone: 'Número de Telefone',
    contactEmail: 'Endereço de E-mail',

    contactButton: 'Entre em Contato',

    footerWelcome: 'Bem-vindo à PCNIS Inc,',
    footerWelcomeText: 'aqui você poderá nos conhecer melhor!',

    footerSocialsTitle: 'Redes Sociais',
    footerQuickLinksTitle: 'Links Rápidos',

    footerContactTitle: 'Contato',
    footerLocationTitle: 'Localização',

    footerCopyright: '2025 PCNIS Inc. Todos os direitos reservados.',
    footerDevelopedBy: 'Desenvolvido por',
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
