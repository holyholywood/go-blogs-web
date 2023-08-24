import ArticleItem from "@/app/home/components/ArticleItem";
import { post } from "@/model/Post";
import React from "react";
type articleListProps = {
  posts: post[];
};
const ArticleList = ({ posts }: articleListProps) => {
  return (
    <div className="space-y-4 ">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <ArticleItem {...post} key={post.id} />
          ))}
        </>
      ) : (
        <div className="flex flex-col gap-4 py-8 justify-center items-center">
          <div className="text-5xl">☹️</div>
          <h1 className="text-xl text-dark-hover">Tidak ada post saat ini</h1>
        </div>
      )}
    </div>
  );
};

export default ArticleList;
