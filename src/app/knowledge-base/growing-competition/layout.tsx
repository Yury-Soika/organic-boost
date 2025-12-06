import { generatePageMetadata } from '../../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Growing Competition in App Store and Google Play',
  description:
    "Understand the challenges and opportunities in today's mobile app market. Learn about competition, keyword installs, and strategies to boost your app's ranking in App Store and Google Play.",
  keywords: [
    'app store competition',
    'mobile app market competition',
    'app ranking competition',
    'ASO competition analysis',
    'app store keyword competition',
  ],
  path: '/knowledge-base/growing-competition',
});

export default function GrowingCompetitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
