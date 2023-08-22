import { user } from "../User";
import useCreatePost from "./useCreatePost";

export type post = {
  id: number;
  title: string | null;
  slug: string | null;
  body: string;
  banner: string | null;
  type: postType;
  creator_id: number;
  creator: user;
  categories: category[];
  created_at: Date;
  updated_at: Date;
};

export type createPost = Pick<post, "title" | "body" | "banner" | "type"> & { categories: number[] };
export type postType = "poem" | "article";

export { useCreatePost };
