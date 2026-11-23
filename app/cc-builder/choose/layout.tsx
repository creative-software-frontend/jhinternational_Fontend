import { SITE_CONFIG } from "@/lib/config/site.config"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: `Choose CC Components | ${SITE_CONFIG.name}`,
  description: `Pick the right camera, recorder, storage, and accessories for your custom CCTV build at ${SITE_CONFIG.name}.`,
}

export default function ChooseCcLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
