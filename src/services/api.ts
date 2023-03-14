import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const { token } = useAuthStore.getState()

  if (token) config.headers.Authorization = `Bearer ${token}` 

  return config
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // handleError(error?.response?.data)
  return Promise.reject(error)
}

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    'Content-type': 'application/json',
  }
})

api.interceptors.request.use(onRequest, undefined)

api.interceptors.response.use(undefined, onResponseError)


export { api }