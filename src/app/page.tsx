'use client';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import { useLanguage } from './contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id='hero'
          className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden'
        >
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Hero Content */}
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <h1 className='text-5xl lg:text-6xl font-bold text-balance leading-tight'>
                    {t('hero.title')}
                  </h1>
                  <p className='text-xl text-text-secondary leading-relaxed'>
                    {t('hero.subtitle')}
                  </p>
                </div>

                {/* Hero CTAs */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    href='https://t.me/organic_aso'
                    className='btn-primary text-center'
                  >
                    {t('hero.cta.telegram')}
                    <svg
                      className='inline-block w-5 h-5 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </Link>
                  <Link href='/contact' className='btn-secondary text-center'>
                    {t('hero.cta.audit')}
                    <svg
                      className='inline-block w-5 h-5 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Hero Visualization */}
              <div className='relative'>
                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-prominent'>
                  <div className='space-y-6'>
                    {/* App Growth Dashboard Mockup */}
                    <div className='text-center'>
                      <div className='w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4'>
                        <svg
                          className='w-8 h-8 text-white'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
                        </svg>
                      </div>
                      <h3 className='text-lg font-semibold mb-2'>
                        {t('dashboard.title')}
                      </h3>
                      <p className='text-sm text-text-secondary'>
                        {t('dashboard.subtitle')}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 text-center'>
                      <div>
                        <div className='text-2xl font-bold text-primary'>
                          2M+
                        </div>
                        <div className='text-xs text-text-secondary'>
                          {t('dashboard.installs.label')}
                        </div>
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-primary'>
                          120+
                        </div>
                        <div className='text-xs text-text-secondary'>
                          {t('dashboard.apps.label')}
                        </div>
                      </div>
                      <div>
                        <div className='text-2xl font-bold text-primary'>
                          35%
                        </div>
                        <div className='text-xs text-text-secondary'>
                          {t('dashboard.mrr.label')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold mb-4'>
                {t('achievements.title')}
              </h2>
              <p className='text-xl text-text-secondary max-w-3xl mx-auto'>
                {t('achievements.subtitle')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  🚀 {t('achievements.stats.installs')}
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  {t('achievements.stats.apps')}
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  📈 {t('achievements.stats.mrr')}
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  🌍 {t('achievements.stats.countries')}
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  📈 {t('achievements.stats.campaigns')}
                </div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>
                  🕑 {t('achievements.stats.days')}
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold'>{t('features.ownApps')}</div>
                  <div className='text-sm text-text-secondary'>
                    {t('features.ownApps.desc')}
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold'>{t('features.price')}</div>
                  <div className='text-sm text-text-secondary'>
                    {t('features.price.desc')}
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold'>{t('features.devices')}</div>
                  <div className='text-sm text-text-secondary'>
                    {t('features.devices.desc')}
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold'>{t('features.niches')}</div>
                  <div className='text-sm text-text-secondary'>
                    {t('features.niches.desc')}
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <div className='w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-4 h-4 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <div className='font-semibold'>{t('features.locales')}</div>
                  <div className='text-sm text-text-secondary'>
                    {t('features.locales.desc')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-4'>{t('services.title')}</h2>
              <p className='text-xl text-text-secondary max-w-3xl mx-auto'>
                {t('services.subtitle')}
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Service 1 */}
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('services.machineInstalls.title')}
                </h3>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.machineInstalls.feature1')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.machineInstalls.feature2')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.machineInstalls.feature3')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.machineInstalls.feature4')}</span>
                  </li>
                </ul>
                <Link
                  href='/services'
                  className='text-primary hover:text-primary-700 font-medium'
                >
                  {t('services.learnMore')} →
                </Link>
              </div>

              {/* Service 2 */}
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-secondary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('services.aso.title')}
                </h3>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>🔑</span>
                    <span>{t('services.aso.feature1')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>🖼</span>
                    <span>{t('services.aso.feature2')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>🧪</span>
                    <span>{t('services.aso.feature3')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>📊</span>
                    <span>{t('services.aso.feature4')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>🌍</span>
                    <span>{t('services.aso.feature5')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>📈</span>
                    <span>{t('services.aso.feature6')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <span className='text-secondary'>🗂</span>
                    <span>{t('services.aso.feature7')}</span>
                  </li>
                </ul>
                <Link
                  href='/services'
                  className='text-primary hover:text-primary-700 font-medium'
                >
                  {t('services.learnMore')} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base CTA */}
        <section className='py-16 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              {t('knowledgeBase.title')}
            </h2>
            <p className='text-xl text-text-secondary mb-8'>
              {t('knowledgeBase.subtitle')}
            </p>
            <Link href='/knowledge-base' className='btn-primary'>
              {t('knowledgeBase.cta')}
              <svg
                className='inline-block w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold mb-4'>
                {t('howItWorks.title')}
              </h2>
              <p className='text-xl text-text-secondary'>
                {t('howItWorks.subtitle')}
              </p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  step: '1',
                  title: t('howItWorks.step1.title'),
                  description: t('howItWorks.step1.desc'),
                },
                {
                  step: '2',
                  title: t('howItWorks.step2.title'),
                  description: t('howItWorks.step2.desc'),
                },
                {
                  step: '3',
                  title: t('howItWorks.step3.title'),
                  description: t('howItWorks.step3.desc'),
                },
                {
                  step: '4',
                  title: t('howItWorks.step4.title'),
                  description: t('howItWorks.step4.desc'),
                },
                {
                  step: '5',
                  title: t('howItWorks.step5.title'),
                  description: t('howItWorks.step5.desc'),
                },
              ].map((item, index) => (
                <div key={index} className='flex items-start space-x-6'>
                  <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-lg'>
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                    <p className='text-text-secondary'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 px-6 bg-primary text-white'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-4'>{t('cta.title')}</h2>
            <p className='text-xl mb-8 opacity-90'>{t('cta.subtitle')}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='https://t.me/organic_aso'
                className='bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                {t('cta.telegram')}
              </Link>
              <Link
                href='/contact'
                className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors'
              >
                {t('cta.audit')}
              </Link>
            </div>
            <div className='mt-8 text-sm opacity-80'>
              <p>{t('cta.channel')}</p>
              <a
                href='https://t.me/organic_aso_support'
                className='underline hover:no-underline'
              >
                t.me/organic_aso_support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
