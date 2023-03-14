import { useQuery } from "react-query"
import { products } from "../services/products"

export const useProducts = () => {

  const productsByCategory = (category: number) => {
    const { data, isLoading, error } = useQuery(["productsByCategory", category], () => products.productsByCategory(category))
    return { data, isLoading, error }
  }

  return {
    productsByCategory
  }
}