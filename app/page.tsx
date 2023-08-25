import AppConfig from "@/config/app-config";
import { Metadata } from "next";
import { post } from "@/model/Post";
import { responseBodyType } from "@/lib/api-client/API";
import MainLayout from "./components/template/MainLayout";
import ArticleList from "./components/organisms/PostList";

export const metadata: Metadata = {
  title: "Beranda" + AppConfig.PAGE_TITLE_APP_NAME,
};

const getPostData = async (): Promise<responseBodyType<post[]>> => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL + "/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const { payload } = await getPostData();
  return (
    <MainLayout className="pb-8">
      <ArticleList posts={payload} />
    </MainLayout>
  );
}
