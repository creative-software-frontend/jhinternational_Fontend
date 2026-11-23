"use client"

import useCartState from "@/hooks/useCartState"
import useCompareState from "@/hooks/useCompareState"
import useFavoritesState from "@/hooks/useFavoritesState"
import usePcBuilderState from "@/hooks/usePcBuilderState"
import useCcBuilderState from "@/hooks/useCcBuilderState"
import { createContext, useContext } from "react"

interface ShopContextType
  extends
    ReturnType<typeof useCartState>,
    ReturnType<typeof useFavoritesState>,
    ReturnType<typeof useCompareState>,
    ReturnType<typeof usePcBuilderState>,
    ReturnType<typeof useCcBuilderState> {}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const cart = useCartState()
  const favorites = useFavoritesState()
  const pcBuilder = usePcBuilderState()
  const ccBuilder = useCcBuilderState()
  const compare = useCompareState()

  return (
    <ShopContext.Provider
      value={{
        ...cart,
        ...compare,
        ...favorites,
        ...pcBuilder,
        ...ccBuilder,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider")
  }
  return context
}
