# Logo Guide for Organic Boost

## Current Logo Files

- **`/public/logo.png`** - Main logo (500x500px) - Used in header
- **`/public/logo.svg`** - SVG version (scalable) - Created for flexibility
- **`/public/og-image.svg`** - **NEW!** SVG OG image (1200x630px) - For social sharing
- **`/public/favicon.ico`** - Browser favicon
- **`/public/favicon.svg`** - SVG favicon

## Logo Component

Use the `Logo` component in your React code:

```tsx
import Logo from '@/app/components/Logo';

// Full logo with text
<Logo size={40} showText={true} />

// Icon only
<Logo size={32} showText={false} />
```

## OG Image (Social Sharing)

### ✅ SVG Version Created!

The OG image is now available as **SVG** at `/public/og-image.svg`

**Advantages of SVG:**

- ✅ Scalable (looks perfect at any size)
- ✅ Small file size
- ✅ Crisp on all displays
- ✅ Already configured in metadata

**Note:** Some platforms (Facebook, LinkedIn) may prefer PNG/JPG. If you need raster versions:

### Option 1: Use the SVG Directly (Recommended)

The SVG is already configured in your metadata. Most modern platforms support it!

### Option 2: Convert to PNG/JPG (If Needed)

**Quick Method:**

1. Open `/public/og-image.svg` in your browser
2. Right-click → Inspect
3. Take screenshot at 1200x630px
4. Save as PNG or JPG

**Using the Script:**

```bash
npm install sharp
node scripts/generate-og-image.js
```

This will create:

- `/public/og-image.png` (better quality)
- `/public/og-image.jpg` (smaller file size)

Then update `layout.tsx` to use PNG/JPG instead of SVG if needed.

### Option 3: Use Online Converter

- https://cloudconvert.com/svg-to-png
- Upload `og-image.svg`
- Set size: 1200x630px
- Download PNG/JPG

## Required Logo Sizes

### For SEO & Social Media

1. **OG Image (Open Graph)** - `/public/og-image.svg`

   - Size: **1200x630px**
   - Format: **SVG** (or PNG/JPG)
   - Used for: Facebook, LinkedIn, Twitter sharing
   - **Status**: ✅ **CREATED AS SVG**

2. **Logo for Structured Data** - `/public/logo.png`

   - Size: **512x512px minimum** (current: 500x500px - good!)
   - Format: PNG
   - **Status**: ✅ Already exists

3. **Favicon** - `/public/favicon.ico`

   - Size: **32x32px** or **16x16px**
   - Format: ICO
   - **Status**: ✅ Already exists

4. **Apple Touch Icon** - `/public/apple-touch-icon.png` (Optional)
   - Size: **180x180px**
   - Format: PNG
   - **Status**: ⚠️ **OPTIONAL - Nice to have**

## Brand Colors

Use these colors in your logos:

- **Primary Green**: `#166534` (main brand color)
- **Secondary Green**: `#10b981` (accent)
- **Purple Accent**: `#8b5cf6` (gradients)
- **Text Primary**: `#1e293b`
- **Text Secondary**: `#64748b`

## Logo Usage Guidelines

1. **Minimum Size**: Never use logo smaller than 32px
2. **Clear Space**: Maintain padding equal to logo height
3. **Background**: Works on white, light gray, and gradient backgrounds
4. **Don't**: Stretch, rotate, or add effects to the logo

## Quick Checklist

- [x] Main logo exists (`logo.png`)
- [x] SVG logo created (`logo.svg`)
- [x] **OG Image SVG created** (`og-image.svg`) - ✅ **DONE!**
- [x] **OG Image PNG created** (`og-image.png`) - ✅ **DONE!** (69KB, high quality)
- [x] **OG Image JPG created** (`og-image.jpg`) - ✅ **DONE!** (39KB, smaller size)
- [x] Favicon exists (`favicon.ico`)
- [ ] Apple Touch Icon (optional)

## Testing OG Image

Test your OG image:

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Next Steps

1. ✅ **All OG Images are ready!** - PNG is configured in metadata (best compatibility)
2. ✅ **SVG available** - For future use or editing
3. ✅ **JPG available** - Smaller file size option
4. **Test** - Use the validators above to preview your OG image
