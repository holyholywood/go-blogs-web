import Fetch from "@/lib/api-client/base-api";
import { useState } from "react";
import { createPost, post } from ".";
import { useRouter } from "next/navigation";

const useCreatePost = () => {
  const router = useRouter();
  const [data, setData] = useState<createPost>({
    title: null,
    type: "article",
    body: "",
    banner: null,
    categories: [],
  });

  const [isCreating, SetIsCreating] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string | null>(null);

  async function handleCreate() {
    SetIsCreating(true);
    try {
      const response = await Fetch.post<post>("/posts", data);
      if (response.status) {
        router.push("/posts/" + response.payload.creator.username + "/" + response.payload.slug);
      }
    } catch (error: any) {
      setErrMessage(error.message);
    }
    SetIsCreating(false);
  }
  return { data, setData, isCreating, errMessage, handleCreate };
};

export default useCreatePost;
