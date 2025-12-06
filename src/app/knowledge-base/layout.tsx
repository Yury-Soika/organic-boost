import { generatePageMetadata } from '../lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Knowledge Base - ASO Tips & Strategies',
  description:
    'Learn about App Store Optimization, ASO strategies, market analysis, and app growth tips. Expert insights on motivated installs, keyword ranking, and organic app growth.',
  keywords: [
    'ASO tips',
    'app store optimization guide',
    'ASO strategies',
    'app growth tips',
    'mobile app marketing',
    'ASO best practices',
    'app store ranking guide',
  ],
  path: '/knowledge-base',
});

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
