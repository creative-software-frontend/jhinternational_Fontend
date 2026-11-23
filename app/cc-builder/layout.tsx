import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `CC Builder | ${SITE_CONFIG.name}`,
  description: `Build your custom CCTV or IP camera surveillance setup with cameras, recorders, storage, and accessories from ${SITE_CONFIG.name}.`,
}

export default function CcBuilderLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
