import { useMutation, useQuery } from "react-query"
import { auth } from "../services/auth"
import { LoginRequest } from "../types/login/login.request"
import { RegisterRequest } from "../types/register/register.request"

export const useAuth = () => {

  const login = () => {
    const { data, isLoading, error, mutate } = useMutation({mutationKey: ["login"], mutationFn: (params: LoginRequest) => auth.login(params)})
    return { data, isLoading, error, mutate }
  }

  const register = () => {
    const { data, isLoading, error, mutate } = useMutation({mutationKey: ["register"], mutationFn: (params: RegisterRequest) => auth.register(params)})
    return { data, isLoading, error, mutate }
  }

  return {
    login,
    register
  }
}