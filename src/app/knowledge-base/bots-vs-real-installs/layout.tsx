import { generatePageMetadata } from '../../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Bots vs. Real Installs: Which One Should You Choose?',
  description:
    "Learn about the differences between automated bot traffic and human-driven app installs. Understand quality bot traffic, risks, and how high-quality bots can boost your app's rankings effectively.",
  keywords: [
    'bots vs real installs',
    'bot traffic for apps',
    'motivated app installs',
    'automated app installs',
    'high quality bot traffic',
    'app store bot traffic',
  ],
  path: '/knowledge-base/bots-vs-real-installs',
});

export default function BotsVsRealInstallsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
