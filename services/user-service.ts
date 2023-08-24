import AppConfig from "@/config/app-config";
import InternalErrorExceptions from "@/exceptions/InternalErrorExceptions";
import { responseBodyType } from "@/lib/api-client/API";
import { user } from "@/model/User";

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
    console.log("message", res.url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const result: responseBodyType<user & { created_at: string }> = await res.json();
    return result.payload;
  }
}

export default userService;
