import AppConfig from "@/config/app-config";
import Fetch from "@/lib/api-client/base-api";

type createPostResponsePayload = {};

type createPostParamsType = {
  title: string;
  banner: string;
  body: string;
};
class PostService {
  public static async createPost(type: "poem" | "article", data: createPostParamsType): Promise<{ status: boolean; message: string }> {
    const response = await Fetch.post<createPostResponsePayload>("/posts", {
      ...data,
      type,
      title: data.title ? data.title : null,
    });

    return {
      status: response.status,
      message: response.message,
    };
  }
}

export default PostService;
