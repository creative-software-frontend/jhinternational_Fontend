import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `Track Order | ${SITE_CONFIG.name}`,
  description: `Track the status of your ${SITE_CONFIG.name} order and follow its shipping progress in real time.`,
}

export default function TrackOrderLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
