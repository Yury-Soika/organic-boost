export default function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is ASO (App Store Optimization)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ASO (App Store Optimization) is the process of improving your mobile app's visibility in app store search results. It includes optimizing your app's title, subtitle, keywords, description, screenshots, icon, and other metadata to increase organic downloads and improve rankings.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are motivated app installs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Motivated app installs are installs generated through incentivized campaigns where users are rewarded for installing and using your app. At Organic Boost, we use high-quality bots running on real physical devices with unique IDFAs to generate installs that boost your app's keyword rankings in App Store and Google Play.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does ASO service cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our ASO services start from $80 per language for localization and from $450 per month for complete campaign management. Motivated app installs start from $0.15 per install for volumes up to 50,000 installs, with discounts available for larger campaigns.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most clients see ranking improvements within 5-10 days of starting a campaign. The exact timeline depends on competition level, keyword difficulty, and campaign volume.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with both iOS and Android apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide ASO services and motivated app installs for both iOS (App Store) and Android (Google Play) applications. We work with apps in all niches and categories.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your bot installs safe for my app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, our high-quality bot installs use real physical devices with unique IDFAs/AAIDs. Each install is registered in Apple/Google consoles and passes fraud filters. We've generated 2M+ installs for 120+ apps without any sanctions.",
        },
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
