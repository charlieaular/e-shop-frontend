import { Product } from "../types/Product";
import { api } from "./api";

export const products = {

  productsByCategory: (category: number): Promise<Product[]> => api.get(`products/category/${category}`).then(({data}) => data?.products)

}
