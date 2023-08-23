import Button from "@/app/components/atoms/Button";
import CategoryChip from "@/app/components/atoms/CategoryChip";
import RouterLink from "@/app/components/atoms/RouterLink";
import { getRelativeTime } from "@/lib/helpers/date/moment";
import imageHelpers from "@/lib/helpers/image";
import { post } from "@/model/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMore2Fill } from "react-icons/ri";

type ArticleItemProps = {} & post;

const ArticleItem = ({ ...post }: ArticleItemProps) => {
  return (
    <div className="space-y-2 border px-4 py-6 rounded-md dark:bg-dark-light bg-slate-50 text-xs">
      <div className="flex justify-between items-center mb-6">
        <Link href={"/profile/" + post.creator.username} className="flex gap-3 items-center  w-fit">
          <div className="rounded-full overflow-hidden flex justify-center items-center h-fit my-auto">
            <Image
              src={post.creator.avatar ? post.creator.avatar : `https://ui-avatars.com/api/?background=171715&color=fff&name=${post.creator.name.split(" ").join("+")}`}
              alt="profilePicture"
              width={35}
              height={35}
              quality={100}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{post.creator.name}</span>
            <span className="text-dark-light">{getRelativeTime(post.created_at + "")}</span>
          </div>
        </Link>
        <button className="text-lg">
          <RiMore2Fill />
        </button>
      </div>
      {post.banner && (
        <figure className="relative w-full aspect-video rounded overflow-hidden">
          <Image src={imageHelpers.getImageUrl(post.banner)} alt={post.slug + "-banner"} fill className="object-cover" />
        </figure>
      )}

      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="py-2">{post.summary + `${post.summary.length >= 150 && "..."}`}</p>
      <div className="flex gap-4">
        {post.categories.map((category, i) => (
          <CategoryChip category_name={category.category_name} />
        ))}
      </div>
      <div className="flex items-center justify-end">
        <RouterLink href={`/posts/${post.slug}`} linkType="button" className="bg-primary hover:bg-primary-hover duration-200 text-white w-fit">
          Baca
        </RouterLink>
      </div>
    </div>
  );
};

export default ArticleItem;
