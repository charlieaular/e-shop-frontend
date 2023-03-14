import { Category } from "../types/Category";
import { CreateCategoryRequest } from "../types/category/create/createCategory.request";
import { CreateCategoryReponse } from "../types/category/create/createCategory.response";
import { api } from "./api";

const categoryApi = "/category"

export const category = {

  getAllCategories: (): Promise<Category[]> => api.get(`${categoryApi}`).then(({ data }) => data?.categories),

  createCategory: (params: CreateCategoryRequest): Promise<CreateCategoryReponse> => api.post(`${categoryApi}`, params).then(({ data }) => data),

  deleteCategory: (categoryId: number): Promise<void> => api.delete(`${categoryApi}/${categoryId}`).then(({ data }) => data)

}
