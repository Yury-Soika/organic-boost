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
    'nav.services': 'Services',
    'nav.caseStudies': 'Case Studies',
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
    'services.title': 'Our Services',
    'services.subtitle':
      'Comprehensive ASO and app promotion solutions that deliver real results.',

    // Machine Installs Service
    'services.machineInstalls.title': 'Motivated Machine Installs',
    'services.machineInstalls.subtitle': 'App boosted by real physical devices',
    'services.machineInstalls.feature1': 'App boosted by real physical devices',
    'services.machineInstalls.feature2': 'Each install has a unique IDFA',
    'services.machineInstalls.feature3':
      'Predictable, scalable and cost-efficient',
    'services.machineInstalls.feature4': 'Works with all keywords & locales',

    // ASO Service
    'services.aso.title': 'Complete ASO Support',
    'services.aso.feature1': '🔑 Keyword research & optimization',
    'services.aso.feature2':
      '🖼 App Store listing optimization (texts, icons, screenshots)',
    'services.aso.feature3': '🧪 Conversion rate optimization (CRO)',
    'services.aso.feature4': '📊 Competitor analysis',
    'services.aso.feature5': '🌍 Multi-locale campaigns',
    'services.aso.feature6': '📈 Campaign management for app ranking growth',
    'services.aso.feature7': '🗂 Performance monitoring & reporting',
    'services.learnMore': 'Learn more →',

    // Services Page Additional Translations
    'services.machineInstalls.fullTitle': 'Machine Learning Install Campaigns',
    'services.machineInstalls.fullDesc':
      "Boost your app's ranking with our advanced machine learning algorithms that deliver high-quality installs from real devices.",
    'services.machineInstalls.realDevices.title': 'Real Devices Only',
    'services.machineInstalls.realDevices.desc':
      'All installs come from genuine iOS and Android devices, ensuring authentic user behavior and App Store compliance.',
    'services.machineInstalls.uniqueIds.title': 'Unique Device IDs',
    'services.machineInstalls.uniqueIds.desc':
      "Each install uses a unique device identifier, preventing detection and maintaining your app's organic growth.",
    'services.machineInstalls.predictable.title': 'Predictable Results',
    'services.machineInstalls.predictable.desc':
      'Our ML algorithms provide consistent, predictable ranking improvements with detailed performance analytics.',
    'services.machineInstalls.global.title': 'Global Coverage',
    'services.machineInstalls.global.desc':
      'Target any country or region with our worldwide network of real devices and localized user behavior.',
    'services.machineInstalls.pricing.title': 'Pricing Plans',
    'services.machineInstalls.pricing.volume1': '1,000 - 5,000 installs',
    'services.machineInstalls.pricing.price1': '$0.15 per install',
    'services.machineInstalls.pricing.volume2': '5,000 - 20,000 installs',
    'services.machineInstalls.pricing.price2': '$0.12 per install',
    'services.machineInstalls.pricing.volume3': '20,000+ installs',
    'services.machineInstalls.pricing.price3': '$0.10 per install',
    'services.machineInstalls.pricing.note':
      'Bulk discounts available for large campaigns',
    'services.machineInstalls.getStarted': 'Get Started',

    'services.aso.fullTitle': 'Comprehensive ASO Services',
    'services.aso.fullDesc':
      'Complete App Store optimization including keyword research, listing optimization, conversion rate improvement, and ongoing management.',
    'services.aso.keyword.title': 'Keyword Research & Strategy',
    'services.aso.keyword.desc':
      'In-depth keyword analysis to identify high-volume, low-competition opportunities for maximum visibility.',
    'services.aso.listing.title': 'App Store Listing Optimization',
    'services.aso.listing.desc':
      'Optimize your app title, subtitle, description, and screenshots to improve search rankings and conversion rates.',
    'services.aso.conversion.title': 'Conversion Rate Optimization',
    'services.aso.conversion.desc':
      'A/B test different listing elements to maximize the percentage of visitors who download your app.',
    'services.aso.competitor.title': 'Competitor Analysis',
    'services.aso.competitor.desc':
      'Monitor competitor strategies and identify opportunities to outperform them in search results.',
    'services.aso.multilocale.title': 'Multi-locale Optimization',
    'services.aso.multilocale.desc':
      'Localize your app listing for different countries and languages to capture global markets.',
    'services.aso.management.title': 'Ongoing ASO Management',
    'services.aso.management.desc':
      "Continuous optimization and monitoring to maintain and improve your app's search performance.",
    'services.aso.monitoring.title': 'Performance Monitoring',
    'services.aso.monitoring.desc':
      "Real-time tracking of your app's ranking, downloads, and conversion metrics with detailed reporting.",
    'services.aso.pricing.title': 'ASO Service Pricing',
    'services.aso.pricing.localization': 'Localization (per language)',
    'services.aso.pricing.localization.price': '$500',
    'services.aso.pricing.localization.unit': 'per language',
    'services.aso.pricing.management': 'Monthly Management',
    'services.aso.pricing.management.price': '$1,200',
    'services.aso.pricing.management.unit': 'per month',
    'services.aso.getStarted': 'Get Started',

    'services.howItWorks.title': 'How Our Services Work',
    'services.howItWorks.subtitle':
      "Simple process to boost your app's success",
    'services.howItWorks.step1.title': 'Initial Consultation',
    'services.howItWorks.step1.desc':
      'We analyze your app and discuss your goals to create a customized strategy.',
    'services.howItWorks.step2.title': 'Strategy Development',
    'services.howItWorks.step2.desc':
      'Our team creates a comprehensive plan tailored to your app and target market.',
    'services.howItWorks.step3.title': 'Implementation',
    'services.howItWorks.step3.desc':
      'We execute the optimization strategy and launch install campaigns if needed.',
    'services.howItWorks.step4.title': 'Monitoring & Optimization',
    'services.howItWorks.step4.desc':
      'Continuous tracking and adjustment to maximize results and ROI.',
    'services.howItWorks.step5.title': 'Results & Growth',
    'services.howItWorks.step5.desc':
      'Your app achieves higher rankings, more organic downloads, and increased revenue.',

    'services.benefits.title': 'Why Choose Our Services',
    'services.benefits.subtitle':
      'Proven results and exceptional value for app developers',
    'services.benefits.provenResults.title': 'Proven Results',
    'services.benefits.provenResults.desc':
      'Track record of improving app rankings by 50-300% for our clients.',
    'services.benefits.costEffective.title': 'Cost-Effective',
    'services.benefits.costEffective.desc':
      'Competitive pricing with transparent costs and no hidden fees.',
    'services.benefits.fastSetup.title': 'Fast Setup',
    'services.benefits.fastSetup.desc':
      'Get started within 24 hours with our streamlined onboarding process.',
    'services.benefits.globalReach.title': 'Global Reach',
    'services.benefits.globalReach.desc':
      'Optimize for any market worldwide with our international expertise.',
    'services.benefits.dataDriven.title': 'Data-Driven Approach',
    'services.benefits.dataDriven.desc':
      'All strategies based on real data and performance analytics.',
    'services.benefits.directSupport.title': 'Direct Support',
    'services.benefits.directSupport.desc':
      'Direct communication with our team via Telegram for quick responses.',

    'services.cta.title': 'Ready to Boost Your App?',
    'services.cta.subtitle':
      'Start your journey to higher rankings and more downloads today',

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
    'pricing.plans.growth.feature2': 'Advanced targeting',
    'pricing.plans.growth.feature3': 'Performance reports',
    'pricing.plans.enterprise.volume': '100k+ installs — ask in Telegram',

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
    'pricing.aso.management.feature2': 'Continuous optimization',

    'pricing.faq.title': 'Frequently Asked Questions',
    'pricing.faq.subtitle':
      'Everything you need to know about our pricing and services',
    'pricing.faq.q1.title': "What's included in the install price?",
    'pricing.faq.q1.answer':
      'Each install includes real physical device installation, unique IDFA/AAID, and basic campaign setup. Additional services like ASO optimization and campaign management are priced separately.',
    'pricing.faq.q2.title': 'How do volume discounts work?',
    'pricing.faq.q2.answer':
      'Volume discounts are automatically applied based on your monthly install volume. 0-50k installs cost $0.15 each, 50-100k installs cost $0.12 each, and 100k+ installs have custom pricing.',
    'pricing.faq.q3.title': 'Can I combine services?',
    'pricing.faq.q3.answer':
      'Yes! Many clients use our machine installs together with ASO services for maximum impact. We can create custom packages that combine multiple services at discounted rates.',
    'pricing.faq.q4.title': 'What payment methods do you accept?',
    'pricing.faq.q4.answer':
      'We accept various payment methods including bank transfers, cryptocurrency, and other arrangements. Contact us on Telegram to discuss payment options.',
    'pricing.faq.q5.title': 'Is there a minimum order?',
    'pricing.faq.q5.answer':
      'We recommend starting with at least 1,000 installs to see meaningful results, but we can accommodate smaller orders for testing purposes.',

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
    'pricing.installs.volume2': '50-100k installs — $0.12',
    'pricing.installs.volume3': '100k+ installs — Ask me in Telegram',
    'pricing.installs.note': '*monthly volume or one-time purchase',
    'pricing.aso.title': 'ASO Services',
    'pricing.aso.localization': 'ASO — from $80/meta (localization)',
    'pricing.aso.management': 'Full campaign management — from $450/month',

    // Case Studies Page
    'caseStudies.title': 'Case Studies',
    'caseStudies.subtitle':
      "Real success stories from our clients. See how we've helped apps achieve remarkable growth and top rankings in their categories.",
    'caseStudies.featured.badge': 'Featured Case Study',
    'caseStudies.fitness.title': 'Fitness App: From #50 to #5 in 30 Days',
    'caseStudies.fitness.desc':
      'A fitness tracking app struggling with visibility in a highly competitive market achieved remarkable results through our comprehensive ASO and install strategy.',
    'caseStudies.fitness.stats.installs': 'Increase in organic installs',
    'caseStudies.fitness.stats.ranking': 'Final ranking position',
    'caseStudies.fitness.stats.days': 'Days to achieve results',
    'caseStudies.fitness.stats.cost': 'Cost per install',
    'caseStudies.fitness.challenge.title': 'Challenge:',
    'caseStudies.fitness.challenge.desc':
      'The app was ranked #50 for target keywords in the fitness category, with minimal organic visibility and low conversion rates from paid advertising.',
    'caseStudies.fitness.solution.title': 'Solution:',
    'caseStudies.fitness.solution.item1':
      'Comprehensive keyword research and optimization',
    'caseStudies.fitness.solution.item2':
      'App Store listing optimization (texts, screenshots, icons)',
    'caseStudies.fitness.solution.item3':
      'Machine-motivated install campaign targeting high-value keywords',
    'caseStudies.fitness.solution.item4':
      'Conversion rate optimization for better organic retention',
    'caseStudies.fitness.results.title': 'Results:',
    'caseStudies.fitness.results.item1':
      'Achieved #5 ranking for primary keywords',
    'caseStudies.fitness.results.item2':
      '300% increase in daily organic installs',
    'caseStudies.fitness.results.item3':
      '45% improvement in app store conversion rate',
    'caseStudies.fitness.results.item4': '25% increase in user retention',
    'caseStudies.fitness.readMore': 'Read Full Case Study',
    'caseStudies.performance.title': 'Performance Metrics',
    'caseStudies.performance.before': 'Before',
    'caseStudies.performance.after': 'After',
    'caseStudies.moreStories.title': 'More Success Stories',
    'caseStudies.moreStories.subtitle':
      "Discover how we've helped apps across different categories achieve their growth goals",
    'caseStudies.categories.gaming': 'Gaming App',
    'caseStudies.gaming.title': 'Puzzle Game: 500% Revenue Increase',
    'caseStudies.gaming.desc':
      'A casual puzzle game struggling with discoverability achieved massive growth through targeted install campaigns and ASO optimization.',
    'caseStudies.gaming.revenue': 'Revenue increase',
    'caseStudies.gaming.ranking': 'Top ranking',
    'caseStudies.categories.productivity': 'Productivity App',
    'caseStudies.productivity.title': 'Task Manager: 200% User Growth',
    'caseStudies.productivity.desc':
      'A productivity app targeting busy professionals achieved significant growth through localized ASO and strategic install campaigns.',
    'caseStudies.productivity.growth': 'User growth',
    'caseStudies.productivity.ranking': 'Category rank',
    'caseStudies.categories.ecommerce': 'E-commerce App',
    'caseStudies.ecommerce.title': 'Shopping App: 150% Conversion Boost',
    'caseStudies.ecommerce.desc':
      'An e-commerce app improved its conversion rates and organic visibility through comprehensive ASO and targeted install strategies.',
    'caseStudies.ecommerce.conversion': 'Conversion boost',
    'caseStudies.ecommerce.ranking': 'Shopping rank',
    'caseStudies.categories.education': 'Education App',
    'caseStudies.education.title': 'Language Learning: 400% Downloads',
    'caseStudies.education.desc':
      'A language learning app targeting multiple markets achieved massive growth through localized optimization and strategic install campaigns.',
    'caseStudies.education.downloads': 'Download increase',
    'caseStudies.education.ranking': 'Education rank',
    'caseStudies.readMore': 'Read Case Study →',
    'caseStudies.trackRecord.title': 'Our Track Record',
    'caseStudies.trackRecord.apps': 'Apps Promoted',
    'caseStudies.trackRecord.success': 'Success Rate',
    'caseStudies.trackRecord.installs': 'Installs Generated',
    'caseStudies.trackRecord.growth': 'Average MRR Growth',
    'caseStudies.process.title': 'How We Achieve Results',
    'caseStudies.process.subtitle':
      'Our proven process for delivering consistent, measurable results',
    'caseStudies.process.step1.title': 'Analysis & Strategy',
    'caseStudies.process.step1.desc':
      'We analyze your app, competitors, and market to create a customized growth strategy.',
    'caseStudies.process.step2.title': 'Implementation',
    'caseStudies.process.step2.desc':
      'We execute the strategy with precision, combining ASO optimization and install campaigns.',
    'caseStudies.process.step3.title': 'Optimization',
    'caseStudies.process.step3.desc':
      'We continuously monitor performance and optimize based on real-time data.',
    'caseStudies.process.step4.title': 'Results & Scaling',
    'caseStudies.process.step4.desc':
      'Once we see positive results, we scale successful strategies for maximum impact.',
    'caseStudies.cta.title': 'Ready to join our success stories?',
    'caseStudies.cta.subtitle':
      'Get your free audit and see how we can help your app achieve similar results',
    'caseStudies.cta.audit': 'Get Free Audit',
    'caseStudies.cta.telegram': 'Contact on Telegram',

    // About Page
    'about.title': 'About Organic Boost',
    'about.subtitle':
      'We are not just an ASO agency — we are app owners ourselves. We develop and monetize 15+ of our own mobile apps, so every strategy we use for our clients is tested in real conditions.',
    'about.mission.title': 'Our Mission',
    'about.mission.text1':
      'We believe every app deserves to be discovered. Our mission is to make App Store optimization accessible, effective, and profitable for developers of any size.',
    'about.mission.text2':
      "By combining our own app development experience with cutting-edge ASO techniques, we help clients achieve sustainable organic growth and maximize their app's potential.",
    'about.stats.apps': 'Our own apps with active traffic',
    'about.stats.niches': 'Researched niches',
    'about.stats.countries': 'Countries we work with',
    'about.stats.campaigns': 'Successful campaigns',
    'about.values.title': 'Our Values',
    'about.values.transparency.title': 'Transparency',
    'about.values.transparency.desc':
      'We believe in complete transparency in our processes and results.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.desc':
      'We constantly innovate and adapt to the latest ASO trends.',
    'about.values.results.title': 'Results-Driven',
    'about.values.results.desc':
      'We focus on delivering measurable, sustainable results for our clients.',
    'about.team.title': 'Our Team',
    'about.cta.title': 'Ready to grow your app?',
    'about.cta.subtitle':
      "Let's discuss how we can help your app reach its full potential.",
    'about.cta.button': 'Get Free Consultation',

    // About Page Additional Translations
    'about.whyChoose.title': 'Why Choose Organic Boost?',
    'about.whyChoose.subtitle':
      'We are not just an ASO agency — we are app owners ourselves. We develop and monetize 15+ of our own mobile apps, so every strategy we use for our clients is tested in real conditions.',
    'about.whyChoose.realExperience.title': 'Real App Development Experience',
    'about.whyChoose.realExperience.desc':
      'We own and operate 15+ successful mobile apps, giving us firsthand experience with what works in the App Store.',
    'about.whyChoose.provenStrategies.title': 'Proven Strategies',
    'about.whyChoose.provenStrategies.desc':
      'Every ASO strategy we recommend has been tested and proven successful with our own apps before being applied to client projects.',
    'about.whyChoose.comprehensive.title': 'Comprehensive Approach',
    'about.whyChoose.comprehensive.desc':
      "We don't just optimize keywords — we provide end-to-end ASO solutions including listing optimization, conversion rate optimization, and install campaigns.",
    'about.whyChoose.transparent.title': 'Transparent Results',
    'about.whyChoose.transparent.desc':
      "We provide detailed reporting and analytics so you can see exactly how your app's performance improves over time.",
    'about.whyChoose.global.title': 'Global Reach',
    'about.whyChoose.global.desc':
      'We work with apps targeting markets worldwide, providing localized ASO strategies for maximum impact.',
    'about.whyChoose.support.title': 'Ongoing Support',
    'about.whyChoose.support.desc':
      "Our relationship doesn't end after the initial optimization. We provide continuous monitoring and optimization to maintain your app's success.",
    'about.team.subtitle': 'Meet the experts behind our success stories',
    'about.team.member1.name': 'Alex',
    'about.team.member1.role': 'ASO Specialist & App Developer',
    'about.team.member1.desc':
      '10+ years experience in mobile app development and ASO. Owns 8 successful apps with millions of downloads.',
    'about.team.member2.name': 'Maria',
    'about.team.member2.role': 'Lead ASO Strategist',
    'about.team.member2.desc':
      'Expert in App Store optimization with deep knowledge of keyword research, competitor analysis, and conversion optimization.',
    'about.team.member3.name': 'David',
    'about.team.member3.role': 'Growth Marketing Manager',
    'about.team.member3.desc':
      'Specializes in user acquisition strategies and data-driven optimization to maximize app store visibility and downloads.',

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
    'services.cta.contact': 'Contact us on Telegram — t.me/organic_aso',
    'services.cta.button': 'Get Free Consultation',

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
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.caseStudies': 'Кейсы',
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
    'features.ownApps': '15+ наших собственных приложений',
    'features.ownApps.desc': 'с органическим трафиком',
    'features.price': '$0.15/установка и ниже',
    'features.price.desc': 'самая низкая цена на рынке',
    'features.devices': 'Физические устройства',
    'features.devices.desc': 'уникальные IDFA',
    'features.niches': 'Исследовано 100+ ниш',
    'features.niches.desc': 'комплексные знания',
    'features.locales': 'Работаем со всеми локалями',
    'features.locales.desc': 'глобальный охват',

    // Services
    'services.title': 'Услуги',
    'services.subtitle':
      'Комплексные решения ASO и продвижения приложений, которые дают реальные результаты.',

    // Machine Installs Service
    'services.machineInstalls.title': 'Мотивированные бото-установки',
    'services.machineInstalls.subtitle':
      'Приложение продвигается на реальных физических устройствах',
    'services.machineInstalls.feature1':
      'Приложение продвигается на реальных физических устройствах',
    'services.machineInstalls.feature2': 'Каждая установка с уникальным IDFA',
    'services.machineInstalls.feature3':
      'Предсказуемо, масштабируемо и экономично',
    'services.machineInstalls.feature4':
      'Работает со всеми ключевыми словами и локалями',

    // ASO Service
    'services.aso.title': 'Полная поддержка ASO',
    'services.aso.feature1': '🔑 Исследование и оптимизация ключевых слов',
    'services.aso.feature2':
      '🖼 Оптимизация страницы в App Store (тексты, иконки, скриншоты)',
    'services.aso.feature3': '🧪 Оптимизация конверсии (CRO)',
    'services.aso.feature4': '📊 Анализ конкурентов',
    'services.aso.feature5': '🌍 Мультилокальные кампании',
    'services.aso.feature6':
      '📈 Управление кампаниями для роста рейтинга приложения',
    'services.aso.feature7': '🗂 Мониторинг эффективности и отчетность',
    'services.learnMore': 'Узнать больше →',

    // Services Page Additional Translations
    'services.machineInstalls.fullTitle':
      'Кампании установок с машинным обучением',
    'services.machineInstalls.fullDesc':
      'Повысьте рейтинг вашего приложения с помощью наших продвинутых алгоритмов машинного обучения, которые обеспечивают высококачественные установки с реальных устройств.',
    'services.machineInstalls.realDevices.title': 'Только реальные устройства',
    'services.machineInstalls.realDevices.desc':
      'Все установки происходят с подлинных устройств iOS и Android, обеспечивая аутентичное поведение пользователей и соответствие требованиям App Store.',
    'services.machineInstalls.uniqueIds.title': 'Уникальные ID устройств',
    'services.machineInstalls.uniqueIds.desc':
      'Каждая установка использует уникальный идентификатор устройства, предотвращая обнаружение и поддерживая органический рост вашего приложения.',
    'services.machineInstalls.predictable.title': 'Предсказуемые результаты',
    'services.machineInstalls.predictable.desc':
      'Наши ML алгоритмы обеспечивают стабильные, предсказуемые улучшения рейтинга с детальной аналитикой производительности.',
    'services.machineInstalls.global.title': 'Глобальный охват',
    'services.machineInstalls.global.desc':
      'Таргетируйте любую страну или регион с помощью нашей всемирной сети реальных устройств и локализованного поведения пользователей.',
    'services.machineInstalls.pricing.title': 'Тарифные планы',
    'services.machineInstalls.pricing.volume1': '1,000 - 5,000 установок',
    'services.machineInstalls.pricing.price1': '$0.15 за установку',
    'services.machineInstalls.pricing.volume2': '5,000 - 20,000 установок',
    'services.machineInstalls.pricing.price2': '$0.12 за установку',
    'services.machineInstalls.pricing.volume3': '20,000+ установок',
    'services.machineInstalls.pricing.price3': '$0.10 за установку',
    'services.machineInstalls.pricing.note':
      'Скидки за объем для крупных кампаний',
    'services.machineInstalls.getStarted': 'Начать',

    'services.aso.fullTitle': 'Комплексные ASO услуги',
    'services.aso.fullDesc':
      'Полная оптимизация App Store, включая исследование ключевых слов, оптимизацию страницы, улучшение конверсии и постоянное управление.',
    'services.aso.keyword.title': 'Исследование ключевых слов и стратегия',
    'services.aso.keyword.desc':
      'Глубокий анализ ключевых слов для выявления возможностей с высоким объемом и низкой конкуренцией для максимальной видимости.',
    'services.aso.listing.title': 'Оптимизация страницы в App Store',
    'services.aso.listing.desc':
      'Оптимизируйте название приложения, подзаголовок, описание и скриншоты для улучшения позиций в поиске и конверсии.',
    'services.aso.conversion.title': 'Оптимизация конверсии',
    'services.aso.conversion.desc':
      'A/B тестирование различных элементов страницы для максимизации процента посетителей, которые скачивают ваше приложение.',
    'services.aso.competitor.title': 'Анализ конкурентов',
    'services.aso.competitor.desc':
      'Мониторинг стратегий конкурентов и выявление возможностей превзойти их в результатах поиска.',
    'services.aso.multilocale.title': 'Мультиязычная оптимизация',
    'services.aso.multilocale.desc':
      'Локализация страницы приложения для разных стран и языков для захвата глобальных рынков.',
    'services.aso.management.title': 'Постоянное управление ASO',
    'services.aso.management.desc':
      'Непрерывная оптимизация и мониторинг для поддержания и улучшения поисковой производительности вашего приложения.',
    'services.aso.monitoring.title': 'Мониторинг производительности',
    'services.aso.monitoring.desc':
      'Отслеживание в реальном времени рейтинга, загрузок и метрик конверсии вашего приложения с детальной отчетностью.',
    'services.aso.pricing.title': 'Цены на ASO услуги',
    'services.aso.pricing.localization': 'Локализация (за язык)',
    'services.aso.pricing.localization.price': '$500',
    'services.aso.pricing.localization.unit': 'за язык',
    'services.aso.pricing.management': 'Ежемесячное управление',
    'services.aso.pricing.management.price': '$1,200',
    'services.aso.pricing.management.unit': 'в месяц',
    'services.aso.getStarted': 'Начать',

    'services.howItWorks.title': 'Как работают наши услуги',
    'services.howItWorks.subtitle':
      'Простой процесс для повышения успеха вашего приложения',
    'services.howItWorks.step1.title': 'Первоначальная консультация',
    'services.howItWorks.step1.desc':
      'Мы анализируем ваше приложение и обсуждаем ваши цели для создания индивидуальной стратегии.',
    'services.howItWorks.step2.title': 'Разработка стратегии',
    'services.howItWorks.step2.desc':
      'Наша команда создает комплексный план, адаптированный под ваше приложение и целевой рынок.',
    'services.howItWorks.step3.title': 'Реализация',
    'services.howItWorks.step3.desc':
      'Мы выполняем стратегию оптимизации и запускаем кампании установок при необходимости.',
    'services.howItWorks.step4.title': 'Мониторинг и оптимизация',
    'services.howItWorks.step4.desc':
      'Непрерывное отслеживание и корректировка для максимизации результатов и ROI.',
    'services.howItWorks.step5.title': 'Результаты и рост',
    'services.howItWorks.step5.desc':
      'Ваше приложение достигает более высоких рейтингов, больше органических загрузок и увеличенного дохода.',

    'services.benefits.title': 'Почему выбирают наши услуги',
    'services.benefits.subtitle':
      'Проверенные результаты и исключительная ценность для разработчиков приложений',
    'services.benefits.provenResults.title': 'Проверенные результаты',
    'services.benefits.provenResults.desc':
      'Трек рекорд улучшения рейтингов приложений на 50-300% для наших клиентов.',
    'services.benefits.costEffective.title': 'Экономичность',
    'services.benefits.costEffective.desc':
      'Конкурентные цены с прозрачными затратами и без скрытых комиссий.',
    'services.benefits.fastSetup.title': 'Быстрая настройка',
    'services.benefits.fastSetup.desc':
      'Начните в течение 24 часов с нашим упрощенным процессом подключения.',
    'services.benefits.globalReach.title': 'Глобальный охват',
    'services.benefits.globalReach.desc':
      'Оптимизируйте для любого рынка по всему миру с нашей международной экспертизой.',
    'services.benefits.dataDriven.title': 'Подход на основе данных',
    'services.benefits.dataDriven.desc':
      'Все стратегии основаны на реальных данных и аналитике производительности.',
    'services.benefits.directSupport.title': 'Прямая поддержка',
    'services.benefits.directSupport.desc':
      'Прямое общение с нашей командой через Telegram для быстрых ответов.',

    'services.cta.title': 'Готовы бустить ваше приложение?',
    'services.cta.subtitle':
      'Начните свой путь к более высоким рейтингам и большему количеству загрузок сегодня',

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
    'pricing.plans.growth.feature2': 'Продвинутое таргетирование',
    'pricing.plans.growth.feature3': 'Отчеты о производительности',
    'pricing.plans.enterprise.volume':
      '100k+ установок — спрашивайте в Telegram',

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
    'pricing.aso.management.feature2': 'Непрерывная оптимизация',

    'pricing.faq.title': 'Часто задаваемые вопросы',
    'pricing.faq.subtitle': 'Все, что вам нужно знать о наших ценах и услугах',
    'pricing.faq.q1.title': 'Что включено в цену установки?',
    'pricing.faq.q1.answer':
      'Каждая установка включает установку на реальное физическое устройство, уникальный IDFA/AAID и базовую настройку кампании. Дополнительные услуги, такие как ASO оптимизация и управление кампаниями, оплачиваются отдельно.',
    'pricing.faq.q2.title': 'Как работают скидки за объем?',
    'pricing.faq.q2.answer':
      'Скидки за объем автоматически применяются на основе вашего месячного объема установок. 0-50k установок стоят $0.15 каждая, 50-100k установок стоят $0.12 каждая, а 100k+ установок имеют индивидуальное ценообразование.',
    'pricing.faq.q3.title': 'Могу ли я комбинировать услуги?',
    'pricing.faq.q3.answer':
      'Да! Многие клиенты используют наши машинные установки вместе с ASO услугами для максимального эффекта. Мы можем создать индивидуальные пакеты, которые объединяют несколько услуг по сниженным ценам.',
    'pricing.faq.q4.title': 'Какие способы оплаты вы принимаете?',
    'pricing.faq.q4.answer':
      'Мы принимаем различные способы оплаты, включая банковские переводы, криптовалюту и другие договоренности. Свяжитесь с нами в Telegram, чтобы обсудить варианты оплаты.',
    'pricing.faq.q5.title': 'Есть ли минимальный заказ?',
    'pricing.faq.q5.answer':
      'Мы рекомендуем начинать как минимум с 1,000 установок, чтобы увидеть значимые результаты, но мы можем принять меньшие заказы для тестирования.',

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
    'pricing.installs.volume2': '50–100k установок — $0.12',
    'pricing.installs.volume3': '100k+ установок — спрашивайте в Telegram',
    'pricing.installs.note': '*месячный объем или разовая покупка',
    'pricing.aso.title': 'ASO услуги',
    'pricing.aso.localization': 'ASO — от $80/мета (локализация)',
    'pricing.aso.management': 'Ведение вашей кампании под ключ - от $450/мес',

    // Case Studies Page
    'caseStudies.title': 'Кейсы',
    'caseStudies.subtitle':
      'Реальные истории успеха наших клиентов. Узнайте, как мы помогли приложениям достичь замечательного роста и топовых позиций в их категориях.',
    'caseStudies.featured.badge': 'Рекомендуемый кейс',
    'caseStudies.fitness.title': 'Фитнес-приложение: с #50 до #5 за 30 дней',
    'caseStudies.fitness.desc':
      'Фитнес-приложение для отслеживания, которое боролось с видимостью в высококонкурентном рынке, достигло замечательных результатов благодаря нашей комплексной ASO и установочной стратегии.',
    'caseStudies.fitness.stats.installs': 'Увеличение органических установок',
    'caseStudies.fitness.stats.ranking': 'Финальная позиция в рейтинге',
    'caseStudies.fitness.stats.days': 'Дней для достижения результатов',
    'caseStudies.fitness.stats.cost': 'Стоимость за установку',
    'caseStudies.fitness.challenge.title': 'Задача:',
    'caseStudies.fitness.challenge.desc':
      'Приложение занимало #50 место по целевым ключевым словам в категории фитнеса, с минимальной органической видимостью и низкими конверсиями из платной рекламы.',
    'caseStudies.fitness.solution.title': 'Решение:',
    'caseStudies.fitness.solution.item1':
      'Комплексное исследование и оптимизация ключевых слов',
    'caseStudies.fitness.solution.item2':
      'Оптимизация страницы в App Store (тексты, скриншоты, иконки)',
    'caseStudies.fitness.solution.item3':
      'Кампания мотивированных машинных установок, нацеленная на высокоценные ключевые слова',
    'caseStudies.fitness.solution.item4':
      'Оптимизация конверсии для лучшего органического удержания',
    'caseStudies.fitness.results.title': 'Результаты:',
    'caseStudies.fitness.results.item1':
      'Достигли #5 позиции по основным ключевым словам',
    'caseStudies.fitness.results.item2':
      '300% увеличение ежедневных органических установок',
    'caseStudies.fitness.results.item3': '45% улучшение конверсии в App Store',
    'caseStudies.fitness.results.item4':
      '25% увеличение удержания пользователей',
    'caseStudies.fitness.readMore': 'Читать полный кейс',
    'caseStudies.performance.title': 'Метрики производительности',
    'caseStudies.performance.before': 'До',
    'caseStudies.performance.after': 'После',
    'caseStudies.moreStories.title': 'Больше историй успеха',
    'caseStudies.moreStories.subtitle':
      'Узнайте, как мы помогли приложениям в разных категориях достичь целей роста',
    'caseStudies.categories.gaming': 'Игровое приложение',
    'caseStudies.gaming.title': 'Головоломка: увеличение дохода на 500%',
    'caseStudies.gaming.desc':
      'Казуальная игра-головоломка, испытывающая трудности с обнаружением, достигла огромного роста благодаря целевым кампаниям установок и оптимизации ASO.',
    'caseStudies.gaming.revenue': 'Увеличение дохода',
    'caseStudies.gaming.ranking': 'Топ рейтинг',
    'caseStudies.categories.productivity': 'Приложение для продуктивности',
    'caseStudies.productivity.title':
      'Менеджер задач: рост пользователей на 200%',
    'caseStudies.productivity.desc':
      'Приложение для продуктивности, ориентированное на занятых профессионалов, достигло значительного роста благодаря локализованному ASO и стратегическим кампаниям установок.',
    'caseStudies.productivity.growth': 'Рост пользователей',
    'caseStudies.productivity.ranking': 'Рейтинг категории',
    'caseStudies.categories.ecommerce': 'Приложение электронной коммерции',
    'caseStudies.ecommerce.title':
      'Приложение для покупок: увеличение конверсии на 150%',
    'caseStudies.ecommerce.desc':
      'Приложение электронной коммерции улучшило показатели конверсии и органическую видимость благодаря комплексному ASO и целевым стратегиям установок.',
    'caseStudies.ecommerce.conversion': 'Увеличение конверсии',
    'caseStudies.ecommerce.ranking': 'Рейтинг покупок',
    'caseStudies.categories.education': 'Образовательное приложение',
    'caseStudies.education.title':
      'Изучение языков: увеличение загрузок на 400%',
    'caseStudies.education.desc':
      'Приложение для изучения языков, ориентированное на несколько рынков, достигло огромного роста благодаря локализованной оптимизации и стратегическим кампаниям установок.',
    'caseStudies.education.downloads': 'Увеличение загрузок',
    'caseStudies.education.ranking': 'Рейтинг образования',
    'caseStudies.readMore': 'Читать кейс →',
    'caseStudies.trackRecord.title': 'Наши результаты',
    'caseStudies.trackRecord.apps': 'Продвинутых приложений',
    'caseStudies.trackRecord.success': 'Процент успеха',
    'caseStudies.trackRecord.installs': 'Сгенерированных установок',
    'caseStudies.trackRecord.growth': 'Средний рост MRR',
    'caseStudies.process.title': 'Как мы достигаем результатов',
    'caseStudies.process.subtitle':
      'Наш проверенный процесс для достижения стабильных, измеримых результатов',
    'caseStudies.process.step1.title': 'Анализ и стратегия',
    'caseStudies.process.step1.desc':
      'Мы анализируем ваше приложение, конкурентов и рынок для создания индивидуальной стратегии роста.',
    'caseStudies.process.step2.title': 'Реализация',
    'caseStudies.process.step2.desc':
      'Мы выполняем стратегию с точностью, сочетая оптимизацию ASO и кампании установок.',
    'caseStudies.process.step3.title': 'Оптимизация',
    'caseStudies.process.step3.desc':
      'Мы постоянно отслеживаем производительность и оптимизируем на основе данных в реальном времени.',
    'caseStudies.process.step4.title': 'Результаты и масштабирование',
    'caseStudies.process.step4.desc':
      'Как только мы видим положительные результаты, мы масштабируем успешные стратегии для максимального эффекта.',
    'caseStudies.cta.title': 'Готовы присоединиться к нашим историям успеха?',
    'caseStudies.cta.subtitle':
      'Получите бесплатный аудит и узнайте, как мы можем помочь вашему приложению достичь подобных результатов',
    'caseStudies.cta.audit': 'Получить бесплатный аудит',
    'caseStudies.cta.telegram': 'Связаться в Telegram',

    // About Page
    'about.title': 'О компании Organic Boost',
    'about.subtitle':
      'Мы не просто ASO агентство — мы сами владеем приложениями. Мы развиваем и монетизируем 15+ собственных мобильных приложений, поэтому каждая стратегия, которую мы используем для клиентов, протестирована в реальных условиях.',
    'about.mission.title': 'Наша миссия',
    'about.mission.text1':
      'Мы верим, что каждое приложение заслуживает быть найденным. Наша миссия — сделать оптимизацию App Store доступной, эффективной и прибыльной для разработчиков любого размера.',
    'about.mission.text2':
      'Объединяя наш собственный опыт разработки приложений с передовыми ASO техниками, мы помогаем клиентам достичь устойчивого органического роста и максимизировать потенциал их приложений.',
    'about.stats.apps': 'Наших собственных приложений с активным трафиком',
    'about.stats.niches': 'Исследованных ниш',
    'about.stats.countries': 'Стран, с которыми мы работаем',
    'about.stats.campaigns': 'Успешных кампаний',
    'about.values.title': 'Наши ценности',
    'about.values.transparency.title': 'Прозрачность',
    'about.values.transparency.desc':
      'Мы верим в полную прозрачность наших процессов и результатов.',
    'about.values.innovation.title': 'Инновации',
    'about.values.innovation.desc':
      'Мы постоянно инновации и адаптируемся к последним трендам ASO.',
    'about.values.results.title': 'Ориентация на результат',
    'about.values.results.desc':
      'Мы фокусируемся на предоставлении измеримых, устойчивых результатов для наших клиентов.',
    'about.team.title': 'Наша команда',
    'about.team.desc':
      'Познакомьтесь с экспертами, стоящими за нашими историями успеха.',
    'about.cta.title': 'Готовы развивать ваше приложение?',
    'about.cta.subtitle':
      'Давайте обсудим, как мы можем помочь вашему приложению раскрыть свой потенциал.',
    'about.cta.button': 'Получить бесплатную консультацию',

    // About Page Additional Translations
    'about.whyChoose.title': 'Почему выбирают Organic Boost?',
    'about.whyChoose.subtitle':
      'Мы не просто ASO агентство — мы сами владеем приложениями. Мы развиваем и монетизируем 15+ собственных мобильных приложений, поэтому каждая стратегия, которую мы используем для клиентов, протестирована в реальных условиях.',
    'about.whyChoose.realExperience.title':
      'Реальный опыт разработки приложений',
    'about.whyChoose.realExperience.desc':
      'Мы владеем и управляем 15+ успешными мобильными приложениями, что дает нам непосредственный опыт того, что работает в App Store.',
    'about.whyChoose.provenStrategies.title': 'Проверенные стратегии',
    'about.whyChoose.provenStrategies.desc':
      'Каждая ASO стратегия, которую мы рекомендуем, была протестирована и доказала свою эффективность на наших собственных приложениях перед применением к проектам клиентов.',
    'about.whyChoose.comprehensive.title': 'Комплексный подход',
    'about.whyChoose.comprehensive.desc':
      'Мы не просто оптимизируем ключевые слова — мы предоставляем комплексные ASO решения, включая оптимизацию страницы, оптимизацию конверсии и кампании установок.',
    'about.whyChoose.transparent.title': 'Прозрачные результаты',
    'about.whyChoose.transparent.desc':
      'Мы предоставляем детальную отчетность и аналитику, чтобы вы могли точно видеть, как улучшается производительность вашего приложения со временем.',
    'about.whyChoose.global.title': 'Глобальный охват',
    'about.whyChoose.global.desc':
      'Мы работаем с приложениями, нацеленными на рынки по всему миру, предоставляя локализованные ASO стратегии для максимального эффекта.',
    'about.whyChoose.support.title': 'Постоянная поддержка',
    'about.whyChoose.support.desc':
      'Наши отношения не заканчиваются после первоначальной оптимизации. Мы предоставляем постоянный мониторинг и оптимизацию для поддержания успеха вашего приложения.',
    'about.team.subtitle':
      'Познакомьтесь с экспертами, стоящими за нашими историями успеха',
    'about.team.member1.name': 'Алекс',
    'about.team.member1.role': 'ASO специалист и разработчик приложений',
    'about.team.member1.desc':
      '10+ лет опыта в разработке мобильных приложений и ASO. Владеет 8 успешными приложениями с миллионами загрузок.',
    'about.team.member2.name': 'Мария',
    'about.team.member2.role': 'Ведущий ASO стратег',
    'about.team.member2.desc':
      'Эксперт по оптимизации App Store с глубокими знаниями в исследовании ключевых слов, анализе конкурентов и оптимизации конверсии.',
    'about.team.member3.name': 'Давид',
    'about.team.member3.role': 'Менеджер по росту маркетинга',
    'about.team.member3.desc':
      'Специализируется на стратегиях привлечения пользователей и оптимизации на основе данных для максимизации видимости в App Store и загрузок.',

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
