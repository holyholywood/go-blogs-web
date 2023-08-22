import Divider from "@/app/components/atoms/Divider";
import MainLayout from "@/app/components/template/MainLayout";
import AppConfig from "@/config/app-config";
import { responseBodyType } from "@/lib/api-client/API";
import imageHelpers from "@/lib/helpers/image";
import { post } from "@/model/Post";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import { RiHashtag } from "react-icons/ri";
const getArticleData = async (slug: string): Promise<responseBodyType<post>> => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL + "/posts/" + slug);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
const ReadPostPage = async ({ params }: { params: { slug: string } }) => {
  const cookie = cookies().get(AppConfig.ACCESS_TOKEN_KEY);
  const article = (await getArticleData(params.slug)).payload;

  return (
    <MainLayout>
      <div className="space-y-8 pb-8">
        <figure className="relative w-full rounded aspect-video overflow-hidden ">
          <Image src={imageHelpers.getImageUrl(article.banner)} alt="post-banner" fill className="object-cover" />
        </figure>
        <h1 className="text-xl font-semibold">{article.title}</h1>
        <div className="flex gap-4">
          {article.categories.map((category, i) => (
            <span key={i} className="text-xs px-2 py-1 border rounded-full inline-flex items-center  gap-2 text-dark-light">
              <RiHashtag /> {category.category_name}
            </span>
          ))}
        </div>
        <Divider className="" />
        <section dangerouslySetInnerHTML={{ __html: article.body }} className={`text-sm ${article.type === "article" && "[&>p]:indent-4"}`}></section>
        <section>Comment Should Here</section>
      </div>
    </MainLayout>
  );
};

export default ReadPostPage;
