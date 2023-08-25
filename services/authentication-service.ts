import AppConfig from "@/config/app-config";
import { authorization } from "./../model/User";
import Fetch from "@/lib/api-client/base-api";
import cookie from "@/lib/helpers/cookie";
import { user } from "@/model/User";
import serverCookie from "@/lib/helpers/server-cookies";
import JWT from "@/lib/helpers/jwt";

type loginResponsePayload = {
  user: user;
  authorization: authorization;
};
type registerResponsePayload = any;

export type registerFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
};
class AuthService {
  public static async login(identity: string, password: string): Promise<{ status: boolean; message: string }> {
    const response = await Fetch.post<loginResponsePayload>("/auth/login", {
      email: identity,
      password,
    });

    if (response.status) {
      cookie.set(AppConfig.ACCESS_TOKEN_KEY, response.payload.authorization.token, {
        sameSite: "lax",
      });
    }

    return {
      status: response.status,
      message: response.message,
    };
  }

  public static async register(data: registerFormData): Promise<{ status: boolean; message: string }> {
    const response = await Fetch.post<registerResponsePayload>("/auth/register", {
      ...data,
      avatar: null,
    });

    return {
      status: response.status,
      message: response.message,
    };
  }
}

export default AuthService;
