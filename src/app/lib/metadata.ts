import type { Metadata } from 'next';

const baseUrl = 'https://organicaso.com';
const siteName = 'Organic Boost';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  ogImage = '/og-image.png',
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'ASO agency',
      'app store optimization',
      'motivated app installs',
      'iOS app promotion',
      'Android app promotion',
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['ru_RU'],
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
      canonical: url,
      languages: {
        'en-US': url,
        'ru-RU': url,
        'x-default': url,
      },
    },
  };
}
