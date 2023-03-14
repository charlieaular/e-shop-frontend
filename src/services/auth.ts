import { LoginRequest } from "../types/login/login.request";
import { LoginReponse } from "../types/login/login.response";
import { RegisterRequest } from "../types/register/register.request";
import { RegisterReponse } from "../types/register/register.response";
import { api } from "./api";

export const auth = {

  login: (params: LoginRequest) : Promise<LoginReponse> => api.post(`/auth/login`, params).then(({data}) => data),

  register: (params: RegisterRequest) : Promise<RegisterReponse> => api.post(`/auth/register`, params).then(({data}) => data),

}
