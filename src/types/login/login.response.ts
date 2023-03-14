import { BaseResponse } from "../Base.response";
import { User } from "../User";

export interface LoginReponse extends BaseResponse {
  token: string;
  user: User;
}
