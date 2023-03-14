import { useQuery } from "react-query"
import { tags } from "../services/tags"

export const useTags = () => {

  const getAllTags = () => {
    const { data, isLoading, error } = useQuery(["getAllTags"], tags.getAllTags)
    return { data, isLoading, error }
  }

  return {
    getAllTags
  }
}