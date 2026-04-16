import React from "react"
import type { Metadata } from "next"
import { Resources } from "@/app/Resources"
import { SEO_CONFIG } from "@/app/utils/seo-config"
import { buildMetadata } from "@/app/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: SEO_CONFIG.resources.title,
  description: SEO_CONFIG.resources.description,
  path: "/resources",
})

export default function Page() {
  return <Resources />
}

