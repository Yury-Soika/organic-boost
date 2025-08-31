'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-6'>
              {t('services.title')}
            </h1>
            <p className='text-xl text-text-secondary max-w-3xl mx-auto mb-8'>
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Service 1: Motivated Machine Installs */}
              <div className='bg-white rounded-xl p-8 shadow-prominent'>
                <div className='w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-primary'
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
                <h2 className='text-3xl font-bold mb-4'>
                  {t('services.machineInstalls.fullTitle')}
                </h2>
                <p className='text-lg text-text-secondary mb-6'>
                  {t('services.machineInstalls.fullDesc')}
                </p>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.machineInstalls.realDevices.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.machineInstalls.realDevices.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.machineInstalls.uniqueIds.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.machineInstalls.uniqueIds.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.machineInstalls.predictable.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.machineInstalls.predictable.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.machineInstalls.global.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.machineInstalls.global.desc')}
                      </p>
                    </div>
                  </div>
                </div>

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

                <Link
                  href='/contact'
                  className='btn-primary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>

              {/* Service 2: Complete ASO Support */}
              <div className='bg-white rounded-xl p-8 shadow-prominent'>
                <div className='w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mb-6'>
                  <svg
                    className='w-8 h-8 text-secondary'
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
                <h2 className='text-3xl font-bold mb-4'>
                  {t('services.aso.fullTitle')}
                </h2>
                <p className='text-lg text-text-secondary mb-6'>
                  {t('services.aso.fullDesc')}
                </p>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.keyword.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.keyword.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.listing.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.listing.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.conversion.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.conversion.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.competitor.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.competitor.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.multilocale.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.multilocale.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.management.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.management.desc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('services.aso.monitoring.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('services.aso.monitoring.desc')}
                      </p>
                    </div>
                  </div>
                </div>

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

                <Link
                  href='/contact'
                  className='btn-secondary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('services.howItWorks.title')}
              </h2>
              <p className='text-xl text-text-secondary'>
                {t('services.howItWorks.subtitle')}
              </p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  step: '1',
                  title: t('services.howItWorks.step1.title'),
                  description: t('services.howItWorks.step1.desc'),
                },
                {
                  step: '2',
                  title: t('services.howItWorks.step2.title'),
                  description: t('services.howItWorks.step2.desc'),
                },
                {
                  step: '3',
                  title: t('services.howItWorks.step3.title'),
                  description: t('services.howItWorks.step3.desc'),
                },
                {
                  step: '4',
                  title: t('services.howItWorks.step4.title'),
                  description: t('services.howItWorks.step4.desc'),
                },
                {
                  step: '5',
                  title: t('services.howItWorks.step5.title'),
                  description: t('services.howItWorks.step5.desc'),
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

        {/* Benefits Section */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('services.benefits.title')}
              </h2>
              <p className='text-xl text-text-secondary max-w-3xl mx-auto'>
                {t('services.benefits.subtitle')}
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-primary'
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
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('services.benefits.provenResults.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('services.benefits.provenResults.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-secondary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('services.benefits.costEffective.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('services.benefits.costEffective.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-accent'
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
                <h3 className='text-xl font-semibold mb-3'>
                  {t('services.benefits.fastSetup.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('services.benefits.fastSetup.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-primary'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('services.benefits.globalReach.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('services.benefits.globalReach.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-secondary'
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
                <h3 className='text-xl font-semibold mb-3'>
                  {t('services.benefits.dataDriven.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('services.benefits.dataDriven.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('services.benefits.directSupport.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('services.benefits.directSupport.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 px-6 bg-primary text-white'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              {t('services.cta.title')}
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              {t('services.cta.subtitle')}
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
