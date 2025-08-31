'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function KnowledgeBasePage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-6'>
              <span className='text-primary'>{t('nav.knowledgeBase')}</span>
            </h1>
            <p className='text-xl text-text-secondary max-w-3xl mx-auto mb-8'>
              {t('knowledgeBase.subtitle')}
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Article 1: Bots vs Real Installs */}
              <article className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='mb-6'>
                  <span className='bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-semibold'>
                    ASO Strategy
                  </span>
                </div>
                <h2 className='text-2xl font-bold mb-4'>
                  {t('kb.bots.title')}
                </h2>
                <p className='text-text-secondary mb-6'>{t('kb.bots.intro')}</p>

                <div className='space-y-4 mb-6'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('kb.bots.quality.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('kb.bots.quality.content').substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('kb.bots.highQuality.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('kb.bots.highQuality.content').substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('kb.bots.comparison.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('kb.bots.comparison.content').substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border-t border-border pt-6'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-text-secondary'>
                      5 min read
                    </span>
                    <Link
                      href='/knowledge-base/bots-vs-real-installs'
                      className='text-primary hover:text-primary-700 font-medium'
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>

              {/* Article 2: Growing Competition */}
              <article className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='mb-6'>
                  <span className='bg-secondary-100 text-secondary px-3 py-1 rounded-full text-sm font-semibold'>
                    Market Analysis
                  </span>
                </div>
                <h2 className='text-2xl font-bold mb-4'>
                  {t('kb.competition.title')}
                </h2>
                <p className='text-text-secondary mb-6'>
                  {t('kb.competition.intro')}
                </p>

                <div className='space-y-4 mb-6'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('kb.competition.economics.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('kb.competition.economics.content').substring(
                          0,
                          100
                        )}
                        ...
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('kb.competition.keywords.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('kb.competition.keywords.content').substring(0, 100)}
                        ...
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold'>
                        {t('kb.competition.approach.title')}
                      </h4>
                      <p className='text-text-secondary text-sm'>
                        {t('kb.competition.approach.content').substring(0, 100)}
                        ...
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border-t border-border pt-6'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-text-secondary'>
                      4 min read
                    </span>
                    <Link
                      href='/knowledge-base/growing-competition'
                      className='text-primary hover:text-primary-700 font-medium'
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 px-6 bg-primary text-white'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              {t('kb.competition.try.title')}
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              {t('kb.competition.try.content')}
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
