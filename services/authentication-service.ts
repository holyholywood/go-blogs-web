import { authorization } from "./../model/User";
import Fetch from "@/lib/api-client/base-api";
import { user } from "@/model/User";

type loginResponsePayload = {
  user: user;
  authorization: authorization;
};

class AuthService {
  public static async login(identity: string, password: string): Promise<{ status: boolean; message: string }> {
    const response = await Fetch.post<loginResponsePayload>("/auth/login", {
      email: identity,
      password,
    });

    return {
      status: response.status,
      message: response.message,
    };
  }
}

export default AuthService;
