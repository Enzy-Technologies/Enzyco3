import React from "react"
import type { Metadata } from "next"
import { Solutions } from "@/app/Solutions"
import { SEO_CONFIG } from "@/app/utils/seo-config"
import { buildMetadata } from "@/app/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: SEO_CONFIG.solutions.title,
  description: SEO_CONFIG.solutions.description,
  path: "/solutions",
})

export default function Page() {
  return <Solutions />
}

