import { NextResponse } from 'next/server';

export async function GET() {
  const ogImageSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0fdf4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f5f3ff;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#166534;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="0" dy="8" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <rect width="1200" height="630" fill="url(#bgGradient)"/>
      
      <circle cx="240" cy="315" r="200" fill="#166534" opacity="0.05"/>
      <circle cx="960" cy="315" r="200" fill="#8b5cf6" opacity="0.05"/>
      
      <g transform="translate(600, 200)">
        <rect x="-60" y="-60" width="120" height="120" rx="24" fill="url(#logoGradient)" filter="url(#shadow)"/>
        <g transform="translate(0, -10)">
          <path d="M-30 -15 L0 -45 L30 -15 L22 -15 L22 15 L-22 15 L-22 -15 Z" fill="white" opacity="0.9"/>
          <rect x="-15" y="-8" width="30" height="22" rx="3" fill="white" opacity="0.7"/>
          <rect x="-11" y="-4" width="22" height="14" rx="2" fill="#166534" opacity="0.3"/>
        </g>
        <text x="0" y="80" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#166534" text-anchor="middle" opacity="0.8">OB</text>
      </g>
      
      <text x="600" y="380" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="#166534" text-anchor="middle">
        Organic Boost
      </text>
      
      <text x="600" y="430" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="500" fill="#64748b" text-anchor="middle">
        ASO Agency | App Store Optimization
      </text>
      
      <g transform="translate(600, 500)">
        <text x="-200" y="0" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="#10b981" text-anchor="middle">
          2M+ Installs
        </text>
        <text x="0" y="0" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="#10b981" text-anchor="middle">
          120+ Apps
        </text>
        <text x="200" y="0" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="#10b981" text-anchor="middle">
          iOS &amp; Android
        </text>
      </g>
    </svg>
  `.trim();

  return new NextResponse(ogImageSvg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

