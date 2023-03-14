import { useMutation, useQuery } from "react-query"
import { category } from "../services/category"
import { CreateCategoryRequest } from "../types/category/create/createCategory.request"

export const useCategory = () => {

  const getAllCategories = () => {
    const { data, isLoading, error, refetch } = useQuery(["getAllCategories"], category.getAllCategories)
    return { data, isLoading, error, refetch }
  }

  const createCategory = () => {
    const { data, isLoading, error, mutate } = useMutation({mutationKey: ["createCategory"], mutationFn: (params: CreateCategoryRequest) => category.createCategory(params)})
    return { data, isLoading, error, mutate }
  }
  
  const deleteCategory = () => {
    const { data, isLoading, error, mutate } = useMutation({mutationKey: ["deleteCategory"], mutationFn: (categoryId: number) => category.deleteCategory(categoryId)})
    return { data, isLoading, error, mutate }

  }

  

  return {
    getAllCategories,
    createCategory,
    deleteCategory,
  }
}