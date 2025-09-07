import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='bg-secondary-800 text-white py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>O</span>
              </div>
              <span className='text-xl font-bold'>Organic Boost</span>
            </div>
            <p className='text-gray-300 text-sm'>{t('footer.description')}</p>
            <div className='flex space-x-4'>
              <a
                href='https://t.me/organic_aso'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {t('footer.services')}
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/pricing'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  {t('nav.pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {t('footer.resources')}
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/knowledge-base'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  {t('nav.knowledgeBase')}
                </Link>
              </li>
              <li>
                <a
                  href='https://t.me/organic_aso_support'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Telegram Channel
                </a>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>
              {t('footer.contact')}
            </h4>
            <div className='space-y-2 text-sm'>
              <p className='text-gray-300'>
                <a
                  href='https://t.me/organic_aso'
                  className='hover:text-white transition-colors'
                >
                  t.me/organic_aso
                </a>
              </p>
              <p className='text-gray-300'>
                <a
                  href='https://t.me/organic_aso_support'
                  className='hover:text-white transition-colors'
                >
                  t.me/organic_aso_support
                </a>
              </p>
              <p className='text-gray-300 text-xs mt-4'>{t('footer.promo')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-300 text-sm'>{t('footer.copyright')}</p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a
              href='#'
              className='text-gray-300 hover:text-white text-sm transition-colors'
            >
              {t('footer.privacy')}
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-white text-sm transition-colors'
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div className='border-t border-gray-700 pt-4 mt-4'>
          <p className='text-gray-400 text-xs text-center'>
            {t('footer.company')}
          </p>
        </div>
      </div>
    </footer>
  );
}
