import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Contact Us - Get Free ASO Audit',
  description:
    'Contact Organic Boost for professional ASO services, motivated app installs, and app growth consulting. Get a free audit of your mobile app. Available in English and Russian.',
  keywords: [
    'contact ASO agency',
    'ASO consultation',
    'free app audit',
    'app store optimization help',
    'mobile app marketing consultation',
  ],
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

