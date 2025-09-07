'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className='fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50'>
      <nav className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3'>
            <img
              src='/logo.png'
              alt='Organic Boost'
              className='w-10 h-10 object-contain rounded-lg'
            />
            <span className='text-xl font-bold text-primary'>
              Organic Boost
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.home')}
            </Link>
            <Link
              href='/about'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.about')}
            </Link>
            <Link
              href='/services'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.services')}
            </Link>
            <Link
              href='/case-studies'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.caseStudies')}
            </Link>
            <Link
              href='/pricing'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.pricing')}
            </Link>
            <Link
              href='/knowledge-base'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.knowledgeBase')}
            </Link>
            <Link
              href='/contact'
              className='text-text-secondary hover:text-primary transition-colors'
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* CTA Buttons & Language Switcher - Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            <LanguageSwitcher />
            <Link href='/contact' className='btn-primary'>
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-border'>
            <div className='flex flex-col space-y-4 pt-4'>
              <Link
                href='/'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.home')}
              </Link>
              <Link
                href='/about'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.about')}
              </Link>
              <Link
                href='/services'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.services')}
              </Link>
              <Link
                href='/case-studies'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.caseStudies')}
              </Link>
              <Link
                href='/pricing'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.pricing')}
              </Link>
              <Link
                href='/knowledge-base'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.knowledgeBase')}
              </Link>
              <Link
                href='/contact'
                className='text-text-secondary hover:text-primary transition-colors'
              >
                {t('nav.contact')}
              </Link>
              <div className='pt-4 border-t border-border'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-sm text-text-secondary'>Language:</span>
                  <LanguageSwitcher />
                </div>
                <Link
                  href='/contact'
                  className='btn-primary w-full justify-center'
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
