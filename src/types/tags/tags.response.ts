import { BaseResponse } from "../Base.response";
import { Tag } from "../Tag";

export interface TagsReponse extends BaseResponse {
  tags: Tag[];
}
