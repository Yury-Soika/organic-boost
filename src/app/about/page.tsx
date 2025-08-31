'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-6'>
              {t('about.title')}
            </h1>
            <p className='text-xl text-text-secondary max-w-3xl mx-auto mb-8'>
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className='py-16 px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl font-bold mb-6'>
                  {t('about.mission.title')}
                </h2>
                <p className='text-lg text-text-secondary leading-relaxed mb-6'>
                  {t('about.mission.text1')}
                </p>
                <p className='text-lg text-text-secondary leading-relaxed'>
                  {t('about.mission.text2')}
                </p>
              </div>
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='space-y-6'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>
                      15+
                    </div>
                    <div className='text-text-secondary'>
                      {t('about.stats.apps')}
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>
                      100+
                    </div>
                    <div className='text-text-secondary'>
                      {t('about.stats.niches')}
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>
                      $0.15
                    </div>
                    <div className='text-text-secondary'>
                      {t('about.stats.price')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('about.whyChoose.title')}
              </h2>
              <p className='text-xl text-text-secondary max-w-3xl mx-auto'>
                {t('about.whyChoose.subtitle')}
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('about.whyChoose.realExperience.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('about.whyChoose.realExperience.desc')}
                </p>
              </div>

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
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('about.whyChoose.provenStrategies.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('about.whyChoose.provenStrategies.desc')}
                </p>
              </div>

              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('about.whyChoose.comprehensive.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('about.whyChoose.comprehensive.desc')}
                </p>
              </div>

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
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('about.whyChoose.transparent.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('about.whyChoose.transparent.desc')}
                </p>
              </div>

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
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('about.whyChoose.global.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('about.whyChoose.global.desc')}
                </p>
              </div>

              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-3'>
                  {t('about.whyChoose.support.title')}
                </h3>
                <p className='text-text-secondary'>
                  {t('about.whyChoose.support.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              {t('about.team.title')}
            </h2>
            <p className='text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto'>
              {t('about.team.subtitle')}
            </p>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary font-bold text-2xl'>A</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  {t('about.team.member1.name')}
                </h3>
                <p className='text-text-secondary mb-2'>
                  {t('about.team.member1.role')}
                </p>
                <p className='text-sm text-text-secondary'>
                  {t('about.team.member1.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-secondary font-bold text-2xl'>M</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  {t('about.team.member2.name')}
                </h3>
                <p className='text-text-secondary mb-2'>
                  {t('about.team.member2.role')}
                </p>
                <p className='text-sm text-text-secondary'>
                  {t('about.team.member2.desc')}
                </p>
              </div>

              <div className='text-center'>
                <div className='w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-accent font-bold text-2xl'>D</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  {t('about.team.member3.name')}
                </h3>
                <p className='text-text-secondary mb-2'>
                  {t('about.team.member3.role')}
                </p>
                <p className='text-sm text-text-secondary'>
                  {t('about.team.member3.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 px-6 bg-primary text-white'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>{t('about.cta.title')}</h2>
            <p className='text-xl text-text-secondary mb-8 opacity-90'>
              {t('about.cta.subtitle')}
            </p>
            <Link href='/contact' className='btn-primary'>
              {t('about.cta.button')}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
