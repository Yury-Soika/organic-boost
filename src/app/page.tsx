'use client';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './contexts/LanguageContext';
import { useState } from 'react';

export default function HomePage() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id='hero'
          className='pt-32 pb-24 px-6 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden'
        >
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-start'>
              {/* Hero Content */}
              <div className='space-y-12'>
                <div className='space-y-8'>
                  <h1
                    className='text-5xl lg:text-6xl font-bold text-balance'
                    style={{ lineHeight: '1.3' }}
                  >
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
                      <Image
                        src='/hero-dashboard.png'
                        alt='Dashboard Icon'
                        width={400}
                        height={300}
                        className='w-4/5 h-auto object-contain rounded-lg mx-auto mb-4 cursor-pointer hover:opacity-90 transition-opacity'
                        onClick={() => setIsModalOpen(true)}
                      />
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
            </div>

            <div className='grid lg:grid-cols-2 gap-12 items-stretch'>
              {/* Stats - Left Side */}
              <div className='space-y-5 flex flex-col justify-center'>
                <div className='text-2xl font-bold text-primary'>
                  🚀 {t('achievements.stats.installs')}
                </div>
                <div className='text-2xl font-bold text-primary'>
                  📱 {t('achievements.stats.apps')}
                </div>
                <div className='text-2xl font-bold text-primary'>
                  📈 {t('achievements.stats.mrr')}
                </div>
                <div className='text-2xl font-bold text-primary'>
                  🌍 {t('achievements.stats.countries')}
                </div>
                <div className='text-2xl font-bold text-primary'>
                  📈 {t('achievements.stats.campaigns')}
                </div>
                <div className='text-2xl font-bold text-primary'>
                  🕑 {t('achievements.stats.days')}
                </div>
              </div>

              {/* Text Content - Right Side */}
              <div className='flex flex-col justify-center'>
                <div className='bg-primary-50 rounded-xl p-8'>
                  <p className='text-3xl text-text-primary leading-relaxed font-medium'>
                    {t('achievements.subtitle')}
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className='flex flex-wrap justify-between items-center mt-12 text-center w-full'>
              <div className='flex flex-col items-center space-y-3'>
                <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-white'
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
                  <div className='font-semibold text-lg'>
                    {t('features.ownApps')}
                  </div>
                  <div className='text-base text-text-secondary'>
                    {t('features.ownApps.desc')}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-white'
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
                  <div className='font-semibold text-lg'>
                    {t('features.price')}
                  </div>
                  <div className='text-base text-text-secondary'>
                    {t('features.price.desc')}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-white'
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
                  <div className='font-semibold text-lg'>
                    {t('features.devices')}
                  </div>
                  <div className='text-base text-text-secondary'>
                    {t('features.devices.desc')}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-white'
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
                  <div className='font-semibold text-lg'>
                    {t('features.niches')}
                  </div>
                  <div className='text-base text-text-secondary'>
                    {t('features.niches.desc')}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg
                    className='w-5 h-5 text-white'
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
                  <div className='font-semibold text-lg'>
                    {t('features.locales')}
                  </div>
                  <div className='text-base text-text-secondary'>
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

                <div className='bg-primary-50 rounded-lg p-6 mb-6'>
                  <h3 className='font-semibold mb-2'>
                    {t('services.machineInstalls.pricing.title')}
                  </h3>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span>
                        {t('services.machineInstalls.pricing.volume1')}
                      </span>
                      <span className='font-semibold'>
                        {t('services.machineInstalls.pricing.price1')}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span>
                        {t('services.machineInstalls.pricing.volume2')}
                      </span>
                      <span className='font-semibold'>
                        {t('services.machineInstalls.pricing.price2')}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span>
                        {t('services.machineInstalls.pricing.volume3')}
                      </span>
                      <span className='font-semibold'>
                        {t('services.machineInstalls.pricing.price3')}
                      </span>
                    </div>
                    <div className='text-xs text-text-secondary mt-2'>
                      {t('services.machineInstalls.pricing.note')}
                    </div>
                  </div>
                </div>
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
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature1')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature2')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature3')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature4')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature5')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature6')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature7')}</span>
                  </li>
                </ul>

                <div className='bg-secondary-50 rounded-lg p-6 mb-6'>
                  <h3 className='font-semibold mb-2'>
                    {t('services.aso.pricing.title')}
                  </h3>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span>{t('services.aso.pricing.localization')}</span>
                      <span className='font-semibold'>
                        {t('services.aso.pricing.localization.price')}{' '}
                        {t('services.aso.pricing.localization.unit')}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span>{t('services.aso.pricing.management')}</span>
                      <span className='font-semibold'>
                        {t('services.aso.pricing.management.price')}{' '}
                        {t('services.aso.pricing.management.unit')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          onClick={() => setIsModalOpen(false)}
        >
          <div className='relative max-w-6xl max-h-full'>
            <Image
              src='/hero-dashboard.png'
              alt='Dashboard Full Screen'
              width={1200}
              height={800}
              className='w-full h-auto rounded-lg shadow-2xl'
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
