import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${inter.className} bg-background text-text-primary`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
