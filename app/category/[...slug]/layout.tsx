import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `Category Products | ${SITE_CONFIG.name}`,
  description:
    "Explore curated tech products, PC components, and accessories across product categories in Bangladesh.",
}

export default function CategoryDetailLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
