import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `Store Locator | ${SITE_CONFIG.name}`,
  description: `Find ${SITE_CONFIG.name}'s retail stores and service centers across Bangladesh for hardware support and in-person shopping.`,
}

export default function StoresLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
