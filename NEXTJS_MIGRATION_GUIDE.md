# Next.js Migration Guide for Enzy

## Overview
This guide will help you migrate your Enzy website from React + Vite (Figma Make) to Next.js 15 with the App Router for optimal SEO performance.

## Why Migrate to Next.js?

### SEO Benefits
- **Server-Side Rendering (SSR)**: Search engines can crawl fully-rendered HTML
- **Static Site Generation (SSG)**: Pre-render pages at build time for instant load times
- **Automatic sitemap generation**: Better indexing by search engines
- **Built-in Image Optimization**: Lazy loading, responsive images, modern formats
- **Faster Time-to-Interactive (TTI)**: Critical for Core Web Vitals and SEO rankings

### Performance Benefits
- **Automatic code splitting**: Only load JavaScript needed for each page
- **Optimized fonts**: Self-host Google Fonts with zero layout shift
- **Route prefetching**: Instant navigation between pages
- **Streaming SSR**: Show content progressively as it renders

---

## Migration Steps

### 1. Create New Next.js Project

```bash
npx create-next-app@latest enzy-nextjs
```

**Configuration options:**
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ✅ Turbopack: Yes (for faster dev builds)
- ❌ Customize import alias: No (use default `@/*`)

### 2. Copy Your Existing Code

```bash
# From your Figma Make project root:

# Copy components
cp -r src/app/components enzy-nextjs/src/components

# Copy styles
cp -r src/styles enzy-nextjs/src/styles

# Copy assets/imports
cp -r src/imports enzy-nextjs/public/imports

# Copy utilities
cp -r src/app/utils enzy-nextjs/src/utils
```

### 3. Install Dependencies

```bash
cd enzy-nextjs
pnpm install motion lucide-react next-themes
pnpm install @radix-ui/react-accordion @radix-ui/react-dialog # ... (copy from package.json)
```

### 4. Convert to Next.js App Router Structure

#### Current Structure (Vite):
```
src/app/
├── App.tsx
├── Home.tsx
├── Features.tsx
├── Solutions.tsx
├── Resources.tsx
├── About.tsx
├── routes.tsx
└── components/
```

#### New Structure (Next.js):
```
src/app/
├── layout.tsx          (replaces Root.tsx)
├── page.tsx            (replaces Home.tsx)
├── features/
│   └── page.tsx        (replaces Features.tsx)
├── solutions/
│   └── page.tsx        (replaces Solutions.tsx)
├── resources/
│   └── page.tsx        (replaces Resources.tsx)
├── about/
│   └── page.tsx        (replaces About.tsx)
└── metadata.ts         (SEO configuration)

src/components/         (shared components)
```

