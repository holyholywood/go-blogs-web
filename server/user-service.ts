import AppConfig from "@/config/app-config";
import { responseBodyType } from "@/lib/api-client/API";
import serverCookie from "@/lib/helpers/server-cookies";
import { updateUser, user } from "@/model/User";

class userService {
  public static async getMyProfile(access_token: string | undefined): Promise<user & { created_at: string }> {
    if (!access_token) {
      throw new Error("Tidak terautentikasi");
    }
    const res = await fetch(AppConfig.API_URL + "/auth/me", {
      headers: {
        authorization: "Bearer " + access_token,
      },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const result: responseBodyType<user & { created_at: string }> = await res.json();
    return result.payload;
  }

  public static async getUserProfile(username: string): Promise<user & { created_at: string }> {
    const res = await fetch(AppConfig.API_URL + "/users/profile/" + username, {
      headers: {
        authorization: "Bearer " + serverCookie.get(AppConfig.ACCESS_TOKEN_KEY),
      },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const result: responseBodyType<user & { created_at: string }> = await res.json();
    return result.payload;
  }
}

export default userService;
