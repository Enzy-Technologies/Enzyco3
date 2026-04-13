# Deployment & SEO Guide for Current Vite Build

## Overview
This guide shows you how to deploy your current React + Vite Enzy website with **pre-rendering** to achieve ~70% of the SEO benefits of a full Next.js migration, without changing any code.

---

## What We've Already Done ✅

Your current Figma Make project now includes:

1. **Dynamic Meta Tags** - SEO component updates title, description, Open Graph, and Twitter Card tags for each page
2. **Structured Data** - JSON-LD schemas for Organization and SoftwareApplication
3. **Canonical URLs** - Proper canonical links for each route
4. **Page-Specific SEO** - Custom metadata for Home, Features, Solutions, Resources, and About pages

### Files Added:
- `/src/app/components/SEO.tsx` - Main SEO component
- `/src/app/utils/seo-config.ts` - Page-specific SEO configuration
- All page components updated with SEO metadata

---

## Pre-Rendering Your Vite Build

### What is Pre-Rendering?

Pre-rendering crawls your React app and generates static HTML files for each route. Search engines see fully-rendered HTML instead of an empty `<div id="root"></div>`.

### Option 1: Using `react-snap` (Recommended)

**Step 1: Install react-snap**
```bash
pnpm add -D react-snap
```

**Step 2: Update `package.json`**
```json
{
  "scripts": {
    "build": "vite build",
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "inlineCss": true,
    "minifyHtml": {
      "collapseWhitespace": true,
      "removeComments": true
    },
    "puppeteerArgs": [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
    "include": [
      "/",
      "/features",
      "/solutions", 
      "/resources",
      "/about"
    ]
  }
}
```

**Step 3: Build with Pre-Rendering**
```bash
pnpm build
```

**Step 4: Test Locally**
```bash
npx serve dist
```

Visit `http://localhost:3000` and view page source - you should see fully-rendered HTML!

---

### Option 2: Using `prerender-spa-plugin` (Webpack/Vite)

**Step 1: Install**
```bash
pnpm add -D prerender-spa-plugin
```

