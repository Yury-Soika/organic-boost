export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Organic Boost',
    alternateName: 'organicaso.com',
    url: 'https://organicaso.com',
    logo: 'https://organicaso.com/logo.png',
    description:
      'Professional ASO agency specializing in App Store Optimization, motivated app installs, and keyword ranking boost for iOS and Android apps.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EE',
      addressLocality: 'Tallinn',
      addressRegion: 'Harju maakond',
      streetAddress: 'Vesivärava tn 50-201',
      postalCode: '10152',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48-572-382-192',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Russian'],
    },
    sameAs: [
      'https://t.me/organic_aso',
      'https://t.me/organic_aso_support',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'App Store Optimization (ASO)',
    provider: {
      '@type': 'Organization',
      name: 'Organic Boost',
    },
    areaServed: 'Worldwide',
    description:
      'Professional ASO services including App Store Optimization, motivated app installs, keyword ranking boost, and organic growth strategies for iOS and Android applications.',
    offers: [
      {
        '@type': 'Offer',
        name: 'ASO Service',
        description:
          'Complete App Store Optimization including keyword research, metadata optimization, conversion rate optimization, and competitor analysis.',
      },
      {
        '@type': 'Offer',
        name: 'Motivated App Installs',
        description:
          'High-quality motivated app installs using physical devices with unique IDFAs for iOS and Android apps.',
      },
      {
        '@type': 'Offer',
        name: 'Keyword Ranking Boost',
        description:
          'Boost your app ranking for target keywords in App Store and Google Play.',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Organic Boost',
    url: 'https://organicaso.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://organicaso.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

