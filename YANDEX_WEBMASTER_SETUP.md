# Yandex Webmaster Setup Guide

## 📋 Steps to Get Your Verification Code

### Step 1: Go to Yandex Webmaster
1. Visit: https://webmaster.yandex.com
2. Sign in with your Yandex account (or create one if needed)

### Step 2: Add Your Site
1. Click **"Add Site"** or **"Добавить сайт"**
2. Enter your domain: `organicaso.com` or `https://organicaso.com`
3. Click **"Add"**

### Step 3: Choose Verification Method
Yandex offers 3 methods. **I recommend Meta Tag** (easiest):

#### Option 1: Meta Tag (Recommended) ✅
- Yandex will show you a meta tag like:
  ```html
  <meta name="yandex-verification" content="YOUR_CODE_HERE" />
  ```
- Copy the code (the part after `content="`)
- I'll add it to your metadata

#### Option 2: HTML File
- Yandex will give you a file to upload
- Similar to Google verification
- Upload to `/public/` folder

#### Option 3: DNS Record
- Add a TXT record to your DNS
- More complex, but permanent

## 🔧 What I'll Do

Once you provide the verification code, I will:
1. ✅ Add it to your metadata in `layout.tsx`
2. ✅ If HTML file method: Move file to `/public/` folder
3. ✅ Update the verification section

## 📝 Current Status

Your metadata is ready for Yandex verification. Just need the code!

Current setup in `layout.tsx`:
```typescript
verification: {
  google: 'googlef515f28ccb88eb61',
  // yandex: 'YOUR_YANDEX_CODE_HERE', // ← Will add here
},
```

## 🚀 After You Get the Code

**If Meta Tag Method:**
1. Copy the verification code from Yandex
2. Send it to me or add it yourself
3. I'll update `layout.tsx` with the code
4. Deploy your site
5. Click "Verify" in Yandex Webmaster

**If HTML File Method:**
1. Download the HTML file from Yandex
2. Send it to me or add it to `/public/` folder
3. Deploy your site
4. Click "Verify" in Yandex Webmaster

## 📊 After Verification

Once verified, you can:
- Submit your sitemap: `https://organicaso.com/sitemap.xml`
- Monitor indexing status
- See search queries (Russian market)
- Fix crawl errors
- View search analytics

## ⚠️ Important Notes

- **Deploy first** - Verification must be on live site
- **Wait 2-3 minutes** - After deployment before verifying
- **Russian market** - Yandex is important for Russian-speaking users

## 🎯 Quick Checklist

- [ ] Go to https://webmaster.yandex.com
- [ ] Add your site: `organicaso.com`
- [ ] Choose verification method (Meta Tag recommended)
- [ ] Copy the verification code
- [ ] Send it to me or add it to `layout.tsx`
- [ ] Deploy your site
- [ ] Click "Verify" in Yandex Webmaster
- [ ] Submit sitemap: `sitemap.xml`

---

**Ready?** Go to Yandex Webmaster and get your verification code, then I'll add it to your site!

