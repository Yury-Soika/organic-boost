'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function CaseStudiesPage() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-6'>
              <span className='text-primary'>
                {t('caseStudies.title').split(' ')[0]}
              </span>{' '}
              {t('caseStudies.title').split(' ').slice(1).join(' ')}
            </h1>
            <p className='text-xl text-text-secondary max-w-3xl mx-auto mb-8'>
              {t('caseStudies.subtitle')}
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='bg-white rounded-xl p-8 shadow-prominent'>
              <div className='mb-6'>
                <span className='bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-semibold'>
                  {t('caseStudies.featured.badge')}
                </span>
              </div>

              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <h2 className='text-3xl font-bold mb-4'>
                    {t('caseStudies.fitness.title')}
                  </h2>
                  <p className='text-lg text-text-secondary mb-6'>
                    {t('caseStudies.fitness.desc')}
                  </p>

                  <div className='grid grid-cols-2 gap-6 mb-8'>
                    <div>
                      <div className='text-3xl font-bold text-primary mb-2'>
                        300%
                      </div>
                      <div className='text-text-secondary'>
                        {t('caseStudies.fitness.stats.installs')}
                      </div>
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-primary mb-2'>
                        #5
                      </div>
                      <div className='text-text-secondary'>
                        {t('caseStudies.fitness.stats.ranking')}
                      </div>
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-primary mb-2'>
                        30
                      </div>
                      <div className='text-text-secondary'>
                        {t('caseStudies.fitness.stats.days')}
                      </div>
                    </div>
                    <div>
                      <div className='text-3xl font-bold text-primary mb-2'>
                        $0.12
                      </div>
                      <div className='text-text-secondary'>
                        {t('caseStudies.fitness.stats.cost')}
                      </div>
                    </div>
                  </div>

                  <div className='space-y-4 mb-8'>
                    <h3 className='font-semibold text-lg'>
                      {t('caseStudies.fitness.challenge.title')}
                    </h3>
                    <p className='text-text-secondary'>
                      {t('caseStudies.fitness.challenge.desc')}
                    </p>

                    <h3 className='font-semibold text-lg'>
                      {t('caseStudies.fitness.solution.title')}
                    </h3>
                    <ul className='space-y-2 text-text-secondary'>
                      <li>• {t('caseStudies.fitness.solution.item1')}</li>
                      <li>• {t('caseStudies.fitness.solution.item2')}</li>
                      <li>• {t('caseStudies.fitness.solution.item3')}</li>
                      <li>• {t('caseStudies.fitness.solution.item4')}</li>
                    </ul>

                    <h3 className='font-semibold text-lg'>
                      {t('caseStudies.fitness.results.title')}
                    </h3>
                    <ul className='space-y-2 text-text-secondary'>
                      <li>• {t('caseStudies.fitness.results.item1')}</li>
                      <li>• {t('caseStudies.fitness.results.item2')}</li>
                      <li>• {t('caseStudies.fitness.results.item3')}</li>
                      <li>• {t('caseStudies.fitness.results.item4')}</li>
                    </ul>
                  </div>

                  <Link
                    href='/case-studies/fitness-app-success'
                    className='btn-primary'
                  >
                    {t('caseStudies.fitness.readMore')}
                  </Link>
                </div>

                <div className='bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8'>
                  <div className='space-y-6'>
                    <div className='text-center'>
                      <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
                        <svg
                          className='w-8 h-8 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                          />
                        </svg>
                      </div>
                      <h3 className='text-xl font-semibold mb-2'>
                        {t('caseStudies.performance.title')}
                      </h3>
                    </div>

                    <div className='space-y-4'>
                      <div className='flex justify-between items-center'>
                        <span className='text-text-secondary'>
                          {t('caseStudies.performance.before')}
                        </span>
                        <span className='font-semibold'>#50</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                          className='bg-primary h-2 rounded-full'
                          style={{ width: '10%' }}
                        ></div>
                      </div>

                      <div className='flex justify-between items-center'>
                        <span className='text-text-secondary'>
                          {t('caseStudies.performance.after')}
                        </span>
                        <span className='font-semibold'>#5</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                          className='bg-primary h-2 rounded-full'
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Case Studies */}
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('caseStudies.moreStories.title')}
              </h2>
              <p className='text-xl text-text-secondary'>
                {t('caseStudies.moreStories.subtitle')}
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8'>
              {/* Case Study 1 */}
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='mb-6'>
                  <span className='bg-secondary-100 text-secondary px-3 py-1 rounded-full text-sm font-semibold'>
                    {t('caseStudies.categories.gaming')}
                  </span>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('caseStudies.gaming.title')}
                </h3>
                <p className='text-text-secondary mb-6'>
                  {t('caseStudies.gaming.desc')}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div>
                    <div className='text-2xl font-bold text-secondary mb-1'>
                      500%
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.gaming.revenue')}
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-secondary mb-1'>
                      #12
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.gaming.ranking')}
                    </div>
                  </div>
                </div>

                <Link
                  href='/case-studies/puzzle-game'
                  className='text-secondary hover:text-secondary-700 font-medium'
                >
                  {t('caseStudies.readMore')}
                </Link>
              </div>

              {/* Case Study 2 */}
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='mb-6'>
                  <span className='bg-accent-100 text-accent px-3 py-1 rounded-full text-sm font-semibold'>
                    {t('caseStudies.categories.productivity')}
                  </span>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('caseStudies.productivity.title')}
                </h3>
                <p className='text-text-secondary mb-6'>
                  {t('caseStudies.productivity.desc')}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div>
                    <div className='text-2xl font-bold text-accent mb-1'>
                      200%
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.productivity.growth')}
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-accent mb-1'>
                      #8
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.productivity.ranking')}
                    </div>
                  </div>
                </div>

                <Link
                  href='/case-studies/task-manager'
                  className='text-accent hover:text-accent-700 font-medium'
                >
                  {t('caseStudies.readMore')}
                </Link>
              </div>

              {/* Case Study 3 */}
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='mb-6'>
                  <span className='bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-semibold'>
                    {t('caseStudies.categories.ecommerce')}
                  </span>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('caseStudies.ecommerce.title')}
                </h3>
                <p className='text-text-secondary mb-6'>
                  {t('caseStudies.ecommerce.desc')}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div>
                    <div className='text-2xl font-bold text-primary mb-1'>
                      150%
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.ecommerce.conversion')}
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-primary mb-1'>
                      #15
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.ecommerce.ranking')}
                    </div>
                  </div>
                </div>

                <Link
                  href='/case-studies/shopping-app'
                  className='text-primary hover:text-primary-700 font-medium'
                >
                  {t('caseStudies.readMore')}
                </Link>
              </div>

              {/* Case Study 4 */}
              <div className='bg-white rounded-xl p-8 shadow-subtle'>
                <div className='mb-6'>
                  <span className='bg-secondary-100 text-secondary px-3 py-1 rounded-full text-sm font-semibold'>
                    {t('caseStudies.categories.education')}
                  </span>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('caseStudies.education.title')}
                </h3>
                <p className='text-text-secondary mb-6'>
                  {t('caseStudies.education.desc')}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div>
                    <div className='text-2xl font-bold text-secondary mb-1'>
                      400%
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.education.downloads')}
                    </div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-secondary mb-1'>
                      #6
                    </div>
                    <div className='text-sm text-text-secondary'>
                      {t('caseStudies.education.ranking')}
                    </div>
                  </div>
                </div>

                <Link
                  href='/case-studies/language-app'
                  className='text-secondary hover:text-secondary-700 font-medium'
                >
                  {t('caseStudies.readMore')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className='py-16 px-6 bg-primary text-white'>
          <div className='max-w-7xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-12'>
              {t('caseStudies.trackRecord.title')}
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div>
                <div className='text-4xl font-bold mb-2'>120+</div>
                <div className='text-lg opacity-90'>
                  {t('caseStudies.trackRecord.apps')}
                </div>
              </div>
              <div>
                <div className='text-4xl font-bold mb-2'>98%</div>
                <div className='text-lg opacity-90'>
                  {t('caseStudies.trackRecord.success')}
                </div>
              </div>
              <div>
                <div className='text-4xl font-bold mb-2'>2M+</div>
                <div className='text-lg opacity-90'>
                  {t('caseStudies.trackRecord.installs')}
                </div>
              </div>
              <div>
                <div className='text-4xl font-bold mb-2'>35%</div>
                <div className='text-lg opacity-90'>
                  {t('caseStudies.trackRecord.growth')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-16 px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {t('caseStudies.process.title')}
              </h2>
              <p className='text-xl text-text-secondary'>
                {t('caseStudies.process.subtitle')}
              </p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  step: '1',
                  title: t('caseStudies.process.step1.title'),
                  description: t('caseStudies.process.step1.desc'),
                },
                {
                  step: '2',
                  title: t('caseStudies.process.step2.title'),
                  description: t('caseStudies.process.step2.desc'),
                },
                {
                  step: '3',
                  title: t('caseStudies.process.step3.title'),
                  description: t('caseStudies.process.step3.desc'),
                },
                {
                  step: '4',
                  title: t('caseStudies.process.step4.title'),
                  description: t('caseStudies.process.step4.desc'),
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
        <section className='py-16 px-6 bg-surface'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              {t('caseStudies.cta.title')}
            </h2>
            <p className='text-xl text-text-secondary mb-8'>
              {t('caseStudies.cta.subtitle')}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact' className='btn-primary'>
                {t('caseStudies.cta.audit')}
              </Link>
              <Link href='https://t.me/organic_aso' className='btn-secondary'>
                {t('caseStudies.cta.telegram')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