### 5. Create Root Layout (`src/app/layout.tsx`)

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { PixelCanvas } from '@/components/PixelCanvas'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganizationSchema, SoftwareApplicationSchema } from '@/components/SEO'
import '@/styles/fonts.css'
import '@/styles/theme.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://enzy.com'),
  title: {
    default: 'Enzy - The Operating System for High-Performance Sales Teams',
    template: '%s | Enzy'
  },
  description: 'Transform your sales team with Enzy\'s AI-powered platform. Streamline workflows, boost productivity, and close more deals with intelligent automation and real-time insights.',
  keywords: ['sales platform', 'sales automation', 'CRM', 'sales analytics', 'team performance'],
  authors: [{ name: 'Enzy' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enzy.com',
    siteName: 'Enzy',
    title: 'Enzy - The Operating System for High-Performance Sales Teams',
    description: 'Transform your sales team with Enzy\'s AI-powered platform.',
    images: [
      {
        url: 'https://enzy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enzy Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enzy - The Operating System for High-Performance Sales Teams',
    description: 'Transform your sales team with Enzy\'s AI-powered platform.',
    images: ['https://enzy.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className={inter.variable}>
        <ThemeProvider>
          <div className="relative w-full min-h-screen font-['Inter'] selection:bg-[#19ad7d] selection:text-white">
            <PixelCanvas />
            <div className="relative w-full flex flex-col items-center overflow-x-hidden">
              <Header />
              <main className="w-full flex-1 flex flex-col items-center z-10 relative pt-[88px]">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 6. Update Page Components

**Example: `src/app/page.tsx` (Home)**

```tsx
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { FeaturesSection } from '@/components/FeaturesSection'
// ... other imports

export const metadata: Metadata = {
  title: 'Enzy - The Operating System for High-Performance Sales Teams',
  description: 'Transform your sales team with Enzy\'s AI-powered platform. Streamline workflows, boost productivity, and close more deals.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationsSection />
      <SpecsSection />
      <TestimonialsSection />
    </>
  )
}
```

**Example: `src/app/features/page.tsx`**

```tsx
import { Metadata } from 'next'
import { FeaturesContent } from '@/components/FeaturesContent'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover Enzy\'s powerful features: AI-powered insights, automated workflows, real-time analytics, and seamless integrations.',
}

export default function FeaturesPage() {
  return <FeaturesContent />
}
```

### 7. Update Components to Remove Client-Side Routing

**Before (React Router):**
```tsx
import { Link } from "react-router"
import { useLocation } from "react-router"

<Link to="/features">Features</Link>
```

**After (Next.js):**
```tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'

<Link href="/features">Features</Link>
```

**Mark client components:**
```tsx
'use client' // Add this at the top of components that use hooks or browser APIs
```

### 8. Update Image Imports

**Before (Vite):**
```tsx
import imgA from "figma:asset/abc123.png"

<img src={imgA} alt="..." />
```

**After (Next.js):**
```tsx
import Image from 'next/image'

<Image 
  src="/imports/abc123.png" 
  alt="..." 
  width={1200}
  height={800}
  priority // for above-the-fold images
/>
```

### 9. Configure `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Allow Unsplash images
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig
```

### 10. Add Sitemap (`src/app/sitemap.ts`)

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://enzy.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
```

### 11. Add robots.txt (`src/app/robots.ts`)

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://enzy.com/sitemap.xml',
  }
}
```

### 12. Update Tailwind Config for v4

Since you're using Tailwind v4, ensure your `tailwind.config.ts` is minimal:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
}

export default config
```

---

## Testing the Migration

### Development Server
```bash
pnpm dev
```

### Build for Production
```bash
pnpm build
```

### Test Production Build Locally
```bash
pnpm start
```

### Check SEO
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3000
```

---

## Deployment Options

### Vercel (Recommended)
1. Push your Next.js project to GitHub
2. Import project to Vercel
3. Deploy automatically with every push
4. Zero configuration needed

### Netlify
```bash
# netlify.toml
[build]
  command = "pnpm build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Cloudflare Pages
1. Set build command: `pnpm build`
2. Set build output directory: `.next`
3. Add Node.js compatibility flag

---

## Post-Migration SEO Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics 4
- [ ] Configure meta pixel (if using)
- [ ] Test all pages with Google's Rich Results Test
- [ ] Verify structured data with Schema Markup Validator
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Set up 301 redirects if changing domains
- [ ] Update social media links to new deployment URL
- [ ] Create `og-image.jpg` (1200x630px) for Open Graph

---

## Key Differences: Vite vs Next.js

| Feature | Vite (Current) | Next.js (Migrated) |
|---------|---------------|-------------------|
| Routing | React Router (client-side) | File-based (server + client) |
| SEO | Dynamic meta tags via JS | Static meta in each route |
| Images | Standard `<img>` tags | Optimized `<Image>` component |
| Data Fetching | Client-side only | Server + client options |
| Build Output | Static files | Static + server functions |
| Deploy | Any static host | Vercel/Netlify/CF Pages |

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Core Web Vitals](https://web.dev/vitals/)

---

## Need Help?

If you encounter issues during migration:
1. Check the [Next.js Discord](https://discord.gg/nextjs)
2. Review [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
3. Search [Next.js Discussions](https://github.com/vercel/next.js/discussions)
