import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `PC Build Quote | ${SITE_CONFIG.name}`,
  description:
    "Print-ready PC build summary with pricing, components, and wattage details for your custom setup.",
}

export default function PrintLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
