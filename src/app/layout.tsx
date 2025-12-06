import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';
import StructuredData from './components/StructuredData';
import FAQSchema from './components/FAQSchema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://organicaso.com'),
  title: {
    default:
      'Organic Boost - ASO Agency | App Store Optimization & Motivated App Installs',
    template: '%s | Organic Boost',
  },
  description:
    'Professional ASO agency specializing in App Store Optimization, motivated app installs, and keyword ranking boost for iOS and Android. 2M+ installs generated, 120+ apps promoted. Get organic growth for your mobile app.',
  keywords: [
    'ASO agency',
    'ASO service',
    'app store optimization',
    'motivated app installs',
    'app growth agency',
    'iOS app promotion',
    'Android app promotion',
    'keyword ranking boost',
    'app store keyword boost',
    'organic app growth',
    'boost app ranking',
    'buy app installs',
    'best ASO company',
    'mobile app marketing',
    'app store ranking',
    'ASO агентство',
    'продвижение приложений iOS',
    'мотивированный трафик iOS',
    'боты для App Store',
    'продвижение по ключам App Store',
    'буст позиций приложения',
    'органический рост приложения',
    'продвижение мобильных приложений',
    'установка по ключевым словам',
    'вывод приложения в топ',
  ],
  authors: [{ name: 'Organic Boost' }],
  creator: 'Organic Boost',
  publisher: 'Organic Boost',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU'],
    url: 'https://organicaso.com',
    siteName: 'Organic Boost',
    title:
      'Organic Boost - ASO Agency | App Store Optimization & Motivated App Installs',
    description:
      'Professional ASO agency specializing in App Store Optimization, motivated app installs, and keyword ranking boost for iOS and Android. 2M+ installs generated, 120+ apps promoted.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Organic Boost - ASO Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Organic Boost - ASO Agency | App Store Optimization & Motivated App Installs',
    description:
      'Professional ASO agency specializing in App Store Optimization, motivated app installs, and keyword ranking boost for iOS and Android.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://organicaso.com',
    languages: {
      'en-US': 'https://organicaso.com',
      'ru-RU': 'https://organicaso.com/ru',
      'x-default': 'https://organicaso.com',
    },
  },
  verification: {
    google: 'googlef515f28ccb88eb61',
    yandex: '60b51aa0c6a37ac8',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* Preconnect to third-party domains for faster loading */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        <link rel='preconnect' href='https://mc.yandex.ru' />
        <link rel='preconnect' href='https://cdn.consentmanager.net' />
        <link rel='icon' href='/favicon.ico' />
        {/* Yandex.Metrika counter */}
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105126183', 'ym');
              ym(105126183, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        {/* /Yandex.Metrika counter */}
        <StructuredData />
        <FAQSchema />
      </head>
      <body
        className={`${inter.className} bg-background text-text-primary`}
        suppressHydrationWarning
      >
        {/* Cookie Consent Manager - Loads early in <head> to block other scripts until consent */}
        <Script
          type='text/javascript'
          data-cmp-ab='1'
          src='https://cdn.consentmanager.net/delivery/autoblocking/1310fe38e2aa8.js'
          data-cmp-host='c.delivery.consentmanager.net'
          data-cmp-cdn='cdn.consentmanager.net'
          data-cmp-codesrc='16'
          strategy='beforeInteractive'
        />

        {/* Google Analytics - Loads after page interaction for optimal performance */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-JY4C2HZLRH'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JY4C2HZLRH');
          `}
        </Script>

        {/* Yandex Metrika noscript fallback */}
        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/105126183'
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>

        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
