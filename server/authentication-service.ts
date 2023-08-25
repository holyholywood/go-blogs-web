import AppConfig from "@/config/app-config";
import { user } from "@/model/User";
import serverCookie from "@/lib/helpers/server-cookies";
import JWT from "@/lib/helpers/jwt";

export type registerFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
};
class AuthService {
  public static getServerUser() {
    const token = serverCookie.get(AppConfig.ACCESS_TOKEN_KEY);
    if (!token) return null;
    const user = JWT.serverParse<user>(token);

    return user;
  }
}

export default AuthService;
