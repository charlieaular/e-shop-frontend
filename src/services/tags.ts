import { TagsReponse } from "../types/tags/tags.response";
import { api } from "./api";

export const tags = {
  getAllTags: (): Promise<TagsReponse> => api.get(`/tags`).then(({data}) => data)
}
