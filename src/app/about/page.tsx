import React from "react"
import type { Metadata } from "next"
import { About } from "@/app/About"
import { SEO_CONFIG } from "@/app/utils/seo-config"
import { buildMetadata } from "@/app/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: SEO_CONFIG.about.title,
  description: SEO_CONFIG.about.description,
  path: "/about",
})

export default function Page() {
  return <About />
}

