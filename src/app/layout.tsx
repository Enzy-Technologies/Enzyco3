import React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { ThemeProvider } from "./components/ThemeProvider"
import { SiteShell } from "./components/SiteShell"
import { JsonLd } from "./components/JsonLd"
import { buildMetadata } from "./lib/seo"

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Enzy - The Operating System for High-Performance Sales Teams",
    description:
      "Transform your sales team with Enzy's AI-powered platform. Streamline workflows, boost productivity, and close more deals with intelligent automation and real-time insights.",
    path: "/",
  }),
  title: {
    default: "Enzy - The Operating System for High-Performance Sales Teams",
    template: "%s | Enzy",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Enzy",
    url: "https://enzy.co",
    logo: "https://enzy.co/logo.png",
    description: "The Operating System for High-Performance Sales Teams",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "sales@enzy.co",
    },
    sameAs: ["https://twitter.com/enzy", "https://linkedin.com/company/enzy"],
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Enzy",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareApplicationSchema} />
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  )
}

