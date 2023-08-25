import AppConfig from "@/config/app-config";
import { responseBodyType } from "@/lib/api-client/API";
import Fetch from "@/lib/api-client/base-api";
import serverCookie from "@/lib/helpers/server-cookies";
import { updateUser, user } from "@/model/User";

class userService {
  public static async updateProfile(user_id: number, user: updateUser) {
    const response = await Fetch.patch("/users/profile/" + user_id, user);

    return response;
  }
}

export default userService;
