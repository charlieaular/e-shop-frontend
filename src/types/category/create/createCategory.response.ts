import { BaseResponse } from "../../Base.response";
import { Category } from "../../Category";

export interface CreateCategoryReponse extends BaseResponse {
  category: Category;
}
