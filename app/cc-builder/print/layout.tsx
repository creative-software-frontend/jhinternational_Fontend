import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `CC Build Quote | ${SITE_CONFIG.name}`,
  description:
    "Print-ready CCTV build summary with pricing, components, and power details for your custom surveillance setup.",
}

export default function CcPrintLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
