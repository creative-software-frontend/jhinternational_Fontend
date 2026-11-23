"use client"

import { useRouter } from "next/navigation"
import { useShop } from "@/context/ShopContext"
import { Product } from "@/lib/data/types"
import ProductListing from "@/components/ProductListing"

type ChooseCcComponentClientProps = {
  category: string
  categoryName?: string
  productsPromise: Promise<Product[]>
}

export default function ChooseCcComponentClient({
  category,
  categoryName,
  productsPromise,
}: ChooseCcComponentClientProps) {
  const router = useRouter()
  const { setCcBuildItem } = useShop()

  const handleSelect = (product: Product) => {
    setCcBuildItem(category, {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      spec: product.specs.join(", ") || "Standard Spec",
      wattage: 65,
    })
    router.push("/cc-builder")
  }

  return (
    <ProductListing
      mode="build"
      title={`Choose ${categoryName ?? category.toUpperCase()}`}
      breadcrumbs={[
        { name: "CC Builder", url: "/cc-builder" },
        {
          name: categoryName ?? category,
          url: `/cc-builder/choose?cat=${category}`,
          active: true,
        },
      ]}
      productsPromise={productsPromise}
      onSelect={handleSelect}
    />
  )
}
