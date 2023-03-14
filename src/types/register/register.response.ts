import { BaseResponse } from "../Base.response";
import { User } from "../User";

export interface RegisterReponse extends BaseResponse {
  token: string;
  user: User;
}