**Step 2: Update `vite.config.ts`**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { PrerenderSPAPlugin } from 'prerender-spa-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/features', '/solutions', '/resources', '/about'],
      renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
        renderAfterTime: 5000,
        headless: true,
      })
    })
  ],
})
```

---

## Deployment Platforms

### Vercel (Easiest)

**Step 1: Install Vercel CLI**
```bash
pnpm add -g vercel
```

**Step 2: Create `vercel.json`**
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "devCommand": "pnpm dev",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Step 3: Deploy**
```bash
vercel --prod
```

---

### Netlify

**Step 1: Create `netlify.toml`**
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Step 2: Deploy via CLI**
```bash
pnpm add -g netlify-cli
netlify deploy --prod
```

**Or connect via Netlify UI:**
1. Push code to GitHub
2. Go to app.netlify.com
3. "New site from Git"
4. Select your repo
5. Build command: `pnpm build`
6. Publish directory: `dist`

---

### Cloudflare Pages

**Step 1: Push to GitHub**

**Step 2: Connect to Cloudflare Pages**
1. Go to Cloudflare Dashboard → Pages
2. "Create a project" → "Connect to Git"
3. Select your repo

**Step 3: Configure Build**
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- Environment variables: `NODE_VERSION=18`

**Step 4: Add `_redirects` file in `/public`**
```
/*    /index.html   200
```

---

## Creating Open Graph Images

### Design Requirements
- Size: 1200px × 630px
- Format: JPG or PNG
- Max file size: 8MB (recommended < 300KB)

### Tools
- **Figma**: Design custom OG images
- **Canva**: Use templates
- **og-image.vercel.app**: Generate programmatically

### Save Location
Place in `/public/og-image.jpg` and update SEO.tsx:

```tsx
const DEFAULT_SEO = {
  // ...
  image: "https://enzy.com/og-image.jpg", // Update this URL
};
```

---

## Testing SEO After Deployment

### 1. View Page Source
Right-click → View Page Source

**Look for:**
```html
<title>Enzy - The Operating System for High-Performance Sales Teams</title>
<meta name="description" content="Transform your sales team..." />
<meta property="og:title" content="..." />
<script type="application/ld+json">{"@context":"https://schema.org"...}</script>
```

### 2. Google Rich Results Test
https://search.google.com/test/rich-results

Paste your deployed URL to check structured data.

### 3. Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/

Test Open Graph tags.

### 4. Twitter Card Validator
https://cards-dev.twitter.com/validator

Test Twitter Card preview.

### 5. Lighthouse SEO Audit
```bash
# Install Lighthouse
pnpm add -g lighthouse

# Run audit
lighthouse https://your-site.com --only-categories=seo,performance --view
```

**Target Scores:**
- SEO: 95+ / 100
- Performance: 90+ / 100
- Accessibility: 90+ / 100

---

## Submit to Search Engines

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add your property (domain or URL prefix)
3. Verify ownership (HTML file upload or DNS)
4. Submit sitemap: `https://enzy.com/sitemap.xml`

**Note:** You'll need to create a sitemap manually or use a generator:

**Create `/public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://enzy.com/</loc>
    <lastmod>2026-04-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://enzy.com/features</loc>
    <lastmod>2026-04-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://enzy.com/solutions</loc>
    <lastmod>2026-04-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://enzy.com/resources</loc>
    <lastmod>2026-04-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://enzy.com/about</loc>
    <lastmod>2026-04-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap

---

## Update Structured Data with Real Info

Edit `/src/app/components/SEO.tsx` and replace placeholder values:

```tsx
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Enzy",
    "url": "https://enzy.com", // ← Update with real domain
    "logo": "https://enzy.com/logo.png", // ← Add real logo URL
    "description": "The Operating System for High-Performance Sales Teams",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "sales@enzy.com" // ← Update with real email
    },
    "sameAs": [
      "https://twitter.com/enzy", // ← Update with real social links
      "https://linkedin.com/company/enzy",
      "https://github.com/enzy"
    ]
  };
  // ...
}
```

---

## SEO Best Practices Checklist

- [ ] All pages have unique `<title>` tags (50-60 characters)
- [ ] All pages have unique meta descriptions (150-160 characters)
- [ ] Images have descriptive `alt` attributes
- [ ] URLs are clean and readable (`/features` not `/features.html`)
- [ ] Site loads in < 3 seconds
- [ ] Mobile-friendly (responsive design)
- [ ] HTTPS enabled
- [ ] Sitemap.xml created and submitted
- [ ] robots.txt allows crawling
- [ ] Structured data validates with no errors
- [ ] Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## Monitoring & Analytics

### Google Analytics 4

**Add to `index.html` or Root component:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-Friendly Alternative)

```html
<script defer data-domain="enzy.com" src="https://plausible.io/js/script.js"></script>
```

---

## Expected SEO Results

### With Pre-Rendering (Current Setup)
- ✅ Google can crawl and index all content
- ✅ Meta tags visible to search engines
- ✅ Social media previews work
- ✅ Structured data recognized
- ⚠️ Initial page load may be slower than SSR
- ⚠️ No incremental static regeneration

### Timeline for Ranking
- **1-2 weeks**: Pages indexed by Google
- **1-2 months**: Start appearing in search results
- **3-6 months**: Competitive ranking for branded keywords
- **6-12 months**: Ranking for industry keywords

---

## When to Migrate to Next.js

Consider migrating if:
- You need faster initial page loads (< 1 second)
- You want automatic sitemap generation
- You're building a blog or content-heavy site
- You need dynamic OG images per page
- You want incremental static regeneration
- SEO is mission-critical (SaaS, marketplace, etc.)

Otherwise, your current setup with pre-rendering is **totally sufficient** for most modern tech websites!

---

## Support

If you have questions about deployment or SEO:
- Next.js migration: See `NEXTJS_MIGRATION_GUIDE.md`
- Vite documentation: https://vitejs.dev/guide/
- Web.dev SEO guides: https://web.dev/learn-seo/
