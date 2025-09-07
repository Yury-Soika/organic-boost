'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation data
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.pricing': 'Pricing',
    'nav.knowledgeBase': 'Knowledge Base',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.title': "Boost your app's growth with installs that really work",
    'hero.subtitle':
      'Affordable, predictable and effective ASO & machine-motivated installs for iOS and Android.',
    'hero.cta.telegram': 'Join Telegram',
    'hero.cta.audit': 'Get a free audit',

    // Achievements Section
    'achievements.title': 'Why Choose Organic Boost?',
    'achievements.subtitle':
      'We are not just an ASO agency — we are app owners ourselves. We grow and monetize 15+ of our own mobile apps, so every strategy we use for our clients is tested in real conditions.',
    'achievements.stats.installs': '2M+ Installs generated',
    'achievements.stats.apps': '120+ Apps promoted',
    'achievements.stats.mrr': '35% Average MRR growth',
    'achievements.stats.countries': 'Trusted in 15+ countries',
    'achievements.stats.campaigns':
      '98% campaigns successfully boosted app rankings',
    'achievements.stats.days': 'Ranking growth in just 5–10 days',

    // Features
    'features.ownApps': '15+ of our own apps',
    'features.ownApps.desc': 'with running traffic',
    'features.price': '$0.15/install and lower',
    'features.price.desc': 'lowest market price',
    'features.devices': 'Physical devices',
    'features.devices.desc': 'unique IDFAs',
    'features.niches': '100+ niches researched',
    'features.niches.desc': 'comprehensive knowledge',
    'features.locales': 'Work with all locales',
    'features.locales.desc': 'global reach',

    // Services
    'services.title': 'Services and Prices',

    // Machine Installs Service
    'services.machineInstalls.title': 'Motivated Machine Installs',
    'services.machineInstalls.feature1': 'App boosted by real physical devices',
    'services.machineInstalls.feature2': 'Each install has a unique IDFA',
    'services.machineInstalls.feature3':
      'Predictable, scalable and cost-efficient',
    'services.machineInstalls.feature4': 'Works with all keywords & locales',

    // ASO Service
    'services.aso.title': 'Complete ASO Support',
    'services.aso.feature1': 'Keyword research & optimization',
    'services.aso.feature2':
      'App Store listing optimization (texts, icons, screenshots)',
    'services.aso.feature3': 'Conversion rate optimization (CRO)',
    'services.aso.feature4': 'Competitor analysis',
    'services.aso.feature5': 'Multi-locale campaigns',
    'services.aso.feature6': 'Campaign management for app ranking growth',
    'services.aso.feature7': 'Performance monitoring & reporting',
    'services.learnMore': 'Learn more →',

    'services.machineInstalls.pricing.title': 'Pricing Plans',
    'services.machineInstalls.pricing.volume1': '1 000 - 50 000 installs',
    'services.machineInstalls.pricing.price1': '$0.15 per install',
    'services.machineInstalls.pricing.volume2': '50 000 - 200 000 installs',
    'services.machineInstalls.pricing.price2': '$0.12 per install',
    'services.machineInstalls.pricing.volume3': '200 000+ installs',
    'services.machineInstalls.pricing.price3': '$0.10 per install',
    'services.machineInstalls.pricing.note':
      'Bulk discounts available for large campaigns',
    'services.machineInstalls.getStarted': 'Get Started',

    'services.aso.pricing.title': 'ASO Service Pricing',
    'services.aso.pricing.localization': 'Localization (per language)',
    'services.aso.pricing.localization.price': 'from $80',
    'services.aso.pricing.localization.unit': 'per language',
    'services.aso.pricing.management': 'Monthly Management',
    'services.aso.pricing.management.price': 'from $450',
    'services.aso.pricing.management.unit': 'per month',
    'services.aso.getStarted': 'Get Started',

    // Pricing Page Additional Translations
    'pricing.plans.starter.title': 'Starter',
    'pricing.plans.starter.desc': 'Perfect for small apps and startups',
    'pricing.plans.starter.price': '$0.15',
    'pricing.plans.starter.unit': 'per install',
    'pricing.plans.starter.feature1': '24h campaign launch',
    'pricing.plans.starter.feature2': 'Basic support',

    'pricing.plans.growth.title': 'Growth',
    'pricing.plans.growth.desc': 'Ideal for growing apps',
    'pricing.plans.growth.price': '$0.12',
    'pricing.plans.growth.unit': 'per install',
    'pricing.plans.growth.popular': 'Most Popular',
    'pricing.plans.growth.everything': 'Everything in Starter',
    'pricing.plans.growth.feature1': 'Priority support',
    'pricing.plans.enterprise.volume': '200k+ installs — ask in Telegram',

    'pricing.plans.enterprise.title': 'Enterprise',
    'pricing.plans.enterprise.desc': 'For large-scale campaigns',
    'pricing.plans.enterprise.price': 'Custom',
    'pricing.plans.enterprise.unit': 'pricing',
    'pricing.plans.enterprise.everything': 'Everything in Growth',
    'pricing.plans.enterprise.feature1': 'Dedicated account manager',
    'pricing.plans.enterprise.feature2': 'Custom strategies',
    'pricing.plans.enterprise.feature3': '24/7 priority support',

    'pricing.aso.desc':
      'Additional App Store Optimization services to complement your install campaigns',
    'pricing.aso.localization.title': 'ASO Localization',
    'pricing.aso.localization.price': 'from $80',
    'pricing.aso.localization.unit': 'per meta',
    'pricing.aso.localization.feature1': 'Text and description optimization',
    'pricing.aso.localization.feature2': 'Icon and screenshot optimization',

    'pricing.aso.management.title': 'Campaign Management',
    'pricing.aso.management.price': 'from $450',
    'pricing.aso.management.unit': 'per month',
    'pricing.aso.management.feature1': 'Complete campaign management',

    'pricing.promo.title': 'Special Offer for New Clients',
    'pricing.promo.limited.title': 'Limited Time Offer',
    'pricing.promo.limited.desc':
      'This discount applies to all new clients and can be used on any service or package. Contact us on Telegram to redeem your discount.',

    // Knowledge Base Additional Translations
    'kb.bots.title': 'Bot vs Real Users: Understanding the Difference',
    'kb.bots.intro':
      'Learn why real device installations are crucial for sustainable app growth and how to distinguish between bot traffic and genuine user activity.',
    'kb.bots.quality.title': 'Quality Matters: Why Real Users Trump Bots',
    'kb.bots.quality.content':
      "Real users provide authentic engagement patterns, genuine feedback, and sustainable growth. Bots may temporarily boost numbers but ultimately harm your app's reputation and long-term success.",
    'kb.bots.highQuality.title': 'High-Quality Installations: What to Look For',
    'kb.bots.highQuality.content':
      'Look for installations that come from real devices with unique identifiers, genuine user behavior patterns, and organic discovery methods. These installations contribute to sustainable ranking improvements.',
    'kb.bots.comparison.title': 'Bot vs Real: A Detailed Comparison',
    'kb.bots.comparison.content':
      'Bots provide fake engagement, temporary boosts, and risk of detection. Real users offer authentic interactions, sustainable growth, and compliance with platform policies.',
    'kb.readTime': '5 min read',
    'kb.readMore': 'Read Full Article →',

    'kb.competition.title': 'Market Analysis: Understanding Your Competition',
    'kb.competition.intro':
      "Comprehensive guide to analyzing your app's competitive landscape and developing strategies to outperform your rivals.",
    'kb.competition.economics.title': 'Competitive Economics: Cost vs Value',
    'kb.competition.economics.content':
      'Understanding the economics of app store competition helps you allocate resources effectively and identify opportunities where your app can provide superior value.',
    'kb.competition.keywords.title': 'Keyword Competition Analysis',
    'kb.competition.keywords.content':
      'Analyze keyword difficulty, search volume, and competitor strategies to identify high-opportunity keywords that can drive sustainable organic growth.',
    'kb.competition.approach.title': 'Strategic Approach to Competition',
    'kb.competition.approach.content':
      'Develop a systematic approach to monitoring competitors, identifying gaps in their strategies, and positioning your app to capture market share.',
    'kb.competition.try.title': 'Try Our Competitive Analysis',
    'kb.competition.try.content':
      "Ready to outperform your competition? Get a free competitive analysis and discover opportunities to improve your app's market position.",

    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': "Simple 5-step process to boost your app's ranking",
    'howItWorks.step1.title': 'Contact us on Telegram',
    'howItWorks.step1.desc': 'Start a conversation and share your app details',
    'howItWorks.step2.title': 'We analyze your app and goals',
    'howItWorks.step2.desc':
      'Comprehensive analysis of your current position and objectives',
    'howItWorks.step3.title':
      'Create growth plan and calculate required installs',
    'howItWorks.step3.desc': 'Individual strategy tailored to your needs',
    'howItWorks.step4.title': 'Campaign launches within 24 hours',
    'howItWorks.step4.desc':
      'Quick setup and immediate start of your promotion',
    'howItWorks.step5.title':
      'Your app rises in rankings → you get organic users → you extract profit!',
    'howItWorks.step5.desc': 'Sustainable growth and revenue increase',

    // CTA
    'cta.title': 'Ready to boost your app?',
    'cta.subtitle':
      'Use promo code ORGANIC15 and get -15% on your first order!',
    'cta.telegram': 'Contact on Telegram',
    'cta.audit': 'Get Free Audit',
    'cta.channel':
      'Subscribe to our Telegram channel for latest news — t.me/organic_aso_support',

    // Knowledge Base
    'knowledgeBase.title': 'Learn More About ASO',
    'knowledgeBase.subtitle':
      "Discover strategies, tips, and insights to boost your app's organic growth.",
    'knowledgeBase.cta': 'Visit Knowledge Base',

    // Pricing
    'pricing.title': 'Services and Prices',
    'pricing.subtitle': 'Transparent pricing for predictable growth',
    'pricing.installs.title': 'Machine Installs',
    'pricing.installs.volume1': '0–50k installs — $0.15',
    'pricing.installs.volume2': '50-200k installs — $0.12',
    'pricing.installs.volume3': '200k+ installs — Ask me in Telegram',
    'pricing.installs.note': '*monthly volume or one-time purchase',
    'pricing.aso.title': 'ASO Services',
    'pricing.aso.localization': 'ASO — from $80/meta (localization)',
    'pricing.aso.management': 'Full campaign management — from $450/month',

    // Services Page
    'services.hero.title': 'Our Services',
    'services.hero.subtitle':
      'Comprehensive ASO and app promotion solutions that deliver real results.',
    'services.aso.subtitle': 'Comprehensive App Store optimization',
    'services.aso.desc':
      "From keyword research to listing optimization, we provide end-to-end ASO services to maximize your app's organic visibility.",
    'services.aso.features.title': 'What We Do',
    'services.aso.features.keywords': '🔑 Keyword research & optimization',
    'services.aso.features.listing':
      '🖼 App Store listing optimization (texts, icons, screenshots)',
    'services.aso.features.conversion': '🧪 Conversion rate optimization (CRO)',
    'services.aso.features.competitors': '📊 Competitor analysis',
    'services.aso.features.locales': '🌍 Multi-locale campaigns',
    'services.aso.features.management':
      '📈 Campaign management for app ranking growth',
    'services.aso.features.monitoring': '🗂 Performance monitoring & reporting',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': "Ready to boost your app? Let's discuss your project.",
    'contact.telegram.title': 'Contact on Telegram',
    'contact.telegram.desc':
      'Fastest way to get in touch and start your project.',
    'contact.telegram.button': 'Open Telegram',
    'contact.email.title': 'Email Us',
    'contact.email.desc': 'For detailed proposals and business inquiries.',
    'contact.email.button': 'Send Email',
    'contact.info.title': 'Get in Touch',
    'contact.info.desc':
      "We're here to help you grow your app. Reach out and let's discuss how we can boost your app's performance.",
    'contact.info.telegram': 'Telegram: @organic_aso',
    'contact.info.email': 'Email: hello@organicboost.com',
    'contact.info.response': 'We respond within 2 hours',
    'contact.cta.title': 'Ready to start?',
    'contact.cta.subtitle':
      'Join hundreds of successful apps that trust Organic Boost.',
    'contact.cta.button': 'Start Your Project',

    // Contact Form
    'contact.form.title': 'Get in Touch',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.appName': 'App Name',
    'contact.form.platform': 'Platform',
    'contact.form.message': 'Message',
    'contact.form.budget': 'Budget',
    'contact.form.budget.under500': 'Under $500',
    'contact.form.budget.500to1000': '$500 - $1,000',
    'contact.form.budget.1000to2000': '$1,000 - $2,000',
    'contact.form.budget.over2000': 'Over $2,000',
    'contact.form.promoCode': 'Promo Code',
    'contact.form.promoCodeValue': 'ORGANIC15',
    'contact.form.submit': 'Send Message',

    // Contact Info
    'contact.info.telegram.title': 'Contact on Telegram',
    'contact.info.telegram.desc':
      'Fastest way to get in touch and start your project.',
    'contact.info.telegram.link': 't.me/organic_aso',
    'contact.info.email.title': 'Email Us',
    'contact.info.email.desc': 'For detailed proposals and business inquiries.',
    'contact.info.email.link': 'hello@organicboost.com',
    'contact.info.response.title': 'Quick Response',
    'contact.info.response.desc': 'We respond within 2 hours',
    'contact.info.support.title': '24/7 Support',
    'contact.info.support.desc':
      'Our team is always ready to help you with any questions.',

    // Why Choose Organic Boost
    'whyChoose.title': 'Why Choose Organic Boost?',
    'whyChoose.realExperience': 'Real app development experience',
    'whyChoose.provenStrategies': 'Proven strategies tested on our own apps',
    'whyChoose.lowestPrices': 'Lowest market prices starting at $0.15',
    'whyChoose.support': '24/7 support via Telegram',

    // App Growth Dashboard
    'dashboard.title': 'App Growth Dashboard',
    'dashboard.subtitle': "Real-time tracking of your app's performance",
    'dashboard.installs.label': 'Installs',
    'dashboard.apps.label': 'Apps',
    'dashboard.mrr.label': 'MRR Growth',

    // Footer
    'footer.description':
      'Affordable, predictable and effective machine-motivated installs for iOS and Android.',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.promo': 'Use promo code ORGANIC15 for -15% discount',
    'footer.copyright': '© 2025 Organic Boost. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.company':
      'GEARSEVEN OÜ (17256264), Harju maakond, Kesklinna linnaosa, Vesivärava tn 50-201, 10152, Tallinn, Estonia',
  },
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.pricing': 'Цены',
    'nav.knowledgeBase': 'База знаний',
    'nav.contact': 'Контакты',
    'nav.getStarted': 'Связаться',

    // Hero Section
    'hero.title':
      'Бусти приложение установками, которые действительно работают',
    'hero.subtitle':
      'Доступные, предсказуемые и эффективные мотивированные машинные установки для iOS и Android',
    'hero.cta.telegram': 'Присоединиться к Telegram',
    'hero.cta.audit': 'Получить бесплатный аудит',

    // Achievements Section
    'achievements.title': 'Почему мы',
    'achievements.subtitle':
      'Мы не просто ASO-агентство — мы сами владельцы приложений. Мы растим и монетизируем 15+ собственных мобильных приложений параллельно, поэтому каждая стратегия, которую мы применяем для клиентов, проверена в реальных условиях.',
    'achievements.stats.installs': '2M+ установок сгенерировано',
    'achievements.stats.apps': '120+ приложений прошло через нас',
    'achievements.stats.mrr': '35% средний рост MRR',
    'achievements.stats.countries': 'Доверие в 15+ странах',
    'achievements.stats.campaigns':
      '98% кампаний успешно улучшили позиции приложений',
    'achievements.stats.days': 'Рост рейтинга за 5–10 дней',

    // Features
    'features.ownApps': '15+ наших приложений',
    'features.ownApps.desc': 'с органикой',
    'features.price': '$0.15 и ниже',
    'features.price.desc': 'самая низкая цена',
    'features.devices': 'Физические устройства',
    'features.devices.desc': 'уникальные IDFA',
    'features.niches': 'Исследовано 100+ ниш',
    'features.niches.desc': 'комплексные знания',
    'features.locales': 'Все страны',
    'features.locales.desc': 'глобальный охват',

    // Services
    'services.title': 'Услуги и цены',

    // Machine Installs Service
    'services.machineInstalls.title': 'Мотивированные бото-установки',
    'services.machineInstalls.feature1': 'Реальные физические устройства',
    'services.machineInstalls.feature2': 'Каждая установка с уникальным IDFA',
    'services.machineInstalls.feature3':
      'Предсказуемо, масштабируемо и экономично',
    'services.machineInstalls.feature4':
      'Работает со всеми ключевыми словами и локалями',

    // ASO Service
    'services.aso.title': 'Полная поддержка ASO',
    'services.aso.feature1': 'Исследование и оптимизация ключевых слов',
    'services.aso.feature2':
      'Оптимизация страницы в App Store (тексты, иконки, скриншоты)',
    'services.aso.feature3': 'Оптимизация конверсии (CRO)',
    'services.aso.feature4': 'Анализ конкурентов',
    'services.aso.feature5': 'Мультилокальные кампании',
    'services.aso.feature6':
      'Управление кампаниями для роста рейтинга приложения',
    'services.aso.feature7': 'Мониторинг эффективности и отчетность',
    'services.learnMore': 'Узнать больше →',

    'services.machineInstalls.pricing.title': 'Тарифные планы',
    'services.machineInstalls.pricing.volume1': '1 000 - 50 000 установок',
    'services.machineInstalls.pricing.price1': '$0.15 за установку',
    'services.machineInstalls.pricing.volume2': '50 000 - 200 000 установок',
    'services.machineInstalls.pricing.price2': '$0.12 за установку',
    'services.machineInstalls.pricing.volume3': '200 000+ установок',
    'services.machineInstalls.pricing.price3': '$0.10 за установку',
    'services.machineInstalls.pricing.note':
      'Скидки за объем для крупных кампаний',
    'services.machineInstalls.getStarted': 'Начать',

    'services.aso.pricing.title': 'Цены на ASO услуги',
    'services.aso.pricing.localization': 'Локализация (за язык)',
    'services.aso.pricing.localization.price': 'от $80',
    'services.aso.pricing.localization.unit': 'за язык',
    'services.aso.pricing.management': 'Ежемесячное управление',
    'services.aso.pricing.management.price': 'от $450',
    'services.aso.pricing.management.unit': 'в месяц',
    'services.aso.getStarted': 'Начать',

    // Pricing Page Additional Translations
    'pricing.plans.starter.title': 'Стартовый',
    'pricing.plans.starter.desc':
      'Идеально для небольших приложений и стартапов',
    'pricing.plans.starter.price': '$0.15',
    'pricing.plans.starter.unit': 'за установку',
    'pricing.plans.starter.feature1': 'Запуск кампании за 24 часа',
    'pricing.plans.starter.feature2': 'Базовая поддержка',

    'pricing.plans.growth.title': 'Рост',
    'pricing.plans.growth.desc': 'Идеально для растущих приложений',
    'pricing.plans.growth.price': '$0.12',
    'pricing.plans.growth.unit': 'за установку',
    'pricing.plans.growth.popular': 'Самый популярный',
    'pricing.plans.growth.everything': 'Все из Стартового',
    'pricing.plans.growth.feature1': 'Приоритетная поддержка',
    'pricing.plans.enterprise.volume':
      '200k+ установок — спрашивайте в Telegram',

    'pricing.plans.enterprise.title': 'Корпоративный',
    'pricing.plans.enterprise.desc': 'Для крупномасштабных кампаний',
    'pricing.plans.enterprise.price': 'Индивидуально',
    'pricing.plans.enterprise.unit': 'ценообразование',
    'pricing.plans.enterprise.everything': 'Все из Роста',
    'pricing.plans.enterprise.feature1': 'Персональный менеджер',
    'pricing.plans.enterprise.feature2': 'Индивидуальные стратегии',
    'pricing.plans.enterprise.feature3': 'Поддержка 24/7',

    'pricing.aso.desc':
      'Дополнительные услуги оптимизации App Store для дополнения ваших кампаний установок',
    'pricing.aso.localization.title': 'ASO Локализация',
    'pricing.aso.localization.price': 'от $80',
    'pricing.aso.localization.unit': 'за мета',
    'pricing.aso.localization.feature1': 'Оптимизация текста и описания',
    'pricing.aso.localization.feature2': 'Оптимизация иконки и скриншотов',

    'pricing.aso.management.title': 'Управление кампаниями',
    'pricing.aso.management.price': 'от $450',
    'pricing.aso.management.unit': 'в месяц',
    'pricing.aso.management.feature1': 'Полное управление кампаниями',

    'pricing.promo.title': 'Специальное предложение для новых клиентов',
    'pricing.promo.limited.title': 'Ограниченное по времени предложение',
    'pricing.promo.limited.desc':
      'Эта скидка применяется ко всем новым клиентам и может быть использована на любую услугу или пакет. Свяжитесь с нами в Telegram, чтобы получить скидку.',

    // Knowledge Base Additional Translations
    // Knowledge Base Additional Translations
    'kb.bots.title': 'Боты vs Реальные пользователи: Понимание разницы',
    'kb.bots.intro':
      'Узнайте, почему установки на реальные устройства критически важны для устойчивого роста приложения и как отличить трафик ботов от подлинной активности пользователей.',
    'kb.bots.quality.title':
      'Качество имеет значение: Почему реальные пользователи лучше ботов',
    'kb.bots.quality.content':
      'Реальные пользователи обеспечивают аутентичные паттерны взаимодействия, подлинную обратную связь и устойчивый рост. Боты могут временно увеличить цифры, но в конечном итоге вредят репутации вашего приложения и долгосрочному успеху.',
    'kb.bots.highQuality.title':
      'Высококачественные установки: На что обращать внимание',
    'kb.bots.highQuality.content':
      'Ищите установки, которые происходят с реальных устройств с уникальными идентификаторами, подлинными паттернами поведения пользователей и органическими методами обнаружения. Эти установки способствуют устойчивому улучшению рейтинга.',
    'kb.bots.comparison.title': 'Боты vs Реальные: Детальное сравнение',
    'kb.bots.comparison.content':
      'Боты обеспечивают фальшивое взаимодействие, временные подъемы и риск обнаружения. Реальные пользователи предлагают аутентичные взаимодействия, устойчивый рост и соответствие политикам платформы.',
    'kb.readTime': '5 мин чтения',
    'kb.readMore': 'Читать полную статью →',

    'kb.competition.title': 'Анализ рынка: Понимание вашей конкуренции',
    'kb.competition.intro':
      'Комплексное руководство по анализу конкурентного ландшафта вашего приложения и разработке стратегий для превосходства над конкурентами.',
    'kb.competition.economics.title':
      'Конкурентная экономика: Стоимость vs Ценность',
    'kb.competition.economics.content':
      'Понимание экономики конкуренции в App Store помогает эффективно распределять ресурсы и выявлять возможности, где ваше приложение может обеспечить превосходную ценность.',
    'kb.competition.keywords.title': 'Анализ конкуренции по ключевым словам',
    'kb.competition.keywords.content':
      'Анализируйте сложность ключевых слов, объем поиска и стратегии конкурентов, чтобы выявлять ключевые слова с высокими возможностями, которые могут обеспечить устойчивый органический рост.',
    'kb.competition.approach.title': 'Стратегический подход к конкуренции',
    'kb.competition.approach.content':
      'Разработайте систематический подход к мониторингу конкурентов, выявлению пробелов в их стратегиях и позиционированию вашего приложения для захвата доли рынка.',
    'kb.competition.try.title': 'Попробуйте наш анализ конкуренции',
    'kb.competition.try.content':
      'Готовы превзойти ваших конкурентов? Получите бесплатный анализ конкуренции и откройте возможности для улучшения рыночной позиции вашего приложения.',
    // How It Works
    'howItWorks.title': 'Как это работает',
    'howItWorks.subtitle':
      'Простой 5-шаговый процесс для повышения рейтинга вашего приложения',
    'howItWorks.step1.title': 'Вы связываетесь с нами в Telegram',
    'howItWorks.step1.desc':
      'Начните разговор и поделитесь деталями вашего приложения',
    'howItWorks.step2.title': 'Мы анализируем ваше приложение и цели',
    'howItWorks.step2.desc': 'Комплексный анализ вашей текущей позиции и целей',
    'howItWorks.step3.title':
      'Создаем план роста и рассчитываем необходимое количество установок',
    'howItWorks.step3.desc':
      'Индивидуальная стратегия, адаптированная под ваши потребности',
    'howItWorks.step4.title': 'Кампания запускается в течение 24 часов',
    'howItWorks.step4.desc':
      'Быстрая настройка и немедленный старт вашего продвижения',
    'howItWorks.step5.title':
      'Ваше приложение поднимается в рейтингах → вы получаете органических пользователей → извлекаете прибыль!',
    'howItWorks.step5.desc': 'Устойчивый рост и увеличение доходов',

    // CTA
    'cta.title': 'Готовы бустить ваше приложение?',
    'cta.subtitle':
      'Используйте промокод ORGANIC15 и получите -15% на первый заказ!',
    'cta.telegram': 'Связаться в Telegram',
    'cta.audit': 'Получить бесплатный аудит',
    'cta.channel':
      'Подписывайтесь на наш Telegram-канал, чтобы получать последние новости — t.me/organic_aso_support',

    // Knowledge Base
    'knowledgeBase.title': 'Узнайте больше об ASO',
    'knowledgeBase.subtitle':
      'Откройте стратегии, советы и идеи для повышения органического роста вашего приложения.',
    'knowledgeBase.cta': 'Посетить базу знаний',

    // Pricing
    'pricing.title': 'Услуги и цены',
    'pricing.subtitle': 'Прозрачное ценообразование для предсказуемого роста',
    'pricing.installs.title': 'Машинные установки',
    'pricing.installs.volume1': '0–50k установок — $0.15',
    'pricing.installs.volume2': '50–200k установок — $0.12',
    'pricing.installs.volume3': '200k+ установок — спрашивайте в Telegram',
    'pricing.installs.note': '*месячный объем или разовая покупка',
    'pricing.aso.title': 'ASO услуги',
    'pricing.aso.localization': 'ASO — от $80/мета (локализация)',
    'pricing.aso.management': 'Ведение вашей кампании под ключ - от $450/мес',

    // Contact Page
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle':
      'Готовы бустить ваше приложение? Давайте обсудим ваш проект.',
    'contact.telegram.title': 'Связаться в Telegram',
    'contact.telegram.desc':
      'Самый быстрый способ связаться и начать ваш проект.',
    'contact.telegram.button': 'Открыть Telegram',
    'contact.email.title': 'Напишите нам',
    'contact.email.desc': 'Для детальных предложений и деловых запросов.',
    'contact.email.button': 'Отправить email',
    'contact.info.title': 'Свяжитесь с нами',
    'contact.info.desc':
      'Мы здесь, чтобы помочь вам развивать ваше приложение. Обратитесь к нам, и давайте обсудим, как мы можем улучшить производительность вашего приложения.',
    'contact.info.telegram': 'Telegram: @organic_aso',
    'contact.info.email': 'Email: hello@organicboost.com',
    'contact.info.response': 'Мы отвечаем в течение 2 часов',
    'contact.cta.title': 'Готовы начать?',
    'contact.cta.subtitle':
      'Присоединяйтесь к сотням успешных приложений, которые доверяют Organic Boost.',
    'contact.cta.button': 'Начать проект',

    // Contact Form
    'contact.form.title': 'Свяжитесь с нами',
    'contact.form.name': 'Имя *',
    'contact.form.email': 'Email *',
    'contact.form.appName': 'Название приложения',
    'contact.form.platform': 'Платформа',
    'contact.form.message': 'Сообщение',
    'contact.form.budget': 'Бюджет',
    'contact.form.budget.under500': 'До $500',
    'contact.form.budget.500to1000': '$500 - $1,000',
    'contact.form.budget.1000to2000': '$1,000 - $2,000',
    'contact.form.budget.over2000': 'Свыше $2,000',
    'contact.form.promoCode': 'Промокод',
    'contact.form.promoCodeValue': 'ORGANIC15',
    'contact.form.submit': 'Отправить сообщение',

    // Contact Info
    'contact.info.telegram.title': 'Связаться в Telegram',
    'contact.info.telegram.desc':
      'Самый быстрый способ связаться и начать ваш проект.',
    'contact.info.telegram.link': 't.me/organic_aso',
    'contact.info.email.title': 'Напишите нам',
    'contact.info.email.desc': 'Для детальных предложений и деловых запросов.',
    'contact.info.email.link': 'hello@organicboost.com',
    'contact.info.response.title': 'Быстрый ответ',
    'contact.info.response.desc': 'Мы отвечаем в течение 2 часов',
    'contact.info.support.title': 'Поддержка 24/7',
    'contact.info.support.desc':
      'Наша команда всегда готова помочь вам с любыми вопросами.',

    // Why Choose Organic Boost
    'whyChoose.title': 'Почему выбирают Organic Boost?',
    'whyChoose.realExperience': 'Реальный опыт разработки приложений',
    'whyChoose.provenStrategies':
      'Проверенные стратегии, протестированные на наших собственных приложениях',
    'whyChoose.lowestPrices': 'Самые низкие рыночные цены от $0.15',
    'whyChoose.support': 'Поддержка 24/7 через Telegram',

    'dashboard.title': 'Панель роста приложений',
    'dashboard.subtitle':
      'Отслеживание производительности вашего приложения в реальном времени',
    'dashboard.installs.label': 'Установки',
    'dashboard.apps.label': 'Приложения',
    'dashboard.mrr.label': 'Рост MRR',

    // Footer
    'footer.description':
      'Доступные, предсказуемые и эффективные мотивированные машинные установки для iOS и Android.',
    'footer.services': 'Услуги',
    'footer.resources': 'Ресурсы',
    'footer.contact': 'Контакты',
    'footer.promo': 'Используйте промокод ORGANIC15 для скидки -15%',
    'footer.copyright': '© 2025 Organic Boost. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.company':
      'GEARSEVEN OÜ (17256264), Harju maakond, Kesklinna linnaosa, Vesivärava tn 50-201, 10152, Таллин, Эстония',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
