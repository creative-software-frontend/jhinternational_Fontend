import { getProductsByCategory } from "@/lib/api/product.api"
import { CC_CATEGORIES } from "@/lib/data/Categories.data"
import ChooseCcComponentClient from "./ChooseComponentClient"

export default async function ChooseCcComponentPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const params = await searchParams
  const category = params.cat || "cc-camera"
  const matchedCategory = CC_CATEGORIES.find((item) => item.id === category)
  const productSlug = matchedCategory?.slug ?? category

  const productsPromise = getProductsByCategory([productSlug])

  return (
    <ChooseCcComponentClient
      category={category}
      categoryName={matchedCategory?.name}
      productsPromise={productsPromise}
    />
  )
}
