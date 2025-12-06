import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Pricing - ASO Services & Motivated App Installs',
  description:
    'Transparent pricing for ASO services and motivated app installs. Starting from $0.15 per install. ASO localization from $80, monthly management from $450. Get started today!',
  keywords: [
    'ASO pricing',
    'app installs price',
    'ASO service cost',
    'app store optimization pricing',
    'motivated installs pricing',
    'ASO agency rates',
    'app promotion cost',
  ],
  path: '/pricing',
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
