'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-6'>
              <span className='text-primary'>{t('pricing.title')}</span>
            </h1>
            <p className='text-xl text-text-secondary max-w-3xl mx-auto mb-8'>
              {t('pricing.subtitle')}
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-3 gap-8'>
              {/* Plan 1: Starter */}
              <div className='bg-white rounded-xl p-8 shadow-subtle border border-border'>
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold mb-2'>
                    {t('pricing.plans.starter.title')}
                  </h3>
                  <p className='text-text-secondary mb-4'>
                    {t('pricing.plans.starter.desc')}
                  </p>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    {t('pricing.plans.starter.price')}
                  </div>
                  <div className='text-text-secondary'>
                    {t('pricing.plans.starter.unit')}
                  </div>
                </div>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.installs.volume1')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('services.machineInstalls.feature1')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('services.machineInstalls.feature2')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.starter.feature1')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.starter.feature2')}</span>
                  </div>
                </div>

                <Link
                  href='/contact'
                  className='btn-primary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>

              {/* Plan 2: Growth */}
              <div className='bg-white rounded-xl p-8 shadow-prominent border-2 border-primary relative'>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold'>
                    {t('pricing.plans.growth.popular')}
                  </span>
                </div>
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold mb-2'>
                    {t('pricing.plans.growth.title')}
                  </h3>
                  <p className='text-text-secondary mb-4'>
                    {t('pricing.plans.growth.desc')}
                  </p>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    {t('pricing.plans.growth.price')}
                  </div>
                  <div className='text-text-secondary'>
                    {t('pricing.plans.growth.unit')}
                  </div>
                </div>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.installs.volume2')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.growth.everything')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.growth.feature1')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.growth.feature2')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.growth.feature3')}</span>
                  </div>
                </div>

                <Link
                  href='/contact'
                  className='btn-primary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>

              {/* Plan 3: Enterprise */}
              <div className='bg-white rounded-xl p-8 shadow-subtle border border-border'>
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold mb-2'>
                    {t('pricing.plans.enterprise.title')}
                  </h3>
                  <p className='text-text-secondary mb-4'>
                    {t('pricing.plans.enterprise.desc')}
                  </p>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    {t('pricing.plans.enterprise.price')}
                  </div>
                  <div className='text-text-secondary'>
                    {t('pricing.plans.enterprise.unit')}
                  </div>
                </div>

                <div className='space-y-4 mb-8'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.installs.volume3')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.enterprise.everything')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.enterprise.feature1')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.enterprise.feature2')}</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 bg-primary rounded-full flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-white'
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
                    <span>{t('pricing.plans.enterprise.feature3')}</span>
                  </div>
                </div>

                <Link
                  href='https://t.me/organic_aso'
                  className='btn-secondary w-full justify-center'
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ASO Services Pricing */}
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('pricing.aso.title')}
              </h2>
              <p className='text-xl text-text-secondary'>
                {t('pricing.aso.desc')}
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='text-center mb-6'>
                  <h3 className='text-2xl font-bold mb-2'>
                    {t('pricing.aso.localization.title')}
                  </h3>
                  <div className='text-3xl font-bold text-primary'>
                    {t('pricing.aso.localization.price')}
                  </div>
                  <div className='text-text-secondary'>
                    {t('pricing.aso.localization.unit')}
                  </div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature1')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature2')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('pricing.aso.localization.feature1')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('pricing.aso.localization.feature2')}</span>
                  </li>
                </ul>
                <Link
                  href='/contact'
                  className='btn-primary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>

              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='text-center mb-6'>
                  <h3 className='text-2xl font-bold mb-2'>
                    Campaign Management
                  </h3>
                  <div className='text-3xl font-bold text-primary'>
                    from $450
                  </div>
                  <div className='text-text-secondary'>per month</div>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>Complete campaign management</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature7')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>{t('services.aso.feature4')}</span>
                  </li>
                  <li className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <span>Continuous optimization</span>
                  </li>
                </ul>
                <Link
                  href='/contact'
                  className='btn-primary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('pricing.faq.title')}
              </h2>
              <p className='text-xl text-text-secondary'>
                {t('pricing.faq.subtitle')}
              </p>
            </div>

            <div className='space-y-6'>
              <div className='bg-white rounded-lg p-6 shadow-subtle'>
                <h3 className='text-lg font-semibold mb-2'>
                  {t('pricing.faq.q1.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('pricing.faq.q1.answer')}
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-subtle'>
                <h3 className='text-lg font-semibold mb-2'>
                  {t('pricing.faq.q2.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('pricing.faq.q2.answer')}
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-subtle'>
                <h3 className='text-lg font-semibold mb-2'>
                  {t('pricing.faq.q3.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('pricing.faq.q3.answer')}
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-subtle'>
                <h3 className='text-lg font-semibold mb-2'>
                  {t('pricing.faq.q4.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('pricing.faq.q4.answer')}
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-subtle'>
                <h3 className='text-lg font-semibold mb-2'>
                  {t('pricing.faq.q5.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('pricing.faq.q5.answer')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className='py-16 px-6 bg-primary text-white'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              {t('pricing.promo.title')}
            </h2>
            <p className='text-xl mb-6 opacity-90'>{t('cta.subtitle')}</p>
            <div className='bg-white/10 rounded-lg p-6 mb-8'>
              <h3 className='text-lg font-semibold mb-2'>
                {t('pricing.promo.limited.title')}
              </h3>
              <p className='opacity-90'>{t('pricing.promo.limited.desc')}</p>
            </div>
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
