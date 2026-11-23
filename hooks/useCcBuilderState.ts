import { STORAGE_KEYS } from "@/lib/storageKeys"
import { useMemo, useSyncExternalStore } from "react"

export interface CcProduct {
  id: string | number
  title: string
  price: number
  image: string
  spec: string
  wattage: number
}

const storageKey = STORAGE_KEYS.CC_BUILD

function subscribeCc(callback: () => void) {
  if (typeof window === "undefined") return () => {}
  window.addEventListener("storage", callback)
  window.addEventListener("cc-build-updated", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("cc-build-updated", callback)
  }
}

export default function useCcBuilderState() {
  const ccBuildJson = useSyncExternalStore(
    subscribeCc,
    () => localStorage.getItem(storageKey) || "[]",
    () => "{}"
  )

  const ccBuild: Record<string, CcProduct> = useMemo(() => {
    try {
      return JSON.parse(ccBuildJson)
    } catch {
      return {}
    }
  }, [ccBuildJson])

  const saveCcToLocalStorage = (build: Record<string, CcProduct>) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(storageKey, JSON.stringify(build))
        window.dispatchEvent(new Event("cc-build-updated"))
      } catch (error) {
        console.error("Failed to save CC build", error)
      }
    }
  }

  const setCcBuildItem = (category: string, product: CcProduct) => {
    const updatedBuild = { ...ccBuild, [category]: product }
    saveCcToLocalStorage(updatedBuild)
  }

  const removeCcBuildItem = (category: string) => {
    const updatedBuild = { ...ccBuild }
    delete updatedBuild[category]
    saveCcToLocalStorage(updatedBuild)
  }

  const clearCcBuild = () => {
    saveCcToLocalStorage({})
  }

  const ccTotalAmount = Object.values(ccBuild).reduce(
    (sum, item) => sum + item.price,
    0
  )
  const ccTotalWattage = Object.values(ccBuild).reduce(
    (sum, item) => sum + item.wattage,
    75
  ) // Base system wattage

  return {
    ccBuild,
    setCcBuildItem,
    removeCcBuildItem,
    clearCcBuild,
    ccTotalAmount,
    ccTotalWattage,
  }
}
