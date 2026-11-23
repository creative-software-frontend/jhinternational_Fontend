import { getProductsByCategory } from "@/lib/api/product.api"
import { PC_CATEGORIES } from "@/lib/data/Categories.data"
import ChooseComponentClient from "./ChooseComponentClient"

export default async function ChooseComponentPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const params = await searchParams
  const category = params.cat || "processors"
  const matchedCategory = PC_CATEGORIES.find((item) => item.id === category)
  const productSlug = matchedCategory?.slug ?? category

  const productsPromise = getProductsByCategory([productSlug])

  return (
    <ChooseComponentClient
      category={category}
      categoryName={matchedCategory?.name}
      productsPromise={productsPromise}
    />
  )
}
