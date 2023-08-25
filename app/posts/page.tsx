import React from "react";
import MainLayout from "../components/template/MainLayout";
import { Metadata } from "next";
import AppConfig from "@/config/app-config";
import { responseBodyType } from "@/lib/api-client/API";
import { post } from "@/model/Post";
import ArticleList from "../components/organisms/PostList";
import serverCookie from "@/lib/helpers/server-cookies";

export const metadata: Metadata = {
  title: "Postingan Saya" + AppConfig.PAGE_TITLE_APP_NAME,
};

const getPostData = async (token: string): Promise<responseBodyType<post[]>> => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL + "/posts/me?username=ditotisi", {
    cache: "no-store",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const PostsPage = async () => {
  const token = serverCookie.get(AppConfig.ACCESS_TOKEN_KEY);
  const { payload } = await getPostData(token ?? "");

  return (
    <MainLayout className="pb-8">
      <ArticleList posts={payload} />
    </MainLayout>
  );
};

export default PostsPage;
