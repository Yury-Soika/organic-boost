import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://organicaso.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          ru: `${baseUrl}/ru`,
        },
      },
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/pricing`,
          ru: `${baseUrl}/pricing`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          ru: `${baseUrl}/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/knowledge-base`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/knowledge-base`,
          ru: `${baseUrl}/knowledge-base`,
        },
      },
    },
    {
      url: `${baseUrl}/knowledge-base/bots-vs-real-installs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/knowledge-base/bots-vs-real-installs`,
          ru: `${baseUrl}/knowledge-base/bots-vs-real-installs`,
        },
      },
    },
    {
      url: `${baseUrl}/knowledge-base/growing-competition`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/knowledge-base/growing-competition`,
          ru: `${baseUrl}/knowledge-base/growing-competition`,
        },
      },
    },
  ];
}
