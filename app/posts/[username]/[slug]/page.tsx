import CategoryChip from "@/app/components/atoms/CategoryChip";
import Divider from "@/app/components/atoms/Divider";
import ImagePreview from "@/app/components/molecules/ImagePreview";
import MainLayout from "@/app/components/template/MainLayout";
import AppConfig from "@/config/app-config";
import InternalErrorExceptions from "@/exceptions/InternalErrorExceptions";
import { responseBodyType } from "@/lib/api-client/API";
import { getRelativeTime } from "@/lib/helpers/date/moment";
import imageHelpers from "@/lib/helpers/image";
import { fontSerif } from "@/lib/resource/fonts";
import { post } from "@/model/Post";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const { payload }: responseBodyType<post> = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL + "/posts/" + slug).then((res) => res.json());
  const keywordGenerator = payload.type === "article" ? ["artikel", "article"] : ["poem", "puisi"];
  const description = `${keywordGenerator[0]} by ${payload.creator.name}`;
  return {
    title: payload.title + AppConfig.PAGE_TITLE_APP_NAME,
    description: description,
    keywords: ["ditotisi", ...keywordGenerator, payload.creator.name, ...payload.categories.map((category) => category.category_name)],
    openGraph: {
      type: "article",
      title: payload.title ?? "post-title",
      description: payload.summary,
      images: imageHelpers.getMediaUrl(payload.banner),
      url: `https://nge-blog.ditotisi.com/post/${payload.creator.username}/${payload.slug}`,
    },
    twitter: {
      title: payload.title ?? "post-title",
      description: payload.summary,
      images: imageHelpers.getMediaUrl(payload.banner),
      creator: payload.creator.name,
      site: `https://nge-blog.ditotisi.com/post/${payload.creator.username}/${payload.slug}`,
    },
  };
}

const getArticleData = async (slug: string): Promise<responseBodyType<post>> => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL_LOCAL + "/posts/" + slug);
  if (!res.ok) {
    throw new InternalErrorExceptions("Failed to fetch datas");
  }

  return res.json();
};

const ReadPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = (await getArticleData(params.slug)).payload;

  return (
    <MainLayout>
      <div className="space-y-8 pb-8">
        {post.banner && (
          <>
            <figure className="relative w-full rounded aspect-video overflow-hidden ">
              <ImagePreview src={imageHelpers.getImageUrl(post.banner)} alt="post-banner" fill className="object-cover" caption={post.title ?? ""} />
            </figure>
          </>
        )}
        <h1 className="text-xl font-semibold">{post.title}</h1>
        {post.banner && <Divider className="" />}
        <section dangerouslySetInnerHTML={{ __html: post.body }} className={`text-sm ${fontSerif.className} ${post.type === "poem" && "[&>p]:min-h-[1.5rem] whitespace-pre-line"}`}></section>
        <div className="flex gap-4">
          {post.categories.map((category, i) => (
            <CategoryChip key={i} category_name={category.category_name} />
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <Link href={"/profile/" + post.creator.username} className="flex gap-3 items-center  w-fit">
            <div className="rounded-full overflow-hidden flex justify-center items-center h-fit my-auto">
              <Image
                src={post.creator.avatar ? imageHelpers.getMediaUrl(post.creator.avatar) : `https://ui-avatars.com/api/?background=171715&color=fff&name=${post.creator.name.split(" ").join("+")}`}
                alt="profilePicture"
                width={35}
                height={35}
                quality={100}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{post.creator.name}</span>
              <span className="text-dark-light text-xs">{getRelativeTime(post.created_at + "")}</span>
            </div>
          </Link>
        </div>
        <Divider className="" />
        {/* <section>Comment Should Here</section> */}
      </div>
    </MainLayout>
  );
};

export default ReadPostPage;
