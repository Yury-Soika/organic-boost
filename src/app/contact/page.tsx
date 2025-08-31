'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appName: '',
    platform: '',
    message: '',
    budget: '',
    promoCode: 'ORGANIC15',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-6'>
              {t('contact.title')}
            </h1>
            <p className='text-xl text-text-secondary max-w-3xl mx-auto mb-8'>
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className='py-16 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <div className='bg-white rounded-xl p-8 shadow-prominent'>
                <h2 className='text-2xl font-bold mb-6'>
                  {t('contact.form.title')}
                </h2>

                {isSubmitted ? (
                  <div className='text-center py-8'>
                    <div className='w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4'>
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
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>
                      {t('contact.form.success.title')}
                    </h3>
                    <p className='text-text-secondary mb-6'>
                      {t('contact.form.success.desc')}
                    </p>
                    <Link
                      href='https://t.me/organic_aso'
                      className='btn-primary'
                    >
                      {t('contact.form.success.button')}
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-text-primary mb-2'
                        >
                          {t('contact.form.name')} *
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-text-primary mb-2'
                        >
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='appName'
                          className='block text-sm font-medium text-text-primary mb-2'
                        >
                          {t('contact.form.appName')}
                        </label>
                        <input
                          type='text'
                          id='appName'
                          name='appName'
                          value={formData.appName}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='platform'
                          className='block text-sm font-medium text-text-primary mb-2'
                        >
                          {t('contact.form.platform')}
                        </label>
                        <select
                          id='platform'
                          name='platform'
                          value={formData.platform}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        >
                          <option value=''>{t('contact.form.platform')}</option>
                          <option value='ios'>
                            {t('contact.form.platform.ios')}
                          </option>
                          <option value='android'>
                            {t('contact.form.platform.android')}
                          </option>
                          <option value='both'>
                            {t('contact.form.platform.both')}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-text-primary mb-2'
                      >
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='budget'
                          className='block text-sm font-medium text-text-primary mb-2'
                        >
                          {t('contact.form.budget')}
                        </label>
                        <select
                          id='budget'
                          name='budget'
                          value={formData.budget}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        >
                          <option value=''>{t('contact.form.budget')}</option>
                          <option value='under500'>
                            {t('contact.form.budget.under500')}
                          </option>
                          <option value='500to1000'>
                            {t('contact.form.budget.500to1000')}
                          </option>
                          <option value='1000to2000'>
                            {t('contact.form.budget.1000to2000')}
                          </option>
                          <option value='over2000'>
                            {t('contact.form.budget.over2000')}
                          </option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor='promoCode'
                          className='block text-sm font-medium text-text-primary mb-2'
                        >
                          {t('contact.form.promoCode')}
                        </label>
                        <input
                          type='text'
                          id='promoCode'
                          name='promoCode'
                          value={formData.promoCode}
                          onChange={handleChange}
                          className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                      </div>
                    </div>

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50'
                    >
                      {isSubmitting
                        ? t('contact.form.submitting')
                        : t('contact.form.submit')}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className='space-y-8'>
                <div className='bg-white rounded-xl p-8 shadow-subtle'>
                  <h3 className='text-xl font-semibold mb-6'>
                    {t('contact.info.title')}
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-primary'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold'>
                          {t('contact.info.telegram.title')}
                        </h4>
                        <p className='text-text-secondary text-sm'>
                          {t('contact.info.telegram.desc')}
                        </p>
                        <a
                          href='https://t.me/organic_aso'
                          className='text-primary hover:text-primary-700 font-medium'
                        >
                          t.me/organic_aso
                        </a>
                      </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-secondary'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold'>
                          {t('contact.info.email.title')}
                        </h4>
                        <p className='text-text-secondary text-sm'>
                          {t('contact.info.email.desc')}
                        </p>
                        <a
                          href='mailto:hello@organicboost.com'
                          className='text-primary hover:text-primary-700 font-medium'
                        >
                          hello@organicboost.com
                        </a>
                      </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-accent'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className='font-semibold'>
                          {t('contact.info.response.title')}
                        </h4>
                        <p className='text-text-secondary text-sm'>
                          {t('contact.info.response.desc')}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-primary'
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
                      <div>
                        <h4 className='font-semibold'>
                          {t('contact.info.support.title')}
                        </h4>
                        <p className='text-text-secondary text-sm'>
                          {t('contact.info.support.desc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className='bg-primary-50 rounded-xl p-8'>
                  <h3 className='text-xl font-semibold mb-4'>
                    {t('whyChoose.title')}
                  </h3>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-start space-x-2'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                      <span>{t('whyChoose.realExperience')}</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                      <span>{t('whyChoose.provenStrategies')}</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                      <span>{t('whyChoose.lowestPrices')}</span>
                    </li>
                    <li className='flex items-start space-x-2'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                      <span>{t('whyChoose.support')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
