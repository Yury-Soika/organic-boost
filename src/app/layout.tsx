import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    "Organic Boost - Boost your app's growth with installs that really work",
  description:
    'Affordable, predictable and effective ASO & machine-motivated installs for iOS and Android. 2M+ installs generated, 120+ apps promoted.',
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
      </head>
      <body className={`${inter.className} bg-background text-text-primary`}>
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

        {/* Yandex Metrika - Loads after page interaction for optimal performance */}
        <Script id='yandex-metrika' strategy='afterInteractive'>
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105126183', 'ym');
            ym(105126183, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
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
